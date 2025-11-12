import requests
from datetime import datetime
import smtplib

MY_LAT = 00.0
MY_LONG = 0.0

response = requests.get(url="http://api.open-notify.org/iss-now.json")
response.raise_for_status()
data = response.json()

iss_latitude = float(data["iss_position"]["latitude"])
iss_longitude = float(data["iss_position"]["longitude"])

if -5 <= abs(MY_LAT) - abs(iss_latitude) <= 5:
    if -5 <= abs(MY_LONG) - abs(iss_longitude) <= 5:


        parameters = {
            "lat": MY_LAT,
            "lng": MY_LONG,
            "formatted": 0,
        }

        response = requests.get("https://api.sunrise-sunset.org/json", params=parameters)
        response.raise_for_status()
        data = response.json()
        print(data)
        sunrise = int(data["results"]["sunrise"].split("T")[1].split(":")[0]) + 3
        sunset = int(data["results"]["sunset"].split("T")[1].split(":")[0]) + 3

        time_now = datetime.now()
        time_hour = time_now.hour + 3
        print(f"{sunset}\n{sunrise}\n{time_hour}\n")


        if time_hour >= sunset or time_hour < sunrise:

            my_email = "placeholder"
            password = "placeholder"
            my_email_2 = "placeholder"

            connection = smtplib.SMTP("smtp.gmail.com")
            connection.starttls()
            connection.login(user=my_email, password=password)
            connection.sendmail(from_addr=my_email,
                                to_addrs=my_email_2,
                                msg="Subject:Look UP!\n\nthe ISS is HERE!")
            connection.close()

else:
    print("ISS is not close to your current position")






