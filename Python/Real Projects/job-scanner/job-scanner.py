from telethon import TelegramClient
from telethon.errors import SessionPasswordNeededError
from datetime import datetime, timezone, timedelta
import os
import requests
import time



BOT_TOKEN = os.environ.get("BOT_TOKEN")
CHAT_IDs = os.environ["CHAT_IDs"].split(',')

JOB_NUM = 0

api_id = os.environ.get("api_id")
api_hash = os.environ.get("api_hash")
job_alert_bot = os.environ.get("job_alert_bot")

# === CHANNELS ===
channels = [
    "https://t.me/oil_jobs_kurdistan_Iraq",
    "https://t.me/allkurdistanjobs",
    "https://t.me/fjkurdistan10",
    "https://t.me/IJobsIQ",
    "https://t.me/iqjscout",
    "https://t.me/iraqi_HR",
    "https://t.me/IQ_JOBS",
    "https://t.me/thekhana",
    "https://t.me/truescho",
    "https://t.me/VIP_jobs",
    "https://t.me/iraqtendaersjobs",
    "https://t.me/iraq_kurdistan2024",
    "https://t.me/jobskrd2024",
    "https://t.me/iraqftth",
    "https://t.me/ELCareers"
]


# === JOB KEYWORDS ===
job_titles = [
    "network engineer",
    "ccna",
    "it support",
    "system admin",
    "help desk",
    "network engineer ",
    "ccna",
    "it support ",
    "system admin ",
    "help desk",
    "Infrastructure engineer",
    "it specialist",
    "ip engineer",
    "it manager",
    "it administrator",
    "it employee",
    "software developer",
    "software engineer",
    "programmer",
    "web developer",
    "front end developer",
    "frontend developer",
    "front-end developer",
    "developer",
    "backend developer",
    "back end developer",
    "back-end developer",
    "javascript",
    "python",
    "react",
    "vue js",
    "vue.js",
    "C#",
    ".net",
    "erp administrator",
    "SAP Specialist",
    "erp system administrator",
    "full stack developer",
    "full-stack developer",
    "full-stack engineer",
    "full-stack",
    "full-stack programmer",
    "application programmer",
    "qa tester",
    "qa engineer",
    "qa/qc engineer",

# Networking / Infrastructure
    "network engineer",
    "network specialist",
    "network administrator",
    "network support",
    "network technician",
    "network operations",
    "noc engineer",
    "noc technician",
    "ccna",
    "ccnp",
    "infrastructure engineer",
    "infrastructure specialist",
    "infrastructure support",
    "ip engineer",
    "telecom engineer",

    # IT Support / Admin
    "it support",
    "it support engineer",
    "technical support",
    "desktop support",
    "it help desk",
    "help desk",
    "service desk",
    "it technician",
    "it specialist",
    "it administrator",
    "system administrator",
    "system admin",
    "sysadmin",
    "it officer",
    "it assistant",
    "it staff",

    # Management
    "it manager",
    "it supervisor",
    "it lead",

    # Software / Development (General)
    "software engineer",
    "software developer",
    "application developer",
    "application programmer",
    "programmer",
    "developer",

    # Web Development
    "web developer",
    "frontend developer",
    "front end developer",
    "front-end developer",
    "backend developer",
    "back end developer",
    "back-end developer",
    "full stack developer",
    "full-stack developer",
    "full stack engineer",
    "full-stack engineer",

    # Technologies (be careful: these are broad)
    "javascript",
    "js developer",
    "python developer",
    "react developer",
    "react js",
    "vue developer",
    "vue js",
    "vue.js",
    "c# developer",
    ".net developer",
    "dotnet developer",

    # ERP / Enterprise
    "erp administrator",
    "erp specialist",
    "erp system administrator",
    "sap specialist",
    "sap consultant",

    # QA / Testing
    "qa tester",
    "qa engineer",
    "software tester",
    "test engineer",
    "qa qc engineer",
    "quality assurance engineer"
]

client = TelegramClient("job_session", api_id, api_hash)


def send_message(text, chat_id):
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    data = {
        "chat_id": chat_id,
        "text": text
    }
    requests.post(url, data=data)

async def login():
    await client.connect()

    if not await client.is_user_authorized():
        phone = input("Enter your phone number: ")
        await client.send_code_request(phone)

        code = input("Enter the code you received: ")

        try:
            await client.sign_in(phone=phone, code=code)
        except SessionPasswordNeededError:
            password = input("Enter your 2FA password: ")
            await client.sign_in(password=password)

    print("✅ Logged in successfully!")

async def main():
    await login()

    # get for specific amount of past days
    # day = datetime(year=2026, month=4, day=15)

    today = datetime.now(timezone.utc).date()

    for channel in channels:
        print(f"\nScanning: {channel}")

        async for message in client.iter_messages(channel, limit=200):
            if not message.text:
                continue

            # if older than the set days above don't fetch it
            # if str(message.date.date()) < str(day.date()):
            #     break

            msg_date = message.date.date()
            if msg_date < today - timedelta(days=1):
                break

            text_lower = message.text.lower()

            if any(job in text_lower for job in job_titles):

                if message.chat.username:
                    link = f"https://t.me/{message.chat.username}/{message.id}"
                else:
                    link = "Private channel"

                global JOB_NUM
                JOB_NUM += 1
                with open(f"Jobs/Job {JOB_NUM}.txt", mode="w", encoding="utf-8") as file:
                    msg = f"""\n=== JOB {JOB_NUM} ===
Date: {message.date}
channel: {message.chat.title}
Link: {link}


Message:

{message.text}

"""
                    file.write(msg)
                    send_message(msg, CHAT_IDs[0])
                    send_message(msg, CHAT_IDs[1])
                    time.sleep(3)
                    print(msg)


# 🔥 IMPORTANT: do NOT use "with client:"
client.loop.run_until_complete(main())





