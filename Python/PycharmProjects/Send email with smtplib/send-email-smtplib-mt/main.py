# Sending emails

import smtplib

my_email = "placeholder"
password = "placeholder"
my_email_2 = "placeholder"

connection = smtplib.SMTP("smtp.gmail.com")                     # connect to email server
connection.starttls()                                           # TLS: Transport Layer Security, used to secure the connection to the email server
connection.login(user=my_email, password=password)
connection.sendmail(from_addr=my_email,
                    to_addrs=my_email_2,
                    msg="Subject:Hello\n\nThis is the body for the email")
connection.close()                                              # we can also use with open here


#----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# getting the time of today

import datetime as dt

now = dt.datetime.now()                             # prints the current actual time
year = now.year                                     # now.methods will give you all sorts of methods, day, week, month, year, etc
month = now.month
day_of_week = now.weekday()                         # weekday() returns which day of the week it is, starts with Monday as 0 ends with Sunday as 6
print(day_of_week)

date_of_birth = dt.datetime(year=2022, month=2, day=3, hour=4) # to get a specific date, year, month, day are required to execute, the rest are optional

print(date_of_birth)


#----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# if today is tuesday send random motivation email

import smtplib, random, datetime as dt


my_email = "placeholder"
password = "placeholder"
my_email_2 = "placeholder"


with open("quotes.txt") as file:
    motivation_list = file.readlines()

motivation_msg = random.choice(motivation_list)
print(motivation_msg)


now = dt.datetime.now()
if now.weekday() == 1:                          # if today is tuesday
    connect = smtplib.SMTP("smtp.gmail.com")
    connect.starttls()
    connect.login(user=my_email, password=password)
    connect.sendmail(from_addr=my_email, to_addrs=my_email_2, msg=f"Subject:Motivation\n\n{motivation_msg}")

