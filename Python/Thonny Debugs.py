from random import randint

from art import higher_lower, vs
from higherlower import data


def follower_diff(a, b):
    if a > b:
        return a
    elif b > a:
        return b
    else:
        return "Oops, they are one and the same :)"


def answer_checker(answer, bigger):
    if answer == bigger:
        print("you win")
        print(f"your score is {score + 1}")
        return True
    else:
        print(f"you lost, your score is {score}")
        return False


def score_counter():
    if game_continue:
        return score + 1


def name_fetcher():
    if bigger == a:
        return f"{random_person['name']} is the correct answer"
    else:
        return f"{random_person_2['name']} is the correct answer"

def person_randomizer():
    return data[randint(0, len(data) - 1)]


def name_definer(person):
    return f"{person['name']} a {person['description']} from {person['country']}"


print(higher_lower)


bigger = ""
score = 0
game_continue = True
winner = 0

random_person = person_randomizer()
random_person_2 = person_randomizer()

while game_continue:
    random_person = random_person_2
    random_person_2 = person_randomizer()
    if random_person == random_person_2:
        continue
    a = random_person['followers']
    b = random_person_2['followers']
    a_name = random_person['name']

    print("Compare: A " + name_definer(random_person))
    print(vs)
    print(f"Against: B " + name_definer(random_person_2))


    user_input = input("who has more followers? Type 'A' or 'B'")


    if user_input == 'a'.lower():
        answer = a
        bigger = follower_diff(a, b)
        game_continue = answer_checker(answer, bigger)
        score = score_counter()
        name_fetcher()

    else:
        answer = b
        bigger = follower_diff(a, b)
        game_continue = answer_checker(answer, bigger)
        score = score_counter()
        name_fetcher()

