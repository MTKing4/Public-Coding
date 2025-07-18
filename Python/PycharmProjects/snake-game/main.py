from turtle import Screen
import time
from scoreboard import Score
from food import Food
from snake import Snake

screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("Snake Game")

screen.tracer(0)
snake = Snake()
food = Food()
score = Score()

screen.listen()
screen.onkeypress(snake.left, "Up")
screen.onkeypress(snake.right, "Down")
screen.onkeypress(snake.left, "Left")
screen.onkeypress(snake.right, "Right")
screen.onkeypress(snake.clear, "c")


game_is_on = True
while game_is_on:
    screen.update()
    time.sleep(0.1)
    snake.move()
    # print(snake.segments[0].pos())

    if food.distance(snake.segments[0]) <= 20:
        food.change_location()
        snake.extend()
        score.count_score()

    if (snake.segments[0].xcor() > 300 or snake.segments[0].xcor() < -300
        or snake.segments[0].ycor() > 300 or snake.segments[0].ycor() < -300):
        game_is_on = False
        score.game_over()
        print("you lost :(")


    for segment in snake.segments[1:]:                          # using a sublist/slice instead of doing a for loop over all of the original list and excluding the first segment with an if statement, much shorter now
        if snake.segments[0].distance(segment) < 10:
            game_is_on = False
            score.game_over()
            print("you lost :(")

screen.exitonclick()