import psycopg2
import pandas as pd
import requests
import logging
import datetime
from tabulate import tabulate
import json

# ---------------- Logging Setup ----------------
logging.basicConfig(
    filename="cancelation_log.txt",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logging.info("Script started.")

with open('config.json') as f:
    config = json.load(f)

try:
    # Database connection
    conn2 = psycopg2.connect(
        database=config["postgres_db_name"],
        user=config["postgres_db_user"],
        password=config["postgres_db_password"],
        host=config["postgres_db_host"],
        port=config["postgres_db_port"]
    )
    logging.info("Database connection established.")
except Exception as e:
    logging.error(f"Database connection failed: {e}")
    raise

# ---------------- TIME LOGIC SETUP ----------------
now_utc3 = datetime.datetime.utcnow() + datetime.timedelta(hours=3)
current_hour = now_utc3.hour

if current_hour == 0:
    # 00:30 Logic -> Report is for YESTERDAY
    time_shift = "INTERVAL '1 day'" 
    cutoff_hour = 24
    header_time = "23:59"
    
    # Python Date Logic: Target is yesterday
    target_date = (now_utc3 - datetime.timedelta(days=1)).date()
    date_label = "🟢 YESTERDAY" # Or "🟢 CLOSED" if you prefer
    
    logging.info("Detected 00:XX. Target date set to Yesterday.")
else:
    # Normal Logic -> Report is for TODAY
    time_shift = "INTERVAL '0 day'"
    cutoff_hour = current_hour
    header_time = f"{current_hour - 1}:59"
    
    # Python Date Logic: Target is today
    target_date = now_utc3.date()
    date_label = "🟢 TODAY"
    
    logging.info(f"Detected normal time. Target date set to Today.")

# ---------------- MODIFIED SQL QUERIES ----------------
# We inject {time_shift} and {cutoff_hour} into the queries.

last_10_weekday = f"""
WITH b_adjusted AS ( 
    SELECT timestamp_utc + INTERVAL '3 hours' AS timestamp_local, unique_identifier 
    FROM bookings b 
    WHERE b.id NOT IN (SELECT booking_id FROM voided_bookings vb WHERE vb.void_cause_id = 28) 
    AND b.state_code not in (-1, -2) 
    AND b.provision_id = 6
) 
SELECT timestamp_local::date AS entry_date, COUNT(unique_identifier) AS activity_count 
FROM b_adjusted 
WHERE 
    -- Compare Day of Week of Entry vs (Reference Time - Shift)
    EXTRACT(DOW FROM timestamp_local) = EXTRACT(DOW FROM NOW() + INTERVAL '3 hours' - {time_shift}) 
    -- Look back 64 days from (Reference Time - Shift)
    AND timestamp_local::date >= (NOW() + INTERVAL '3 hours' - {time_shift})::date - INTERVAL '64 days' 
    -- Dynamic Hour Limit (Capped at cutoff)
    AND EXTRACT(HOUR FROM timestamp_local) < {cutoff_hour}
GROUP BY timestamp_local::date 
ORDER BY activity_count DESC;
"""

last_sixty_days = f"""
SELECT
    CAST(b.timestamp_utc::timestamp + interval '3 hours' AS date) AS activity_date,
    COUNT(b.unique_identifier) AS activity_count
FROM bookings b
WHERE
    b.id NOT IN (SELECT booking_id FROM voided_bookings vb WHERE vb.void_cause_id = 28)
    AND b.state_code not in  (-1, -2)
    -- Compare date relative to (Reference Time - Shift)
    AND b.timestamp_utc::timestamp + interval '3 hours' >= (CURRENT_DATE - {time_shift}) - INTERVAL '60 days'
    -- Dynamic Hour Limit
    AND EXTRACT(HOUR FROM b.timestamp_utc::timestamp + interval '3 hours') < {cutoff_hour}
    AND b.provision_id = 6
GROUP BY CAST(b.timestamp_utc::timestamp + interval '3 hours' AS date)
ORDER BY activity_count DESC;
"""

# ... (Keep database fetching and pandas processing code exactly the same) ...

try:
    logging.info("Initiating record retrieval from data source.")
    df_periodic_sync = pd.read_sql_query(last_10_weekday, conn2)
    df_history = pd.read_sql_query(last_sixty_days, conn2)
    logging.info("Records retrieved successfully.")
except Exception as e:
    logging.error(f"Data retrieval failure: {e}")
    raise

# ---------------- DATE HIGHLIGHTING LOGIC ----------------

def process_timestamps(df, target_dt, label_str):
    # 1. Ensure it is datetime (using generic 'entry_date')
    df['entry_date'] = pd.to_datetime(df['entry_date'])
    
    # 2. Create mask (Compare data against the Calculated Target Date)
    is_target_date = df['entry_date'].dt.date == target_dt
    
    # 3. Format string (Month-Day Weekday)
    df['entry_date'] = df['entry_date'].dt.strftime("%m-%d %a")
    
    # 4. Apply the Status Indicator and Label
    df.loc[is_target_date, 'entry_date'] = label_str
    
    return df

# Apply the logic to both DataFrames
df_history = process_timestamps(df_history, target_date, date_label)
df_periodic_sync = process_timestamps(df_periodic_sync, target_date, date_label)

# ---------------------------------------------------------

# Rename columns to shorter names
df_history.rename(columns={'entry_date': 'Date', 'activity_count': 'Qty'}, inplace=True)
df_periodic_sync.rename(columns={'entry_date': 'Date', 'activity_count': 'Qty'}, inplace=True)

# Ensure Qty is Integer (removes decimals if any)
df_history['Qty'] = df_history['Qty'].astype(int)
df_periodic_sync['Qty'] = df_periodic_sync['Qty'].astype(int)

# Notification Service credentials
NOTIFY_API_TOKEN = config["NOTIFY_API_TOKEN"]
NOTIFY_TARGET_ID = "placeholder"

def generate_text_table(df, title):
    table = tabulate(
        df,
        headers="keys",
        tablefmt="simple", 
        colalign=("left", "right"), 
        showindex=False
    )
    return f"*{title}*\n```{table}```"

# Dispatch message to notification endpoint
def dispatch_notification(target_id, message):
    url = "https://slack.com/api/chat.postMessage"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {NOTIFY_API_TOKEN}"
    }
    payload = {
        "channel": target_id,
        "text": message
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        if response.status_code == 200 and response.json().get("ok"):
            logging.info("Notification dispatched successfully.")
        else:
            logging.error(f"Notification dispatch failed: {response.json()}")
    except Exception as e:
        logging.error(f"Notification API request error: {e}")

msg_periodic = generate_text_table(
    df_periodic_sync,
    "Comparative Period Activity"
)

msg_history = generate_text_table(
    df_history,
    "Historical Trends (60-Day Window)"
)

# Time Update Logic
current_time_local = datetime.datetime.utcnow() + datetime.timedelta(hours=3)

if current_time_local.hour == 0:
    # If it is 00:xx, we are showing the Closing Report for Yesterday (up to 23:59)
    hour_display = "23"
else:
    # Otherwise, show the previous hour
    hour_display = str(current_time_local.hour - 1)

report_header = f"Data Sync Status: {hour_display}:59" + "\n\n" + msg_periodic + "\n\n" + msg_history
dispatch_notification(NOTIFY_TARGET_ID, report_header)

logging.info("Process completed.")