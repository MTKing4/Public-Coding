import urllib.parse
from sqlalchemy import create_engine
import pandas as pd
import streamlit as st
import plotly.express as px
from datetime import datetime

# =========================
# 🔌 DB CONNECTION
# =========================
SERVER = r"localhost"
DATABASE = "MiRA_2_00"

connection_string = (
    "DRIVER={ODBC Driver 18 for SQL Server};"
    f"SERVER={SERVER};"
    f"DATABASE={DATABASE};"
    "Trusted_Connection=yes;"
    "TrustServerCertificate=yes;"
)

params = urllib.parse.quote_plus(connection_string)
engine = create_engine(f"mssql+pyodbc:///?odbc_connect={params}")

# =========================
# ⚙️ PAGE CONFIG
# =========================
st.set_page_config(layout="wide")
st.title("📊 Sales & Distribution Dashboard")

# =========================
# 🎛 FILTERS
# =========================
st.sidebar.header("Filters")

today = datetime.now().date()

# start of today
start_of_day = datetime.combine(today, datetime.min.time())  # 00:00:00

# end of today
end_of_day = datetime.combine(today, datetime.max.time())    # 23:59:59.999999

date_from = st.sidebar.date_input("From", start_of_day)
date_to = st.sidebar.date_input("To", end_of_day)

date_from_str = date_from.strftime("%Y-%m-%d %H:%M")
date_to_str = date_to.strftime("%Y-%m-%d %H:%M")

# =========================
# 📥 LOAD FILTER DATA (Obfuscated)
# =========================
df_customers = pd.read_sql("SELECT DISTINCT cust_id, cust_lbl FROM v_sls_ord_sts order by cust_id", engine)
df_status = pd.read_sql("SELECT DISTINCT ord_sts_id, sts_lbl FROM v_sls_ord_sts order by ord_sts_id", engine)
df_class = pd.read_sql("SELECT DISTINCT cat_id, cat_lbl FROM v_sls_ord_sts order by cat_id", engine)
df_owner = pd.read_sql("SELECT DISTINCT ownr_id, ownr_lbl FROM t_sys_owner order by ownr_id", engine)

df_branch = pd.read_sql("""
SELECT DISTINCT o.brnch_id, b.brnch_lbl 
FROM v_sls_ord_sts o
JOIN t_sys_branch b ON o.brnch_id = b.brnch_id
order by brnch_id
""", engine)

df_store = pd.read_sql("""
SELECT DISTINCT o.whse_id, s.whse_lbl 
FROM v_sls_ord_sts o
JOIN t_inv_whse s ON o.whse_id = s.whse_id
order by whse_id
""", engine)

# =========================
# 🎛 DROPDOWNS
# =========================
def make_filter(df, id_col, name_col, label):
    df["label"] = df[id_col].astype(str) + " | " + df[name_col]

    selected = st.sidebar.multiselect(
        label,
        options=df["label"].tolist()
    )

    if not selected:
        return None

    # Extracted values cleanly map to strings/ints without breaking mixed keys
    selected_ids = [x.split(" | ")[0] for x in selected]
    try:
        return [int(x) for x in selected_ids]
    except ValueError:
        return selected_ids

branch_id = make_filter(df_branch, "brnch_id", "brnch_lbl", "Branch")
owner_id = make_filter(df_owner, "ownr_id", "ownr_lbl", "Salesmen")
customer_id = make_filter(df_customers, "cust_id", "cust_lbl", "Customer")
class_id = make_filter(df_class, "cat_id", "cat_lbl", "Class")
store_id = make_filter(df_store, "whse_id", "whse_lbl", "Store")
status_id = make_filter(df_status, "ord_sts_id", "sts_lbl", "Order Status")

# =========================
# 🧱 WHERE CLAUSE (Obfuscated)
# =========================

def add_condition(column, value):
    if value is None:
        return None

    # list → IN (...)
    if isinstance(value, list):
        if len(value) == 0:
            return None
        formatted_items = [f"'{x}'" if isinstance(x, str) else str(x) for x in value]
        return f"{column} IN ({','.join(formatted_items)})"

    # single value → =
    if isinstance(value, str):
        return f"{column} = '{value}'"

    return f"{column} = {value}"


conditions = [
    f"dlvry_dt >= '{date_from_str}' AND dlvry_dt < '{date_to_str}'"
]

cond = add_condition("cust_id", customer_id)
if cond:
    conditions.append(cond)

cond = add_condition("ord_sts_id", status_id)
if cond:
    conditions.append(cond)

cond = add_condition("cat_id", class_id)
if cond:
    conditions.append(cond)

cond = add_condition("brnch_id", branch_id)
if cond:
    conditions.append(cond)

cond = add_condition("whse_id", store_id)
if cond:
    conditions.append(cond)

cond = add_condition("ownr_id", owner_id)
if cond:
    conditions.append(cond)

where_clause = " AND ".join(conditions)

# =========================
# 📊 QUERIES (Filtered & Obfuscated)
# =========================

# Conversion
df_conv = pd.read_sql(f"""
SELECT
    COUNT(DISTINCT ord_id) AS total_orders,
    COUNT(DISTINCT CASE WHEN ord_sts_id = 'v' THEN ord_id END) AS invoiced_orders,
    (COUNT(DISTINCT CASE WHEN ord_sts_id = 'v' THEN ord_id END) * 1.0 
     / NULLIF(COUNT(DISTINCT ord_id), 0)) * 100 AS conversion_rate
FROM v_sls_ord_sts
WHERE {where_clause}
""", engine)

# Sales Trend
df_sales = pd.read_sql(f"""
SELECT
    CAST(dlvry_dt AS DATE) AS day,
    SUM(ord_tot_val) AS total_sales
FROM v_sls_ord_sts
WHERE {where_clause} AND ord_sts_id = 'v'
GROUP BY CAST(dlvry_dt AS DATE)
ORDER BY day
""", engine)

# Salesman
df_salesman = pd.read_sql(f"""
SELECT
    ownr_lbl AS Salesman,
    SUM(CASE WHEN ord_sts_id = 'v' THEN ord_tot_val END) AS total_sales,
    COUNT(CASE WHEN ord_sts_id = 'v' THEN ord_id END) AS invoice_count,
    CAST(dlvry_dt AS DATE) as Date
FROM v_sls_ord_sts
WHERE {where_clause}
GROUP BY ownr_lbl, CAST(dlvry_dt AS DATE)
""", engine)

# Orders
df_orders = pd.read_sql(f"""
SELECT COUNT(*) AS total_orders
FROM v_sls_ord_sts
WHERE {where_clause}
""", engine)

# Delivered
df_delivered = pd.read_sql(f"""
SELECT COUNT(*) AS delivered_orders
FROM v_sls_ord_sts
WHERE {where_clause} AND ord_sts_id = 'v'
""", engine)

# =========================
# 📊 KPI CARDS
# =========================
col1, col2, col3, col4 = st.columns(4)

col1.metric("Total Orders", int(df_conv["total_orders"][0]))
col2.metric("Invoiced Orders", int(df_conv["invoiced_orders"][0]))

value = df_conv["conversion_rate"][0]

if value is None or pd.isna(value):
    value = 0

col3.metric("Conversion %", round(value, 2))

col5, col6 = st.columns(2)

delivered = int(df_delivered["delivered_orders"][0])
total = int(df_orders["total_orders"][0])

delivery_rate = (delivered / total * 100) if total > 0 else 0

# =========================
# 📈 SALES TREND
# =========================
st.subheader("📈 Sales Trend")

fig_sales = px.line(df_sales, x="day", y="total_sales", markers=True)
st.plotly_chart(fig_sales, use_container_width=True)

# =========================
# 📊 SALES BY SALESMAN
# =========================
st.subheader("👨‍💼 Top 10 Sales by Salesman")

try:
    df_grouped = df_salesman.groupby("Salesman").sum(numeric_only=True).reset_index()
    df_top = df_grouped.sort_values("total_sales", ascending=False).head(10)
except KeyError:
    empty_data = {
        "Salesman": [0],
        "total_sales": [0],
        "invoice_count": [0],
    }
    df_top = pd.DataFrame(empty_data)

view_option = st.selectbox("View Type", ["Bar", "Pie"])

if view_option == "Pie":
    fig = px.pie(df_top, names="Salesman", values="total_sales")
else:
    fig = px.bar(df_top, x="total_sales", y="Salesman", orientation="h")

st.plotly_chart(fig, use_container_width=True)

# =========================
# 📋 RAW DATA
# =========================

st.subheader("👥 All Salesman")

try:
    st.dataframe(df_grouped.sort_values(by="total_sales", ascending=False))
except KeyError:
    empty_data = {
        "Salesman": [0],
        "total_sales": [0],
        "invoice_count": [0],
    }
    df_top = pd.DataFrame(empty_data)

# =========================
# 🥧 DELIVERY PIE
# =========================
st.subheader("📦 Delivery Distribution")

not_delivered = max(0, total - delivered)

pie_df = pd.DataFrame({
    "Status": ["Delivered", "Not Delivered"],
    "Count": [delivered, not_delivered]
})

fig_pie = px.pie(pie_df, names="Status", values="Count")
st.plotly_chart(fig_pie, use_container_width=True)

# =========================
# 📅 CLEAN TIMELINE
# =========================
st.subheader("📅 Sales Timeline")

df_daily = df_salesman.groupby("Date")["total_sales"].sum().reset_index()

fig_timeline = px.line(df_daily, x="Date", y="total_sales", markers=True)
st.plotly_chart(fig_timeline, use_container_width=True)