
with open("file1.txt") as file_1, open("file2.txt") as file_2:
    numbers_1 = [int(num.strip()) for num in file_1.readlines()]
    numbers_2 = [int(num.strip()) for num in file_2.readlines()]
    result = [number_1 for number_1 in numbers_1 if number_1 in numbers_2]
    print(result)