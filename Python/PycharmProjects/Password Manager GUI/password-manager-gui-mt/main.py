from tkinter import messagebox
import pyperclip
import json

# ---------------------------- PASSWORD GENERATOR ------------------------------- #

import random

letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
            'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q,' 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

numbers = ['0','1','2','3','4','5','6','7','8','9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

def generate_pass():
    password = ""
    for letter in range(4):
        letter = random.choice(letters)
        password += letter

    for symbol in range(4):
        symbol = random.choice(symbols)
        password += symbol

    for number in range(4):
        number = random.choice(numbers)
        password += number

    password = ''.join(random.sample(password, len(password)))
    pyperclip.copy(password)                                            # this will copy password to clipboard, NEAT!
    password_field.delete(0, END)
    password_field.insert(0, password)

# ---------------------------- SAVE PASSWORD ------------------------------- #

def save():
    website_field_text = website_field.get()
    user_name_field_text = user_name_field.get()
    password_field_text = password_field.get()
    new_data = \
        {
            website_field_text:
                {
                    "email": user_name_field_text,
                    "password": password_field_text
                }
        }


    if website_field_text == "" or user_name_field_text == "" or password_field_text == "":
        messagebox.showinfo(title="Empty Fields", message="Please fill out all the fields!")                        # create popups with messagebox

    else:
        is_ok = messagebox.askokcancel(title=website_field_text, message=f" These are the details entered \n"
                                                                 f"Email {user_name_field_text}\n"
                                                                 f"Password: {password_field_text}\n"
                                                                 f"Is it ok to save?")

        if is_ok:
            try:
                with open("data.json", mode= "r") as file_1:
                    data = json.load(file_1)                                  # reading old data - reading json files (it converts it to a python dictionary)
                    data.update(new_data)                                     # updating old data - this is how to update json files, new_data is a dictionary, it will append to the old data, not replace them
            except FileNotFoundError:
                messagebox.showinfo(title="File not found", message="File not found, creating one now.")
                with open("data.json", mode="w") as file_1:
                    json.dump(new_data, file_1, indent=4)                     # Creating the file the first time and fill it with data
            else:
                with open("data.json", mode="w") as file_1:
                    json.dump(data, file_1, indent=4)                         # saving the updated data - json.dump writes to the json file, indent beautifies the code
            finally:
                website_field.delete(0, END)
                password_field.delete(0, END)


# ---------------------------- SEARCH WEBSITE ------------------------------ #

def find_password():
    website_field_text = website_field.get()
    try:
        with open("data.json", mode="r") as file_1:
            data = json.load(file_1)
            messagebox.showinfo(title=f"{website_field_text} Credentials", message=f"Email: {data[website_field_text]["email"]}\nPassword: {data[website_field_text]["password"]}")
    except KeyError:
        messagebox.showerror(title="Entry not found.", message="Entry not found.")
    except FileNotFoundError:
        messagebox.showerror(title="File not found.", message="File not found, please enter data first.")

# ---------------------------- UI SETUP ------------------------------- #

from tkinter import *                   # imports all Classes and Constants but not modules

window = Tk()
window.title("Password Manager")
window.config(padx=50, pady=50)

canvas = Canvas(width=200, height=200)
image = PhotoImage(file="logo.png")
canvas.create_image(100, 100, image=image)
canvas.grid(column=1, row=0)

website = Label(text="website: ")
website.grid(column=0, row=1)

user_name = Label(text="Email/Username: ")
user_name.grid(column=0, row=2)

password = Label(text="Password: ")
password.grid(column=0, row=3)

website_field = Entry(width=27)
website_field.grid(column=1,row= 1)
website_field.focus()                                                       # lets the typing cursor focus this text field on app launch

user_name_field = Entry(width=45)
user_name_field.grid(column=1,row= 2, columnspan=2)
user_name_field.insert(0, "mohammad@gmail.com")                 # inserts text to textfield, syntax: insert(index, string) index can also be END (tkinter constant representing the end of the string)

password_field = Entry(width=27)
password_field.grid(column=1,row= 3, columnspan=1)


generate_password = Button(text="Generate Password", width=14, command=generate_pass)
generate_password.grid(column=2, row=3)

add_pass = Button(text="Add", width=38, command=save)
add_pass.grid(column=1, row=4, columnspan=2)

search_pass = Button(text="Search", width=14, command=find_password)
search_pass.grid(column=2, row=1)

window.mainloop()