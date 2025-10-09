import time
from turtle import Screen
from player import Player, STARTING_POSITION, FINISH_LINE_Y
from car_manager import CarManager
from scoreboard import Scoreboard

screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)

player = Player()

screen.listen()
screen.onkeypress(player.up,"Up")

car_manager = CarManager()

scoreboard = Scoreboard()



game_is_on = True
while game_is_on:
    time.sleep(0.1)
    car_manager.create_car()
    car_manager.cars_movement()
    screen.update()
    scoreboard.print_score()

    for car in car_manager.cars:
        if player.distance(car) < 30:
            scoreboard.game_over()
            game_is_on = False

    if player.ycor() > FINISH_LINE_Y:
        player.goto(STARTING_POSITION)
        car_manager.cars_speeder()
        scoreboard.print_score()
        scoreboard.update_score()



screen.exitonclick()