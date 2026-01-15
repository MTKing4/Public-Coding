import psycopg2
import pandas as pd
from slack_sdk import WebClient
import dataframe_image as dfi
import os

# --- Configuration ---
DB_CONFIG = {
    "dbname": "placeholder",
    "user": "placeholder",
    "password": "placeholder",
    "host": "placeholder",
    "port": "placeholder"
}

SLACK_TOKEN = os.environ.get("SLACK_TOKEN")
SLACK_CHANNEL = "#hourly-orders-report"
print(SLACK_TOKEN)
SQL_QUERY = """
SELECT
    zl.display_name AS locality,
    MAX(b.timestamp_utc AT TIME ZONE 'UTC' + INTERVAL '3 hours') AS latest_refresh_time,
    COUNT(b.id) FILTER (
                WHERE b.id NOT IN (
                    SELECT booking_id
                    FROM voided_bookings
                    WHERE void_cause_id = 28
                )
                AND lower(COALESCE(b.remarks, '')) <> 'sandbox') AS total_bookings,
    COUNT(b.id) FILTER (WHERE b.state_code = 9) AS completed_bookings,
    ROUND(
        (
            COUNT(b.id) FILTER (WHERE b.state_code = -1  AND b.id NOT IN (
                    SELECT booking_id
                    FROM voided_bookings
                    WHERE void_cause_id = 28
                )
                AND lower(COALESCE(b.remarks, '')) <> 'sandbox')::numeric
            / NULLIF(COUNT(b.id) FILTER (
                WHERE b.id NOT IN (
                    SELECT booking_id
                    FROM voided_bookings
                    WHERE void_cause_id = 28
                )
                AND lower(COALESCE(b.remarks, '')) <> 'sandbox'
            ), 0)
        ) * 100, 1
    ) AS voided_percentage,
    ROUND(
        (
            COUNT(b.id) FILTER (WHERE b.state_code = -2)::numeric
            / NULLIF(COUNT(b.id) FILTER (
                WHERE  b.id NOT IN (
                    SELECT booking_id
                    FROM voided_bookings
                    WHERE void_cause_id = 28
                )
                AND lower(COALESCE(b.remarks, '')) <> 'sandbox'
            ), 0)
        ) * 100, 1
    ) AS declined_percentage,
    FLOOR(AVG(EXTRACT(EPOCH FROM (finished.recorded_at - confirmed.recorded_at)) / 60)) AS avg_fulfillment_minutes
FROM bookings b
JOIN provisions p ON p.id = b.provision_id
JOIN zone_labels zl ON zl.zone_id = p.zone_id AND zl.locale_id = 0
-- Subquery for confirmation time (state 0)
LEFT JOIN (
    SELECT bsl.booking_id, MIN(bsl.recorded_at) AS recorded_at
    FROM booking_state_logs bsl
    WHERE bsl.state_code = 0
    GROUP BY bsl.booking_id
) confirmed ON confirmed.booking_id = b.id
-- Subquery for completion time (state 9)
LEFT JOIN (
    SELECT bsl.booking_id, MIN(bsl.recorded_at) AS recorded_at
    FROM booking_state_logs bsl
    WHERE bsl.state_code = 9
    GROUP BY bsl.booking_id
) finished ON finished.booking_id = b.id
WHERE (b.timestamp_utc AT TIME ZONE 'UTC' + INTERVAL '3 hours')::date
      = (now() AT TIME ZONE 'UTC' + INTERVAL '3 hours')::date
AND b.id NOT IN (
    SELECT booking_id
    FROM voided_bookings
    WHERE void_cause_id = 28
)
AND lower(COALESCE(b.remarks, '')) <> 'sandbox'
GROUP BY zl.display_name
ORDER BY
    CASE zl.display_name
        WHEN 'Zone_A' THEN 1
        WHEN 'Zone_B' THEN 2
        WHEN 'Zone_C' THEN 3
        WHEN 'Zone_D' THEN 4
        WHEN 'Zone_E' THEN 5
        ELSE 6
    END;
"""


def convert_df_to_png(df, output_path="report.png"):
    # Optional: Apply some basic styling to make it look "Slack-ready"
    styled_df = (df.style
    .set_table_styles([
        {'selector': 'th', 'props': [('background-color', '#fec63b'), ('color', 'white'), ('font-family', 'Arial')]},
        {'selector': 'td', 'props': [('font-family', 'Arial'), ('text-align', 'center'), ('padding', '8px')]}])
    .set_properties(**{'border': '1px solid lightgrey'})
    .format({
        'cancelled_percentage': '{:.1f}%',  # 1 decimal place + % sign
        'rejected_percentage': '{:.1f}%',  # 1 decimal place + % sign
        'avg_delivery_minutes': '{:.0f}'  # No decimals for minutes
    }))

    # Export the styled dataframe as a PNG
    dfi.export(styled_df, output_path, table_conversion='chrome', dpi=200)
    print(f"Image saved to {output_path}")


def send_to_slack():
    try:
        # 1. Fetch Data
        conn = psycopg2.connect(**DB_CONFIG)
        df = pd.read_sql_query(SQL_QUERY, conn)
        conn.close()

        print(df)

        convert_df_to_png(df)

        client = WebClient(token=SLACK_TOKEN)
        client.files_upload_v2(
            channel="placeholder",
            file="report.png",
            title="Hourly Order Report",
            initial_comment="Below is the latest update."
        )
        print("Report sent successfully!")

        slack_message = f"*Hourly Orders Report*\n```\n{table_output}\n```"


        # 3. Send to Slack
        client = WebClient(token=SLACK_TOKEN)
        response = client.chat_postMessage(
            channel=SLACK_CHANNEL,
            text=slack_message
        )


    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    send_to_slack()