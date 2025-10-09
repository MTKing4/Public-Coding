from turtle import Turtle

LEVEL = 1
FONT = ("Courier", 24, "normal")

screen_text = Turtle()
screen_text.penup()
screen_text.hideturtle()
screen_text.goto(-290, 260)

class Scoreboard:
    def __init__(self):
        self.level = LEVEL

    def game_over(self):
        screen_text.goto(-50,0)
        screen_text.write("Game Over", font=FONT)

    def update_score(self):
        self.level += 1

    def print_score(self):
        screen_text.clear()
        screen_text.write(f"Level {self.level}",font=FONT)

