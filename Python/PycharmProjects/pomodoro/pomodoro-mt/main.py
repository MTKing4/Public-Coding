from tkinter import *

# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 30
reps = 0
check = ""
start_button_timer = None                       # we added this so that we can access it from count_down() function and use it in reset_timer() function, we assigned it to None for now

# ---------------------------- TIMER RESET ------------------------------- #

def reset_timer():
    global start_button_timer, reps
    window.after_cancel(start_button_timer)             # widget.after_cancel() is used to stop widget.after() function in tkinter
    canvas.itemconfig(timer_text, text="00:00")            # to change canvas item you assign the item to a variable then say canvas_name.itemconfig(item_variable, *args)
    label_timer.config(text="Timer")
    label_check.config(text="")
    reps = 0

# ---------------------------- TIMER MECHANISM ------------------------------- #

def start_timer():
    global reps
    work_sec = WORK_MIN * 60
    short_break_sec = SHORT_BREAK_MIN * 60
    long_break_sec = LONG_BREAK_MIN * 60

    if reps in (0, 2, 4, 6):
        label_timer.config(text="Work", fg=GREEN)
        count_down(work_sec)
        reps += 1
    elif reps in (1, 3, 5):
        label_timer.config(text="Break", fg=PINK)
        count_down(short_break_sec)
        reps += 1
    elif reps == 7:
        label_timer.config(text="Break", fg=RED)
        count_down(long_break_sec)
        reps = 0


# ---------------------------- COUNTDOWN MECHANISM ------------------------------- #

def count_down(count_):                                                 # doing a loop with a recursive function to not overwrite the tkinter mainloop
    global check, start_button_timer
    count_min = count_ // 60                                            # retarded teacher used math.floor(), Booooo
    count_sec = count_ % 60
    if count_sec < 10:
        count_sec = f"0{count_sec}"
    if count_min < 10:
        count_min = f"0{count_min}"

    canvas.itemconfig(timer_text, text=f"{count_min}:{count_sec}")            # to change canvas item you assign the item to a variable then say canvas_name.itemconfig(item_variable, *args)
    if count_ >= 0:
        start_button_timer = window.after(1, count_down, count_ - 1)                  # counting down after each 1000 ms (1 second), widget.after() is a method that executes a command (function) after a time delay
    else:
        start_timer()                                           # go to the next time period after time runs out
        if reps % 2 == 0:
            check += "✓"
            label_check.config(text=check)

# ---------------------------- UI SETUP ------------------------------- #

window = Tk()
window.title("Pomodoro")
window.config(padx=100, pady=50, bg=YELLOW)        # bg= is background color
window.minsize(410, 334)
canvas = Canvas(width=200, height=224, bg=YELLOW, highlightthickness=0)                 # Canvas is used to add images and other graphics to the window, highlightthickness is for the stroke/border of the canvas
image = PhotoImage(file="tomato.png")                                                   # PhotoImage is how you access image files with tkinter
canvas.create_image(100, 112, image=image)                                        # create_image to add the image, takes x and y coordinates and the image file (takes a variable)
timer_text = canvas.create_text(100, 130, text="00:00", fill="white", font=(FONT_NAME, 35, "bold"))      # creating text in canvas
canvas.grid(column=1, row= 1)
label_timer = Label(text="Timer", font=(FONT_NAME, 35, "bold"), fg=GREEN, bg=YELLOW)
label_timer.grid(column=1, row=0)

button_start = Button(text="Start", command=start_timer)
button_start.grid(column=0, row=2)

button_Reset = Button(text="Reset", command=reset_timer)
button_Reset.grid(column=2, row=2)


label_check = Label(font=(FONT_NAME, 12, "bold"), fg=GREEN, bg=YELLOW)
label_check.grid(column=1, row=3)

window.mainloop()