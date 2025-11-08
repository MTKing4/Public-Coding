import random
from tkinter import *
import pandas

BACKGROUND_COLOR = "#B1DDC6"

try:
    pd = pandas.read_csv("data/to_learn_words.csv")
except FileNotFoundError:
    pd = pandas.read_csv("data/french_words.csv")
pd_records = pd.to_dict(orient="records")                            # this will turn the dataframe to a list of dictionaries, each item in the list is a row, contained with it the headers from each column and the corresponding item for each column as the value for that key, in our example it looks like so: [{Column1: row1, column2: row1}, {Column1: row2, column2: row2}, etc
chosen_word = {}

def next_card():
    global chosen_word, flip_timer
    window.after_cancel(flip_timer)                     # cancel the previous timer when card is flipped
    chosen_word = random.choice(pd_records)
    french_word = chosen_word["French"]
    canvas.itemconfig(word, text=french_word, fill="black")
    canvas.itemconfig(title, text="French", fill="black")
    canvas.itemconfig(card_image, image=card_front_img)
    flip_timer = window.after(3000, func=flip_card)

def flip_card():
    canvas.itemconfig(card_image, image=card_back_img)
    english_word = chosen_word["English"]
    canvas.itemconfig(word, text=english_word, fill="white")
    canvas.itemconfig(title, text="English", fill="white")

def guessed_correct():
    pd_records.remove(chosen_word)
    print(len(pd_records))
    to_learn_words = pandas.DataFrame(pd_records)
    to_learn_words.to_csv("data/to_learn_words.csv", index= False)                  # index = False means don't add the index to the file, without this it will keep adding indexes as new columns causing issues
    next_card()

window = Tk()
window.title("Flashy")
window.config(padx=50, pady=50, bg=BACKGROUND_COLOR)

flip_timer = window.after(3000, func=flip_card)                      # after certain time execute this function


canvas = Canvas(width=800, height=526, bg=BACKGROUND_COLOR, highlightthickness=0)
card_front_img = PhotoImage(file="images/card_front.png")
card_back_img = PhotoImage(file="images/card_back.png")
right_img = PhotoImage(file="images/right.png")
wrong_img = PhotoImage(file="images/wrong.png")

card_image = canvas.create_image(410, 263, image=card_front_img)
title = canvas.create_text(400, 150,text="French", font=("Arial", 40, "italic"))
word = canvas.create_text(400, 263,text="word", font=("Arial", 60, "bold"))
canvas.grid(column=0, row=0, columnspan=2)


wrong_btn = Button(image=wrong_img, highlightthickness=0, command=next_card)
wrong_btn.grid(column=0, row=1)


right_btn = Button(image=right_img, highlightthickness=0, command=guessed_correct)
right_btn.grid(column=1, row=1)

next_card()

window.mainloop()