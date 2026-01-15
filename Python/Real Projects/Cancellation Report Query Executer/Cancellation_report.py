import psycopg2, pandas as pd


# --------------------------------------------------SQL Query-----------------------------------------------------------

conn = psycopg2.connect(
    host="placeholder",
    database= "placeholder",
    user= "placeholder",
    password= "placeholder",
    port="placeholder"
)

cursor = conn.cursor()

query = """
select
    to_char(t.recorded_at::timestamp + interval '3 Hours', 'YYYY-MM-DD HH24:MM') as date,
    t.unique_identifier as "Reference Code",
    ot.title as "Establishment",
    zl.display_name as "Locality",
case
    when t.state_code = -1 then 'Voided'
    when t.state_code = -2 then 'Incomplete'
end as "Transaction Status",
vcl.heading as "Void Reason",
man.commentary as "Support Note",
u.full_name as "Client Name",
u.contact_number as "Contact Info"
from transactions t
join outlets o on t.outlet_id = o.id
join outlet_translations ot on ot.outlet_id = o.id and ot.locale_id = 0
join provisions p on p.id = t.provision_id
join zones z on p.zone_id = z.id
join zone_labels zl on zl.zone_id = z.id and zl.locale_id = 0
join voided_transactions vt on vt.transaction_id = t.id
join void_cause_labels vcl on vt.void_cause_id = vcl.void_cause_id and vcl.locale_id = 0
left join managed_admin_notes man on man.transaction_id = t.id
join customers u on u.id = t.customer_id
where t.state_code in (-1,-2)
and lower(t.remarks) not like '%test%'
and vt.void_cause_id != 28"""

df_transactions = pd.read_sql_query(query, conn)

df_transactions.to_excel("Voided_Transactions_Report.xlsx", index=False)

cursor.close()
conn.close()

# -----------------------------------------Reading Files and Cleaning data----------------------------------------------

df_voids = pd.read_excel("Voided_Transactions_Report.xlsx")
df_comms_logs = pd.read_csv("telephony_export.csv", low_memory=False)

# Communication Logs Cleaning
cleansed_comms = df_comms_logs.loc[
    (df_comms_logs['department_name'] == "Support Team")
    & (df_comms_logs['dialed_number'].str.startswith("07")
    & (df_comms_logs['dialed_number'].str.len() == 11))
    & (~df_comms_logs['connection_established_at'].isna())]

cleansed_comms.loc[:, 'dialed_number'] = (
    cleansed_comms['dialed_number']
    .astype(str).str.replace(r'^.', '+964', regex=True))        # normalize international prefix


# Unify Date Format
cleansed_comms['connection_established_at'] = pd.to_datetime(cleansed_comms['connection_established_at'])
cleansed_comms['connection_established_at'] = cleansed_comms['connection_established_at'] + pd.Timedelta(hours=3)
cleansed_comms['connection_established_at'] = cleansed_comms['connection_established_at'].dt.strftime('%Y-%m-%d %H:%M:%S')

df_voids['date'] = pd.to_datetime(df_voids['date'])
df_voids['date'] = df_voids['date'].dt.strftime('%Y-%m-%d %H:%M:%S')


# Final Communication table
contact_history = cleansed_comms[['department_name', 'dialed_number', 'connection_established_at']]


#----------------------------------------Filtering for Numbers and Time-------------------------------------------------

# Convert timestamps
contact_history['connection_established_at'] = pd.to_datetime(contact_history['connection_established_at'])
df_voids['date'] = pd.to_datetime(df_voids['date'])

# Add unique row ID to voids DF
df_voids = df_voids.reset_index(drop=False)  # creates column "index"

# Merge contact records onto voids DF by contact info
merged = df_voids.merge(
    contact_history[['dialed_number', 'connection_established_at']],
    left_on='Contact Info',
    right_on='dialed_number',
    how='left'
)

# Calculate absolute time difference
merged['time_diff'] = (merged['date'] - merged['connection_established_at']).abs()

# Flag contacts that happen within the window (e.g., 15 mins)
merged['within_window'] = merged['time_diff'] <= pd.Timedelta(minutes=15)

# Flag voided rows with at least one matching contact in the time window
merged['valid_contact'] = (~merged['connection_established_at'].isna()) & merged['within_window']

# Aggregate back to one row per voided entry
result = merged.groupby('index')['valid_contact'].max()

# Store final result back in df_voids
df_voids['Client Contacted'] = df_voids['index'].map(result)

# Optional: drop helper index column
df_voids = df_voids.drop(columns=['index'])


df_voids = pd.read_excel("Voided_Transactions_Report.xlsx")
df_comms_logs = pd.read_csv("telephony_export.csv")


cleansed_comms = df_comms_logs.loc[(df_comms_logs['department_name'] == "Support Team") & (df_comms_logs['routing_type'] == 'outbound_rule') & (df_comms_logs['dialed_number'].str.startswith("07") & (df_comms_logs['dialed_number'].str.len() == 11)) & (df_comms_logs['connection_established_at'].fillna("") == "")]
cleansed_comms.to_excel("audit_check.xlsx", index=False)