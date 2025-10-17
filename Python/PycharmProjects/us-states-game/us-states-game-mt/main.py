import turtle
from turtle import Turtle

import pandas

screen = turtle.Screen()
screen.title("U.S States Game")
image = "blank_states_img.gif"

screen.addshape(image)                          # addshape accepts images

turtle.shape(image)                             # a turtle can be an image
score = 0

#--------------------------------------------------
# this is only executed once to get all the coordinates of the states by clicking on them on the map and taking the coordinates of the clicked area

# def get_mouse_click_coor(x, y):
#         print(x, y)
#
# turtle.onscreenclick(get_mouse_click_coor)          # onscreenclick is an event listener, it takes a function with coordinates, this will return the coordinates we clicked on the map and prints them
# turtle.mainloop()                                   # this stops the screen from closing, without clicking
#--------------------------------------------------

data = pandas.read_csv("50_states.csv")
all_states = data["state"].tolist()
correct_guesses = []


while len(correct_guesses) < 50:
    answer_state = screen.textinput(title=f"{score}/50 States Correct", prompt="What's another state's name?")


    if answer_state is None:                            # Comparison with None performed with equality operators using: is
        break
    else:
        answer_state = answer_state.title()

    if answer_state in all_states:
        state_series = data[data["state"] == answer_state]
        state_name = state_series["state"].item()
        state_x = state_series["x"].item()                           #to get the raw value from the series
        state_y = state_series["y"].item()


        state_finder = Turtle()
        state_finder.penup()
        state_finder.hideturtle()
        state_finder.goto(state_x, state_y)
        state_finder.write(state_name)
        score += 1
        correct_guesses.append(state_name)
        print(correct_guesses)

missing_states = []
for state in all_states:
    if state not in correct_guesses:
        missing_states.append(state)
print(missing_states)

new_data = pandas.DataFrame(missing_states)
new_data.to_csv("missing_states.csv")
turtle.mainloop()