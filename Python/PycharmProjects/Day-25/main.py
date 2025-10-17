
# method 1
# can use this way, but it's not good for csv

with open("weather-data.csv") as weather_data:
    data = weather_data.readlines()
    for line in data:
        new_line = line.strip()
        print(new_line)

# method 2

import csv

with open("weather-data.csv") as weather_data:
    data = csv.reader(weather_data)                     #creates an object that can be looped through
    temperatures = []
    for row in data:
        if row[1] != "temp":
            temperatures.append(int(row[1]))
    print(temperatures)

# method 3 (best)

import pandas

data = pandas.read_csv("weather-data.csv")
print(data["temp"])                                     # showing only the temp column ( data["temp"] is a series)

#----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Pandas

import pandas

data = pandas.read_csv("weather-data.csv")
print(type(data))                                             # data is a DataFrame
print(type(data["temp"]))                                     # showing only the temp column ( data["temp"] is a series)

data_dict = data.to_dict()                                      # converting a DataFrame to a dictionary (wow)
print(data_dict)

temp_list = data["temp"].to_list()                              # converting a series to a list
print(temp_list)

average = sum(temp_list) / len(temp_list)                       # simplest way to find the average in a list
print(average)

mean = data["temp"].mean()                                      # finding the average in a series
print(mean)

maxx = data["temp"].max()                                       # finding the maximum in a series
print(maxx)

print(data["condition"])                                        # returns the condition column, pulling columns by the key, like a dictionary
print(data.condition)                                           # returns the condition column, pulling columns by its attribute, like an object, all headings of the table are converted to attributes, which allows such a call to be made

print(data[data["day"] == "Monday"])                              # return the row where the "day" column is equal to "Monday"
print(data[data.day == "Monday"])                                 # this is the same as the above but using the object style instead of the dictionary style

print(data[data.temp == data["temp"].max()])                      # return the row where the temperature was the highest at

monday = data[data.day == "Monday"]                                 # entire row, we saved it in a variable
print(monday.condition)                                           # now we can access each value in the row by the column name the same way we did for the entire table (nice)

#we can also do it directly without using a variable:
print(data[data.day == "Monday"].condition)


# Creating a dataframe from scratch (from a dictionary)
data_dict = {
    "students": ["Amy", "James", "Angela"],
    "scores": [76, 56, 65]
}

data = pandas.DataFrame(data_dict)
data.to_csv("new_data.csv")

#----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Squirrel color count (my code)

import pandas

data = pandas.read_csv("Squirrel-Data.csv")
fur = data["Primary Fur Color"]
fur_colors = fur.value_counts()                                         # this function one handedly did all the work that retarded teacher did (get all the unique values and their count)
colors_DF = pandas.DataFrame(fur_colors)
colors_DF.to_csv("squirrel_count.csv")

#----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Squirrel color count (her code) (absolutely retarded, I did it with 1 function)

import pandas

data = pandas.read_csv("Squirrel-Data.csv")
gray_sqrl = len(data[data["Primary Fur Color"] == "Gray"])              #can use len() to get the number of gray squirrels by counting each row (since it's filtered by gray only)
red_sqrl = len(data[data["Primary Fur Color"] == "Cinnamon"])
black_sqrl = len(data[data["Primary Fur Color"] == "Black"])
print(gray_sqrl)
print(red_sqrl)
print(black_sqrl)

data_dict = {
    "fur Color": ["Gray", "Cinnamon", "Black"],
    "Count": [gray_sqrl, red_sqrl, black_sqrl]
}

df = pandas.DataFrame(data_dict)
df.to_csv("squirrel_count.csv")