from turtle import Turtle
import turtle



class Paddle():
    def __init__(self):
        self.paddles = []
        ...


    def paddle_creation(self, x_loc, y_loc):
        paddle = Turtle(shape="square")
        paddle.color("white")
        paddle.penup()
        paddle.shapesize(2,8)
        paddle.setheading(90)
        paddle.speed(0)
        paddle.goto(x_loc, y_loc)
        self.paddles.append(paddle)


    def up(self):
        self.paddles[0].setheading(90)
        self.paddles[0].forward(20)

    def down(self):
        self.paddles[0].setheading(-90)
        self.paddles[0].forward(20)

