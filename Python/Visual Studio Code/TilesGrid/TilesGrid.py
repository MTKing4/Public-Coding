import pygame
pygame.init()


width = 800
height = 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("Grid Tiles")


black = (0, 0, 0)
blue = (0, 0, 255)
red = (255, 0, 0)
green = (0, 255, 0)
Yellow = (255, 255, 0)
Purple = (255, 0, 255)
Orange = (255, 165, 0)
lime = (0, 200, 0)
maroon = (128, 0, 0)
olive = (128, 128, 0)


square_size = 50
square_x, square_y = 200, 200

running = True
while running:
    screen.fill(black)

    # Draw a square
    pygame.draw.rect(screen, blue, (square_x, square_y, square_size, square_size))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    pygame.display.flip()