# Public Coding Portfolio 👨‍💻

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Selenium](https://img.shields.io/badge/-Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)

Welcome to my personal code vault. This repository serves as a central hub for my development journey, ranging from **enterprise-level automation scripts** and **data analysis tools** to **full-stack web applications** and **GUI software**.

It documents my progression through Python, C++, JavaScript, and SQL, demonstrating my ability to solve complex real-world problems.

## 🚀 Key Highlights & "Real World" Projects

This section contains production-ready scripts used for business automation, reporting, and data management. These can be found in the `Python/Real Projects/` directory.

| Project | Description | Tech Stack |
| :--- | :--- | :--- |
| **Hourly Orders Slack Bot** | A robust ETL script that connects to a **PostgreSQL** database, runs complex SQL queries to analyze orders/cancellation data, formats the data using **Pandas** and `tabulate`, and dispatches formatted hourly reports to **Slack Channels** via API. Includes specific logic for Erbil, Kirkuk, and Mosul regions. | `Python`, `PostgreSQL`, `Pandas`, `Slack API` |
| **Hourly Rejected & Cancelled Orders Report** | An advanced reporting bot that calculates Cancellation/rejection percentages and **aaverage delivery times** (in minutes) per city. It utilizes `dataframe_image` to render a styled PNG snapshot of the data table and uploads it directly to Slack using the **Slack SDK**. | `Python`, `PostgreSQL`, `Pandas`, `Slack SDK`, `dataframe_image` |
| **Admin Panel Translation Automator** | Automates the bulk update of application translations on a web admin interface. Reads translation data from an **Excel** file and uses **Selenium** to navigate complex UI elements (accordions), injecting text directly via JavaScript event dispatching (`input`/`change` events) for speed and reliability. | `Python`, `Selenium`, `Pandas`, `JavaScript Injection` |
| **Cancellation Report Query** | Automates the generation of cancelled orders reports. Queries a DB, processes data with Pandas to calculate timestamps and cancellation reasons, cross-references it with a PBX system logs (call center data) to determine the duration the operator took to make the neccesary call, and exports results to Excel. | `SQL`, `Pandas`, `Excel Automation` |
| **Cancelled Orders Ratio** | A monitoring tool that calculates the ratio of cancelled orders per city. If the ratio exceeds a specific threshold (e.g., 5%), it automatically constructs an HTML email report and sends it to the operations team via SMTP. | `Python`, `SMTP (Email)`, `HTML/CSS`, `SQL` |

---

## 🐍 Python Development

My most extensive work is in Python, covering Data Science, Web Scraping, GUI Apps, and Web Development.

### 🌐 Web Development (Django & Flask)
* **PyShop (Django):** A fully functional e-commerce backend structure featuring custom models for `Products` and `Offers`, migrations, and a customized Admin Panel.
* **Storefront:** A comprehensive Django learning project implementing MVT architecture and Debug Toolbar integration.
* **Flask Apps:** Lightweight web applications using Jinja2 templating and routing for dynamic content serving.

### 🤖 Data Science & Machine Learning
* **Music Recommender:** A Machine Learning model using `scikit-learn` (Decision Tree Classifier) to predict music genre preferences based on age and gender. Includes model persistence (`joblib`) and visualization (`graphviz`).
* **Data Analysis:** Extensive use of `Pandas` to analyze CSV data (Weather data, Squirrel Census, US States).
* **NATO Alphabet:** A phonetic alphabet converter using Pandas dataframe iteration and dictionary comprehension.

### 🖥️ GUI Applications (Tkinter)
* **Password Manager:** A secure app to generate and store passwords. Features **JSON** data storage, exception handling, and clipboard integration (`pyperclip`).
* **Pomodoro Timer:** A productivity timer with work/break mechanisms and dynamic UI updates.
* **Flash Card App:** A language learning tool (French/English) that manages CSV data states to track known vs. unknown words.
* **Pong & Snake:** Full recreation of classic arcade games using Object-Oriented Programming (OOP) and the `Turtle` graphics library.

### 🕷️ Web Scraping & Automation
* **Selenium Bots:**
    * **Cookie Clicker Bot:** An automated bot that plays the Cookie Clicker game by analyzing upgrade costs vs. available cookies in real-time.
    * **LinkedIn/Amazon Scrapers:** Scripts to automate login and data extraction.
* **BeautifulSoup:** Scrapers for extracting data from news sites (YCombinator) and parsing HTML structures.

---

## 📂 Other Languages

While Python is my primary focus, I have experience in other technologies:

* **C++:** Fundamental algorithms, memory management, and pointers (`CLionProjects`).
* **JavaScript:** DOM manipulation, Event Listeners, and a functional **Tic-Tac-Toe** game.
* **PHP:** Basic server-side scripting for website headers/footers and database connections.

## 🛠️ Tools & Libraries Used

* **Data:** `Pandas`, `OpenPyXL` (Excel), `CSV`, `dataframe_image`
* **Database:** `PostgreSQL`, `SQLite`
* **Web:** `Django`, `Flask`, `Selenium`, `BeautifulSoup`, `Requests`
* **GUI:** `Tkinter`, `Pygame`, `Turtle`
* **ML:** `Scikit-learn`, `Joblib`
* **APIs:** `Slack SDK`, `SMTP`, `Open Notify (ISS)`

## ⚙️ How to Run

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MTKing4/Public-Coding.git](https://github.com/MTKing4/Public-Coding.git)
    ```
2.  **Navigate to a project (e.g., Password Manager):**
    ```bash
    cd "Python/PycharmProjects/Password Manager GUI/password-manager-gui-ang-improved"
    ```
3.  **Install dependencies (if applicable):**
    ```bash
    pip install pandas selenium django psycopg2-binary slack_sdk dataframe_image
    ```
4.  **Run the script:**
    ```bash
    python main.py
    ```

## 📫 Contact

**MTKing4**
* [GitHub Profile](https://github.com/MTKing4)

---
*This repository is constantly updated as I learn new technologies and build new tools.*
