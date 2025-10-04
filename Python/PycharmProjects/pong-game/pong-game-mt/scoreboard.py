from turtle import Turtle

class Scoreboard(Turtle):
    def __init__(self):
        super().__init__()
        self.color("white")
        self.penup()
        self.hideturtle()
        self.goto(0, 350)
        self.score_left = 0
        self.score_right = 0


    def update_score(self):
        self.clear()
        self.write(f"{self.score_left}        {self.score_right}", align="center", font=("Courier", 36, "normal"))


    def left_point(self):
        self.score_left += 1
        self.update_score()


    def right_point(self):
        self.score_right += 1
        self.update_score()