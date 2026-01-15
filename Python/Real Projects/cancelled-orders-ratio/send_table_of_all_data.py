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

#------------------------------------Organizing the dataframe into dictionaries-----------------------------------

# Using generic zone identifiers for the public repo
zone_keys = ['zone_a', 'zone_b', 'zone_c', 'zone_d', 'zone_e', 'zone_f', 'zone_g']
zone_labels = ['Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E', 'Zone F', 'Zone G']

locality_dict = {}
bookings_dict = {}
voided_bookings_dict = {}
ratio_dict = {}
last_update_dict = {}

# Locality
for z_key, z_label in zip(zone_keys, zone_labels):
    try:
        locality_dict[z_key] = df['Locality'][df['Locality'] == z_label].item()
    except (ValueError, KeyError):
        print(f"{z_label} does not have records, skipping.")
        continue

# Bookings
for z_key, z_label in zip(zone_keys, zone_labels):
    try:
        bookings_dict[z_key] = df['Bookings'][df['Locality'] == z_label].item()
    except (ValueError, KeyError):
        continue

# Voided Bookings
for z_key, z_label in zip(zone_keys, zone_labels):
    try:
        voided_bookings_dict[z_key] = df['Voided Bookings'][df['Locality'] == z_label].item()
    except (ValueError, KeyError):
        continue

# Ratio
for z_key, z_label in zip(zone_keys, zone_labels):
    try:
        ratio_dict[z_key] = round(df['Ratio'][df['Locality'] == z_label].item(), 2)
    except (ValueError, KeyError):
        continue

# Last Update
for z_key, z_label in zip(zone_keys, zone_labels):
    try:
        last_update_dict[z_key] = str(df['Last Update'][df['Locality'] == z_label].item())
    except (ValueError, KeyError):
        continue


#---------------------------------------styling an html to send as email with DF values----------------------------------

html_table = f"""<table style="border-collapse: collapse; width: 100%; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 14px; border: 1px solid #ddd;">
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
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">0</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{locality_dict.get('zone_a', 'N/A')}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{bookings_dict.get('zone_a', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{voided_bookings_dict.get('zone_a', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{ratio_dict.get('zone_a', 0)}%</td>
       <td style="padding: 10px; border-bottom: 1px solid #eee;">{last_update_dict.get('zone_a', 'N/A')}</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">1</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{locality_dict.get('zone_b', 'N/A')}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{bookings_dict.get('zone_b', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{voided_bookings_dict.get('zone_b', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{ratio_dict.get('zone_b', 0)}%</td>
     <td style="padding: 10px; border-bottom: 1px solid #eee;">{last_update_dict.get('zone_b', 'N/A')}</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">2</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{locality_dict.get('zone_c', 'N/A')}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{bookings_dict.get('zone_c', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{voided_bookings_dict.get('zone_c', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{ratio_dict.get('zone_c', 0)}%</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{last_update_dict.get('zone_c', 'N/A')}</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">3</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{locality_dict.get('zone_d', 'N/A')}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{bookings_dict.get('zone_d', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{voided_bookings_dict.get('zone_d', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{ratio_dict.get('zone_d', 0)}%</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{last_update_dict.get('zone_d', 'N/A')}</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">4</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{locality_dict.get('zone_e', 'N/A')}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{bookings_dict.get('zone_e', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{voided_bookings_dict.get('zone_e', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{ratio_dict.get('zone_e', 0)}%</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{last_update_dict.get('zone_e', 'N/A')}</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">5</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{locality_dict.get('zone_f', 'N/A')}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{bookings_dict.get('zone_f', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{voided_bookings_dict.get('zone_f', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{ratio_dict.get('zone_f', 0)}%</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{last_update_dict.get('zone_f', 'N/A')}</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">6</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{locality_dict.get('zone_g', 'N/A')}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{bookings_dict.get('zone_g', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{voided_bookings_dict.get('zone_g', 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{ratio_dict.get('zone_g', 0)}%</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">{last_update_dict.get('zone_g', 'N/A')}</td>
    </tr>
  </tbody>
</table>"""

#---------------------------------------------Sending the Email----------------------------------------------------

SENDER_EMAIL = "placeholder"
SENDER_PASSWORD = "placeholder"
RECIPIENT_EMAIL = "placeholder"
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 0 

msg = EmailMessage()
msg['Subject'] = "Daily Activity Ratio Summary"
msg['From'] = SENDER_EMAIL
msg['To'] = RECIPIENT_EMAIL

msg.set_content("Please enable HTML to view this report.")
msg.add_alternative(f"""
<html>
    <body>
        <p>Hello, please find the summary of voided bookings for the current period below:</p>
        {html_table}
        <p>Regards,<br>Automated Ops System</p>
    </body>
</html>
""", subtype='html')

context = ssl.create_default_context()

try:
    with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, context=context) as server:
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.send_message(msg)
    print("Email sent successfully!")
except Exception as e:
    print(f"Error: {e}")