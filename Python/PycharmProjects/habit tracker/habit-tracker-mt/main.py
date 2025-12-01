import requests
from datetime import datetime

USERNAME = "placeholder"
TOKEN = "placeholder"
GRAPH = "placeholder"

#--------------------------Create a user--------------------------

pixela_endpoint= "https://pixe.la/v1/users"

user_params = {
    "token": TOKEN,
    "username": USERNAME,
    "agreeTermsOfService": "yes",
    "notMinor": "yes"
}

response = requests.post(url=pixela_endpoint, json=user_params)
print(response.text)

#--------------------------Create a graph-------------------------

graph_endpoint = f"{pixela_endpoint}/{USERNAME}/graphs"

graph_config = {
    "id": GRAPH,
    "name": "Cycling Graph",
    "unit": "Km",
    "type": "float",
    "color": "momiji"
}

headers = {
    "X-USER-TOKEN": TOKEN
}

response = requests.post(url=graph_endpoint, json=graph_config, headers=headers)
print(response.text)


#---------------------Add a pixel to the Graph--------------------

pixel_creation_endpoint = f"{pixela_endpoint}/{USERNAME}/graphs/{GRAPH}"

# date = datetime(year=2025, month=11, day=29) #can get specific time like so

date = datetime.now()


pixel_data = {
    "date": date.strftime("%Y%m%d"),
    "quantity": "31.46"
}

response = requests.post(url=pixel_creation_endpoint, json=pixel_data, headers=headers)
print(response.text)


#---------------------update a pixel using PUT--------------------


update_endpoint = f"{pixela_endpoint}/{USERNAME}/graphs/{GRAPH}/{date.strftime('%Y%m%d')}"

new_pixel_data = {
    "quantity": "3.46"
}

response = requests.put(url=update_endpoint, json=new_pixel_data, headers=headers)
print(response.text)


#---------------------delete a pixel using DELETE--------------------

delete_endpoint = f"{pixela_endpoint}/{USERNAME}/graphs/{GRAPH}/{date.strftime('%Y%m%d')}"



response = requests.delete(delete_endpoint, headers=headers)
print(response.text)