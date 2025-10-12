#TODO: Create a letter using starting_letter.txt 
#for each name in invited_names.txt
#Replace the [name] placeholder with the actual name.
#Save the letters in the folder "ReadyToSend".
    
#Hint1: This method will help you: https://www.w3schools.com/python/ref_file_readlines.asp
    #Hint2: This method will also help you: https://www.w3schools.com/python/ref_string_replace.asp
        #Hint3: THis method will help you: https://www.w3schools.com/python/ref_string_strip.asp



with open("Input/Names/invited_names.txt") as invited_names:
    names_list = invited_names.readlines()                                      #reads the lines and puts each line as an item in a list
    for name in names_list:
        new_name = name.strip()                                                 #rremoves any leading, and trailing whitespaces, including end lines.

        with open("Input/Letters/starting_letter.txt") as starting_letter:
            letter = starting_letter.read()
            replaced_letter = letter.replace("[name]", new_name)

        with open(f"Output/ReadyToSend/{new_name}.txt", mode="w") as mail_merged:
            mail_merged.write(replaced_letter)