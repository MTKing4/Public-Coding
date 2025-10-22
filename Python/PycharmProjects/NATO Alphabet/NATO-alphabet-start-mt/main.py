
import pandas

nato_alpha = pandas.read_csv("nato_phonetic_alphabet.csv")

phonetic_alphabet_dict =  {row.letter:row.code for (index, row) in  nato_alpha.iterrows()}              # converts data frame to a dictionary where letter column is the key and code is the value
print(phonetic_alphabet_dict)


word = input("word: ").upper()
nato_translation = [phonetic_alphabet_dict[letter] for letter in word]                      # translates your text to the nato alphabet in a list

print(nato_translation)