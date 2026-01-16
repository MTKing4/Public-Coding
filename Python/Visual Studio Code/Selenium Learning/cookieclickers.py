#Selenium

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome(service=service)


driver.get("https://orteil.dashnet.org/cookieclicker/")



cookie_id = "bigCookie"
cookies_counter = "cookies"
product_price_prefix = "productPrice"                   #this is the upgrade price
product_prefix = "product"                              #this is the upgrade button

WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CLASS_NAME, "cc_btn_accept_all")))
cookie_accept = driver.find_element(By.CLASS_NAME, "cc_btn_accept_all")
cookie_accept.click()


WebDriverWait(driver, 20).until(
    EC.presence_of_element_located((By.XPATH, "//*[contains(text(), 'English')]"))) 


# XPATH looks for the text "English", Syntax: //*[contains(text(), 'text')], 
# // means Search anywhere in the document regardless of the hierarchy of the node (tag)
# * match all tag types, difference between // and * in an example: //div[contains(text(), 'English')] here it would only match <div> elements containing 'English'. By using *, you make the search more flexible to match any element type
# contains() is A function that checks if a string contains a specified substring. It is used to match elements whose text contains the specified substring. It takes two arguments: The first argument is the string to search within (in this case, text())
# text() Refers to the text content of an element, This is used to access the visible text inside an HTML element.

language_eng = driver.find_element(By.XPATH, "//*[contains(text(), 'English')]")
language_eng.click()

WebDriverWait(driver, 25).until(EC.presence_of_element_located((By.ID, cookie_id)))


while True:
    cookie = driver.find_element(By.ID, cookie_id)
    cookie.click()
    cookies_count = driver.find_element(By.ID, cookies_counter).text.split(" ")[0]                                      # .text is to access the visible text in that element, .split(" ") is to split the text into a list of strings, and [0] is to get the first element of the list, which is the number of cookies
    cookies_count = int(cookies_count.replace(",", ""))                                                                 # .replace(",", "") is to remove the commas from the number, and int() is to convert the string to an integer, commas can cause an error when converting to int, so we remove them first
    print(cookies_count)

    for i in range(4):
        product_price = driver.find_element(By.ID, product_price_prefix + str(i)).text.replace(",", "")                 # str(i) is added to the product price prefix because products are named with numbers, ex. product0
        
        if not product_price.isdigit():                                                                                 # isdigit() is a method that checks if the string is a digit, if not, it means the product is not available yet, so we skip it
            continue                                                                                                    # continue is used to skip the current iteration of the loop and move to the next one     

        product_price = int(product_price) 

        if cookies_count >= product_price:                                                                              # when the cookies count is more than the upgrade's price, click on the upgrade button
            product = driver.find_element(By.ID, product_prefix + str(i))                                  
            product.click()
            break


#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------