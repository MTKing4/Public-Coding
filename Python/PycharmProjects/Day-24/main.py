file = open("my_file.txt")              # opening the file takes some resources from pc, should be closed when done
contents = file.read()                  # filename.read() returns the contents of the file
print(contents)
file.close()                            # closing the file to clear up some resources


# another way of opening the file (this one does not need a close() statement
with open("my_file.txt") as file:
    contents = file.read()
    print(contents)


with open("my_file.txt", mode="a") as file:             # default open mode is ready only: mode="r", and mode="w" means open file in write mode (will replace everything), to add to file without replace use mode="a" which stands for append
    file.write("\nNew text.")


with open("new_file.txt", mode="w") as file: # if new_file.txt doesn't exist, it will create that file for you, only works with write mode "w"
    file.write("\nNew text.")


#Absolue and Relative Paths

with open("C:/Users/ACER/Desktop/new_file.txt") as file:            #Absolute Path
    contents = file.read()
    print(contents)


with open("../../../../../../Art/new_file.txt") as file:                #Relative Path (../ means going backwards once, then going forwards to Art in this example
    contents = file.read()
    print(contents)