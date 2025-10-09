from random import randint
from turtle import Turtle
import random

COLORS = ["red", "orange", "yellow", "green", "blue", "purple"]
STARTING_MOVE_DISTANCE = 5
MOVE_INCREMENT = 10


class CarManager:
    def __init__(self):
        self.cars = []
        self.move_distance = STARTING_MOVE_DISTANCE             #smart way to change a constant in a class in a method: store the current speed as an instance variable inside CarManager, not as a global constant.

    def create_car(self):
        random_chance = randint(1, 6)
        if random_chance == 6:
            square = Turtle()
            square.shape("square")
            square.shapesize(1, 2)
            square.penup()
            square.color(random.choice(COLORS))
            square.y_position = randint(-250, 250)
            square.x_position = randint(300, 500)
            square.goto(square.x_position, square.y_position)
            self.cars.append(square)



    def cars_movement(self):
        for car in range(len(self.cars)):
            new_location_x = self.cars[car].xcor() - self.move_distance
            self.cars[car].goto(new_location_x, self.cars[car].y_position)


    def cars_speeder(self):
        self.move_distance += MOVE_INCREMENT