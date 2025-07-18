from turtle import Turtle
FONT = ("", 13, "")                 #constant, just a variable written in all caps, there are no constants in python :)

class Score(Turtle):
    def __init__(self):
        super().__init__()
        self.hideturtle()
        self.penup()
        self.color("white")
        self.score = 0
        self.goto(-40, 280)
        self.score_update()

    def score_update(self):
        self.write(f"Score: {self.score}", font= FONT)

    def game_over(self):
        self.goto(-40,0)
        self.write("GAME OVER", font=FONT)

    def count_score(self):
        self.clear()
        self.score += 1
        self.score_update()