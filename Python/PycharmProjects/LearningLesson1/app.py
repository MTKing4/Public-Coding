# key events with tkinter

from tkinter import *

def drag_start(event):
    label.start_x = event.x
    label.start_y = event.y

def drag_motion(event):
    new_x = label.winfo_x()
    new_y = label.winfo_y()

window = Tk()

label = Label(window, bg="red",width=10, height=5)
label.place(x=0, y=0)

label.bind("Button-1",drag_start)
label.bind("B1-Motion",drag_motion)

window.mainloop()

