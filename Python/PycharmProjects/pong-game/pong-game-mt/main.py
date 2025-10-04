import time
from turtle import Screen, Turtle

from ball import Ball
from scoreboard import Scoreboard
from paddle import Paddle



screen = Screen()
screen.setup(1200, 800)
screen.bgcolor('black')
screen.tracer(0)

paddle1 = Paddle()
paddle1.paddle_creation(580, 0)

paddle2 = Paddle()
paddle2.paddle_creation(-590, 0)


keys = {"Up": False, "Down": False, "w": False, "s": False}         #keys are being used as toggles, they will be changed to True when the key is pressed, and False when not pressed

def key_press(key):
    keys[key] = True                                                # this is setting the key "up" for example to True, allowing the movement to happen when the value is Evaluated to be True in the main loop


def key_release(key):
    keys[key] = False                                               # this is setting the key "up" for example to False, stopping the movement to happen when the value is Evaluated to be False in the main loop


screen.listen()

screen.onkeypress(lambda: key_press("Up"), "Up")                # lambda in Python creates a tiny unnamed function on the fly. It lets you pass arguments into functions for event handlers, without calling them immediately.
screen.onkeyrelease(lambda: key_release("Up"), "Up")            # what lambda is doing here is basically: “When the Up key is pressed, run this little function that calls key_press("Up").” Python doesn’t execute it right away — it just saves that tiny function to be triggered later.

screen.onkeypress(lambda: key_press("Down"), "Down")            # without lambda for example: ```screen.onkeypress(key_press("Up"), "Up")``` this calls the function immediately when Python reads the line, instead of waiting for the key press. That’s not what we want.
screen.onkeyrelease(lambda: key_release("Down"), "Down")

screen.onkeypress(lambda: key_press("w"), "w")
screen.onkeyrelease(lambda: key_release("w"), "w")

screen.onkeypress(lambda: key_press("s"), "s")
screen.onkeyrelease(lambda: key_release("s"), "s")

scoreboard = Scoreboard()
ball = Ball()

line = Turtle()
line.color("white")
line.speed(0)
line.penup()
line.hideturtle()
line.goto(0, 400)
line.setheading(-90)
for _ in range(40):
    line.pendown()
    line.forward(10)
    line.penup()
    line.forward(10)

game_on = True
while game_on:
    screen.update()
    time.sleep(0.02)
    ball.move()

    if ball.ycor() > 380 or ball.ycor() < -380:
        ball.bounce_y()

    if ball.xcor() > 550 and ball.distance(paddle1.paddles[0]) < 100:
        ball.bounce_x()

    if ball.xcor() < -550 and ball.distance(paddle2.paddles[0]) < 100:
        ball.bounce_x()

    if ball.xcor() > 600:
        ball.goto(0,0)
        ball.reset_ball()
        scoreboard.left_point()

    if ball.xcor() < -600:
        ball.goto(0,0)
        ball.reset_ball()
        scoreboard.right_point()

    if keys["Up"]:                              # here when the key is evaluated to be True, "after it was changed by the key_press function" it will trigger the movement", and once it gets False "after it was changed by the key_release function" it will stop the movement.
        paddle1.up()
    if keys["Down"]:
        paddle1.down()

    if keys["w"]:
        paddle2.up()
    if keys["s"]:
        paddle2.down()

screen.exitonclick()