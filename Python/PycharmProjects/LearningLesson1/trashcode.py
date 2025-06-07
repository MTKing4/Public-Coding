






















# from random import randint
#
# from art import higher_lower, vs
# from higherlower import data
# import random
#
# def follower_diff(answer):
#     if random_person['followers'] > random_person_2['followers']:
#         bigger = random_person['followers']
#         print(f" {random_person['name']} is the correct choice")
#         return  bigger
#     else:
#         bigger = random_person['followers']
#         print(f" {random_person_2['name']} is the correct choice")
#         return bigger
#
#
# def answer_checker(score):
#     if answer == bigger:
#         score += 1
#         print("you win")
#         return False
#     else:
#         print(f"you lost, your score is {score}")
#         return True
#
# print(higher_lower)
#
# random_person = data[randint(0, len(data)-1)]
# random_person_2 = data[randint(0, len(data)-1)]
#
# a = random_person['followers']
# b = random_person_2['followers']
#
# bigger = ""
# score = 0
# game_ended = False
#
# while not game_ended:
#     print(f"Compare: A {random_person['name']} a {random_person['description']} from {random_person['country']}")
#     print(vs)
#     print(f"Against: B {random_person_2['name']} a {random_person_2['description']} from {random_person_2['country']}")
#
#
#     answer = input("who has more followers? Type 'A' or 'B'")
#
#     if answer == 'a'.lower():
#         answer = a
#         follower_diff(a)
#         game_ended = answer_checker(score)
#     else:
#         answer = b
#         follower_diff(b)
#         game_ended = answer_checker(score)
