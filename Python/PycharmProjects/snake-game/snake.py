from turtle import Turtle

MOVE_DISTANCE = 20

class Snake():
    def __init__(self):
        self.tails_names = ["tail_1", "tail_2", "tail_3"]
        self.tails = {}
        self.x_position = 0
        self.segments = []

        for tail in self.tails_names:
            self.add_segment(tail)


    def add_segment(self, tail):
        self.tails[tail] = Turtle(shape="square")
        self.tails[tail].color("white")
        self.tails[tail].penup()
        self.tails[tail].goto(self.x_position, y=0)
        self.x_position -= 20
        self.segments.append(self.tails[tail])

    def extend(self):
        self.add_segment(self.segments[-1].position())                     # -1 here means the last segment, in lists, -1 index is the last item in the list


    def move(self):
        for seg_num in range(len(self.segments) -1, 0, -1):
            self.segments[seg_num].goto((self.segments[seg_num - 1].pos()))
        self.segments[0].forward(MOVE_DISTANCE)


    def left(self):
        self.segments[0].left(90)

    def right(self):
        self.segments[0].right(90)

    def clear(self):
        self.segments[0].clear()