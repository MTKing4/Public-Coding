


MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "milk": 0,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 400,
    "milk": 200,
    "coffee": 100,
    "money" : 0
}


def resource_checker(selected_item_f):
    unavailable_f = []
    water_f = MENU[selected_item]["ingredients"]["water"]
    milk_f = MENU[selected_item]["ingredients"]["milk"]
    coffee_f = MENU[selected_item]["ingredients"]["coffee"]
    selected_resources = [water_f, milk_f, coffee_f]

    for item in selected_resources:
        for resource in resources:
            if item < resources[resource]:
                unavailable_f.append(item)
    return unavailable_f, water_f, milk_f, coffee_f


def dispenser(selected_item_f, water_f, milk_f, coffee_f):
    ingredients = [water_f, milk_f, coffee_f]
    for item in ingredients:
        resources[item] = item - resources[item]
    return resources

is_on = True




while is_on:
    print("Welcome to the Coffee Machine")
    print("1: Espresso")
    print("2: Latte")
    print("3: cappuccino")
    print("report: print a report")
    print("off: Turn off")
    request = input("What would you like? ")



    if request == "1":
        selected_item = "espresso"
        unavailable, water, milk, coffee = resource_checker(selected_item)
        dispenser(selected_item, water, milk, coffee)

    elif request == "2":
        selected_item = "latte"
        unavailable, water, milk, coffee = resource_checker(selected_item)
        dispenser(selected_item, water, milk, coffee)

    elif request == "3":
        selected_item = "cappuccino"
        unavailable, water, milk, coffee = resource_checker(selected_item)
        dispenser(selected_item, water, milk, coffee)

    elif request.lower() == "report":
        # print(f"current resources")
        # print(f"Water: {resources["water"]}ml")
        # print(f"Milk: {resources["milk"]}ml")
        # print(f"Coffee: {resources["coffee"]}g")
        # print(f"Money: ${resources["money"]}\n")
        input("Press any button to continue\n")

    elif request.lower() == "off":
        is_on = False
        machine_status = input("machine turned off, to turn back on type ON: ")
        if machine_status.lower() == "on":
            is_on = True
