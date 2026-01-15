import psycopg2, pandas as pd
import smtplib
import ssl
from email.message import EmailMessage
#--------------------------------------------------SQL Query-----------------------------------------------------------

conn = psycopg2.connect(
    host="placeholder",
    database= "placeholder",
    user= "placeholder",
    password= "placeholder",
    port="placeholder"
)

cursor = conn.cursor()


query = """
select zl.display_name as "Locality",
    count(*) as "Bookings",
    count(*) filter (where b.state_code = -1) as "Voided Bookings",
    round(count(*) filter (where b.state_code = -1)::numeric / nullif(count(*), 0), 3)*100 as "Ratio",
    max(b.timestamp_utc::timestamp(0) + interval '3 hour' ) as "Last Update"
from bookings b
    join provisions p
        on p.id = b.provision_id
    join zone_labels zl
        on p.zone_id = zl.zone_id and zl.locale_id = 0
    left join voided_bookings vb
        on b.id = vb.booking_id
    left join void_cause_labels vcl
        on vb.void_cause_id = vcl.void_cause_id and vcl.locale_id = 0
where 
     cast(b.timestamp_utc::timestamp + interval '3 hour' as date) = cast(now()::timestamp + interval '3 hour' as date)
    and (vcl.heading not like 'Sandbox' or vcl.heading is null)
group by zl.display_name"""

df = pd.read_sql_query(query, conn)

cursor.close()
conn.close()

#------------------------------------Creating Custom HTML table tag for each entry----------------------------------------


dynamic_table = ""

# Matches the generic "Ratio" column from the query
filtered_df = df.loc[df['Ratio'] >= 5]

entry_count = 0

for _, row in filtered_df.iterrows():
    percentage = row['Ratio']
    loc_name = row['Locality']
    loc_total = row['Bookings']
    loc_voided = row['Voided Bookings']
    loc_refresh = row['Last Update']

    row_tag = f""" <tr style="background-color: #ffffff;">
  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">{entry_count + 1}</td>
  <td style="padding: 10px; border-bottom: 1px solid #eee;">{loc_name}</td>
  <td style="padding: 10px; border-bottom: 1px solid #eee;">{loc_total}</td>
  <td style="padding: 10px; border-bottom: 1px solid #eee;">{loc_voided}</td>
  <td style="padding: 10px; border-bottom: 1px solid #eee;">{round(percentage, 2)}%</td>
   <td style="padding: 10px; border-bottom: 1px solid #eee;">{loc_refresh}</td>
    </tr>"""
    dynamic_table += row_tag
    entry_count += 1

#---------------------the stylized Html table that will hold the table tags from the code above-------------------------

dynamic_html_table = f"""<table style="border-collapse: collapse; width: 100%; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px; border: 1px solid #ddd;">
  <thead>
    <tr style="background-color: #fec63b; color: #ffffff; text-align: left;">
      <th style="padding: 12px; border-bottom: 2px solid #e5b335;">#</th>
      <th style="padding: 12px; border-bottom: 2px solid #e5b335;">Locality</th>
      <th style="padding: 12px; border-bottom: 2px solid #e5b335;">Bookings</th>
      <th style="padding: 12px; border-bottom: 2px solid #e5b335;">Voided Bookings</th>
      <th style="padding: 12px; border-bottom: 2px solid #e5b335;">Ratio (%)</th>
     <th style="padding: 12px; border-bottom: 2px solid #e5b335;">Last Update</th>
    </tr>
  </thead>
  <tbody>
    {dynamic_table}
  </tbody>
</table>"""

#---------------------------------------------Sending the Email----------------------------------------------------

if entry_count != 0:
    # 2. Email Credentials & Settings (Use Env Vars for security)
    SENDER_EMAIL = "placeholder"
    SENDER_PASSWORD = "placeholder"
    RECIPIENT_EMAILS = ["placeholder"]
    SMTP_SERVER = "smtp.gmail.com"
    SMTP_PORT = 0

    # 3. Construct the Message
    msg = EmailMessage()
    msg['Subject'] = "Activity Ratio Alert"
    msg['From'] = SENDER_EMAIL
    msg['To'] = ", ".join(RECIPIENT_EMAILS)

    # HTML Body
    msg.set_content("Please enable HTML to view this report.") # Plain text fallback
    msg.add_alternative(f"""
    <html>
        <body>
            <p>Hello,<br><br>
            
            Below is the latest summary regarding voided bookings and their activity ratios per locality:</p>
            {dynamic_html_table}
            <p>Regards,<br>Automated Reporting Service</p>
        </body>
    </html>
    """, subtype='html')

    # 4. Connect and Send
    context = ssl.create_default_context()

    try:
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, context=context) as server:
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)
        print("Email sent successfully!")
    except Exception as e:
        print(f"Error: {e}")