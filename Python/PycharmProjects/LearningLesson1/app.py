import turtle
import random
import math

tim = turtle.Turtle()
turtle.colormode(255)
tim.speed(0)

orbit_radius = 80   # distance from center (controls the "hole" size)
circle_radius = 100   # radius of the drawn circles
angle_step = 5      # how much to rotate each step

for angle in range(0, 360, angle_step):
    # compute position on the orbit
    x = orbit_radius * math.cos(math.radians(angle))
    y = orbit_radius * math.sin(math.radians(angle))

    tim.penup()
    tim.goto(x, y)             # move turtle outward on orbit
    tim.setheading(angle)      # make turtle face outward
    tim.pendown()

    tim.color(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))
    tim.circle(circle_radius)  # draw a circle at this orbit point

screen = turtle.Screen()
screen.exitonclick()
