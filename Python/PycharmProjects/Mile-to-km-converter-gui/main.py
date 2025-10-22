from tkinter import *

def button_calculate():
    mile_value = int(textbox.get())
    km_value = mile_value * 1.6
    label_km_int.config(text=km_value)

window = Tk()
window.title("Mile to Km Converter")
window.minsize(200, 200)
window.config(padx=20, pady=20)

textbox = Entry(width=20)
textbox.grid(column=1, row=0)

label_miles = Label(text="Miles")
label_miles.grid(column=2, row=0)

label_equal = Label(text="is equal to")
label_equal.grid(column=0, row=1)

label_km_int = Label(text="0")
label_km_int.grid(column=1, row=1)

label_km = Label(text="Km")
label_km.grid(column=2, row=1)

button_calc = Button(text="Calculate", command=button_calculate)
button_calc.grid(column=1, row=2)

window.mainloop()