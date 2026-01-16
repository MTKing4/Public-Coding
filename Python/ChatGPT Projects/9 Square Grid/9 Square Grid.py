import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from matplotlib.widgets import Button

class ExpandingElements:
    def __init__(self):
        self.grid = np.ones((3, 3))  # 3x3 grid representing the elements
        self.colors = np.random.rand(3, 3, 3)  # Random colors for each element
        self.fig, self.ax = plt.subplots()
        self.ax.set_xlim(0, 3.5)
        self.ax.set_ylim(0, 3.5)
        self.ax.set_xticks([])
        self.ax.set_yticks([])
        self.ax.set_facecolor('white')  # White background

        # Add reset button
        self.reset_ax = plt.axes([0.4, 0.05, 0.2, 0.075])  # Button position
        self.reset_button = Button(self.reset_ax, 'Reset', color='lightgray', hovercolor='gray')
        self.reset_button.on_clicked(self.reset_grid)

        self.draw_grid()
        self.fig.canvas.mpl_connect('button_press_event', self.on_click)
        plt.show()

    def draw_grid(self):
        self.ax.clear()
        self.ax.set_xlim(0, 3.5)
        self.ax.set_ylim(0, 3.5)
        self.ax.set_xticks([])
        self.ax.set_yticks([])
        self.ax.set_facecolor('white')  # White background

        for i in range(3):
            for j in range(3):
                if self.grid[i, j] > 0:  # Draw enabled elements
                    width = 0.8 if self.grid[i, j] == 1 else 1.8  # Width for expanded elements
                    height = 0.8 if self.grid[i, j] == 1 else 1.8  # Height for expanded elements
                    x = j + 0.1 if self.grid[i, j] == 1 else (j - 0.8 if j > 0 and self.grid[i, j - 1] == 0 else j + 0.1)
                    y = 2 - i + 0.1 if self.grid[i, j] == 1 else (2 - i - 0.8 if i > 0 and self.grid[i - 1, j] == 0 else 2 - i + 0.1)
                    self.ax.add_patch(Rectangle(
                        (x, y), width, height,
                        edgecolor="gray", facecolor=self.colors[i, j], linewidth=2
                    ))
        plt.draw()

    def on_click(self, event):
        if event.xdata is not None and event.ydata is not None:
            x = int(event.xdata)
            y = int(2 - event.ydata)  # Convert to grid coordinates
            if 0 <= x < 3 and 0 <= y < 3:
                if self.grid[y, x] == 1:  # If the element is enabled
                    self.grid[y, x] = 0  # Disable the element
                    self.expand_towards_disabled(y, x)
                    self.draw_grid()

    def expand_towards_disabled(self, y, x):
        # Check neighboring elements for expansion opportunities
        neighbors = []
        if y > 0 and self.grid[y - 1, x] == 1:  # Up
            neighbors.append((y - 1, x, 'vertical'))
        if y < 2 and self.grid[y + 1, x] == 1:  # Down
            neighbors.append((y + 1, x, 'vertical'))
        if x > 0 and self.grid[y, x - 1] == 1:  # Left
            neighbors.append((y, x - 1, 'horizontal'))
        if x < 2 and self.grid[y, x + 1] == 1:  # Right
            neighbors.append((y, x + 1, 'horizontal'))

        for ny, nx, direction in neighbors:
            if direction == 'vertical' and self.grid[ny, nx] == 1:
                # Expand vertically (up or down)
                if (ny > 0 and self.grid[ny - 1, nx] == 0) or (ny < 2 and self.grid[ny + 1, nx] == 0):
                    self.grid[ny, nx] = 1.5  # Mark as expanded vertically
            elif direction == 'horizontal' and self.grid[ny, nx] == 1:
                # Expand horizontally (left or right)
                if (nx > 0 and self.grid[ny, nx - 1] == 0) or (nx < 2 and self.grid[ny, nx + 1] == 0):
                    self.grid[ny, nx] = 1.5  # Mark as expanded horizontally

    def reset_grid(self, event):
        # Reset the grid to its initial state
        self.grid = np.ones((3, 3))
        self.colors = np.random.rand(3, 3, 3)  # New random colors
        self.draw_grid()

if __name__ == "__main__":
    ExpandingElements()