# Mohammad Tareq Portfolio 👨‍💻

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Selenium](https://img.shields.io/badge/-Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)

Welcome to my personal code vault. This repository serves as a central hub for my development journey, ranging from **enterprise-level automation scripts**, **GUI software**, and **data analysis tools** to **full-stack web applications**, **modern frontend frameworks** and **mobile apps**.

It documents my progression through Python, C++, JavaScript, Dart, and SQL, demonstrating my ability to solve complex real-world problems.

## 🚀 Key Highlights & "Real World" Projects

This section contains production-ready scripts used for business automation, reporting, and data management. These can be found in the `Python/Real Projects/` directory.

| Project | Description | Tech Stack |
| :--- | :--- | :--- |
| **Hourly Orders Slack Bot** | A robust ETL script that connects to a **PostgreSQL** database, runs complex SQL queries to analyze orders/cancellation data, formats the data using **Pandas** and `tabulate`, and dispatches formatted hourly reports to **Slack Channels** via API. Includes specific logic for Erbil, Kirkuk, and Mosul regions. | `Python`, `PostgreSQL`, `Pandas`, `Slack API` |
| **Hourly Rejected & Cancelled Orders Report** | An advanced reporting bot that calculates Cancellation/rejection percentages and **average delivery times** (in minutes) per city. It utilizes `dataframe_image` to render a styled PNG snapshot of the data table and uploads it directly to Slack using the **Slack SDK**. | `Python`, `PostgreSQL`, `Pandas`, `Slack SDK`, `dataframe_image` |
| **Admin Panel Translation Automator** | Automates the bulk update of application translations on a web admin interface. Reads translation data from an **Excel** file and uses **Selenium** to navigate complex UI elements (accordions), injecting text directly via JavaScript event dispatching (`input`/`change` events) for speed and reliability. | `Python`, `Selenium`, `Pandas`, `JavaScript Injection` |
| **Cancellation Report Query** | Automates the generation of cancelled orders reports. Queries a DB, processes data with Pandas to calculate timestamps and cancellation reasons, cross-references it with a PBX system logs (call center data) to determine the duration the operator took to make the necessary call, and exports results to Excel. | `SQL`, `Pandas`, `Excel Automation` |
| **Cancelled Orders Ratio Email Alert** | A monitoring tool that calculates the ratio of cancelled orders per city. If the ratio exceeds a specific threshold (e.g., 5%), it automatically constructs an HTML email report and sends it to the operations team via SMTP. | `Python`, `SMTP (Email)`, `HTML/CSS`, `SQL` |
| **MiRA Sales & Distribution Dashboard** | An interactive web application that connects to an SQL Server database to visualize sales and distribution metrics. Features dynamic filtering (by date, customer, status, branch), KPI cards for conversion/delivery rates, and interactive Plotly charts for sales trends and salesman performance. | `Python`, `Streamlit`, `SQLAlchemy`, `Pandas`, `Plotly` |
| **Telegram Job Scanner Bot** | An automated asynchronous script utilizing the Telethon library to monitor multiple Telegram channels for tech and IT job postings. Filters messages based on a comprehensive keyword list, logs the jobs, and instantly forwards relevant opportunities to designated chats via the Telegram Bot API. | `Python`, `Telethon`, `Telegram API`, `AsyncIO` |


## ⚛️ Frontend & Web Development

### 🚀 React & Modern UI
* **React Component Portfolio:** A modern frontend application built with **Vite** and **React**. Features reusable architecture including CSS Modules for styling, dynamic data rendering in cards, and a modular layout system (`Header`, `Footer`, `Card`, `Button`).
* **Bootstrap 5 Showcase:** A fully responsive landing page utilizing Bootstrap's grid system, carousels, and navigation components.

### 🌐 JavaScript Applications
* **Weather App:** A real-time weather dashboard that fetches and displays meteorological data via API integration.
* **Pokémon API Fetcher:** An interactive tool that queries the PokéAPI to dynamically retrieve and display character images and data.
* **Stopwatch & Digital Clock:** Precision time-tracking utilities built with vanilla JavaScript and DOM manipulation.
* **Calculator Program:** A functional web-based calculator with a custom-styled interface.

---

## 🐍 Python Development

My most extensive work is in Python, covering Data Science, Web Scraping, GUI Apps, and Web Development.

### 📊 Data Visualization & Dashboards (Streamlit)
* **Streamlit Web Apps:** Built interactive, data-driven web applications (like the MiRA Dashboard), utilizing Streamlit's rapid UI components alongside `pandas` for data manipulation, `sqlalchemy` for secure database connections, and `plotly` for dynamic, responsive charting.

### 🌐 Web Development (Django & Flask)
* **PyShop (Django):** A fully functional e-commerce backend structure featuring custom models for `Products` and `Offers`, migrations, and a customized Admin Panel.
* **Storefront:** A comprehensive Django learning project implementing MVT architecture and Debug Toolbar integration.
* **Flask Apps:** Lightweight web applications using Jinja2 templating and routing for dynamic content serving.

### 🤖 Data Science & Machine Learning
* **Music Recommender:** A Machine Learning model using `scikit-learn` (Decision Tree Classifier) to predict music genre preferences based on age and gender. Includes model persistence (`joblib`) and visualization (`graphviz`).
* **Data Analysis:** Extensive use of `Pandas` to analyze CSV data (Weather data, Squirrel Census, US States).
* **NATO Alphabet:** A phonetic alphabet converter using Pandas dataframe iteration and dictionary comprehension.
* **Mail Merge Project:** Generates personalized bulk correspondence by merging name lists with text templates.
* **Pandas Pokémon Analysis:** Extensive data cleaning and exploration project using a large Pokémon dataset.
* **Hirst Painting Generator:** Uses the `Turtle` library to create "spot paintings" in the style of Damien Hirst.

### 🖥️ GUI Applications (Tkinter)
* **Password Manager:** A secure app to generate and store passwords. Features **JSON** data storage, exception handling, and clipboard integration (`pyperclip`).
* **Pomodoro Timer:** A productivity timer with work/break mechanisms and dynamic UI updates.
* **Flash Card App:** A language learning tool (French/English) that manages CSV data states to track known vs. unknown words.
* **Pong & Snake:** Full recreation of classic arcade games using Object-Oriented Programming (OOP) and the `Turtle` graphics library.
* **ISS Overhead Notifier:** Uses the "Open Notify" API and `smtplib` to email alerts when the International Space Station is visible above the user's current coordinates.
* **Kanye Quotes GUI:** A Tkinter-based application that fetches and displays random quotes using the Kanye.rest API.
* **Habit Tracker (Pixela):** Automates habit logging by interacting with the Pixela API's graph system.
* **Pomodoro Productivity Timer:** A full-featured work/break timer with a dynamic Tkinter interface.

### 🕷️ Web Scraping & Automation
* **Selenium Bots:**
    * **Cookie Clicker Bot:** An automated bot that plays the Cookie Clicker game by analyzing upgrade costs vs. available cookies in real-time.
    * **LinkedIn/Amazon Scrapers:** Scripts to automate login and data extraction.
* **BeautifulSoup:** Scrapers for extracting data from news sites (YCombinator) and parsing HTML structures.

---

## 📱 Dart & Mobile App Development

Laying the structural and logical groundwork for mobile app development using the Flutter framework by mastering the Dart programming language. 

* **Core Language Mechanics:** Implementation of JIT/AOT compilation concepts, sound null safety, and advanced control flow (including pattern matching and arrow switches).
* **Object-Oriented Architecture:** Deep dive into OOP principles utilizing Classes, named constructors, getters/setters, multilevel inheritance, mixins, and strict class modifiers (`sealed`, `final`, `base`, `interface`).
* **Asynchronous Programming:** Handling delayed operations and APIs using `Future`, `async/await`, and building continuous data pipelines with `Streams` and `StreamControllers`.
* **Data Structures:** Advanced manipulation of Lists, Maps, Records (destructuring and multiple returns), and utilizing Generics for highly reusable, type-safe collections.

---

## 🐘 PHP Development: Server-Side Logic
*Showcasing my experience with web-based back-end architecture.*

- **Logic & Control Flow:** Building modular PHP scripts designed to handle dynamic web content.
- **Form Processing:** Implementing server-side validation and sanitization for user input to ensure security and data integrity.
- **Backend Integration:** Foundational work in managing server-side requests and preparing data for front-end rendering.

---

## 📂 Other Languages

* **C++:** Fundamental algorithms, memory management, and pointers (`CLionProjects`).
* **SQL:** Selections, Joins, Conditions, Cases, Nested Selections, Views, Procedures

## 🛠️ Tech Stack Summary

* **Languages:** `Python`, `JavaScript` (ES6+), `Dart`, `SQL`, `PHP`, `C++`, `HTML5`, `CSS3`
* **Frameworks/Libs:** `React`, `Django`, `Flask`, `Streamlit`, `Bootstrap 5`, `Plotly`, `Telethon`, `Pygame`, `Tkinter`, `OpenPyXL`
* **Data/ML:** `Pandas`, `Scikit-learn`, `NumPy`, `SQLAlchemy`, `Selenium`, `BeautifulSoup`, `Joblib`
* **Infrastructure:** `PostgreSQL`, `SQL Server`, `SQLite`, `SMTP`, `REST APIs` (Slack, Pixela, Telegram, OpenWeather)
* **GUI:** `Tkinter`, `Pygame`, `Turtle`


## 📫 Contact

**Mohammad Tareq** * [GitHub Profile](https://github.com/MTKing4)# 🚀 Public Coding Portfolio: Software Engineering & Data Analytics

---
*This repository is constantly updated as I learn new technologies and build new tools.*
