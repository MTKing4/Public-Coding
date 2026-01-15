import pandas

sheet2 = pandas.read_excel("contacts.xlsx", sheet_name="Sheet2")
sheet1 = pandas.read_excel("contacts.xlsx", sheet_name="Sheet1")
contacts = pandas.read_excel("contacts.xlsx", sheet_name="contacts")

odd_numbers = sheet2["Contact"].tolist()

print(odd_numbers)

new_sheet1 = sheet1[~sheet1["Contact"].isin(odd_numbers)]

new_sheet1.to_excel("Removed Odd Numbers.xlsx", index=False)
print(new_sheet1)