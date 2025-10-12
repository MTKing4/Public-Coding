from turtle import Turtle
ALIGNMENT = "center"
FONT = ("Courier", 24, "normal")



class Scoreboard(Turtle):

    def __init__(self):
        super().__init__()
        self.score = 0
        with open("data.txt") as score_file:                    # reading the data.txt file to access previous highscore from the file
            self.highscore = int(score_file.read())
        self.color("white")
        self.penup()
        self.goto(0, 270)
        self.hideturtle()
        self.update_scoreboard()

    def update_scoreboard(self):
        self.clear()
        self.write(f"Score: {self.score} High Score: {self.highscore}", align=ALIGNMENT, font=FONT)


    def reset(self):
        if  self.score > self.highscore:
            self.highscore = self.score
            with open("data.txt", mode="w") as new_score_file:              # writing the newest highscore to the data.txt file
                new_score_file.write(str(self.highscore))
        self.score = 0
        self.update_scoreboard()

    # def game_over(self):
    #     self.goto(0, 0)
    #     self.write("GAME OVER", align=ALIGNMENT, font=FONT)

    def increase_score(self):
        self.score += 1
        self.update_scoreboard()
