# Automating Google Search with Selenium and Undetected ChromeDriver

# from selenium import webdriver                                                                            # Import the webdriver module from the selenium package
import undetected_chromedriver as uc                                                                        # Import the undetected_chromedriver module as uc (the normal chromedriver module was triggering CAPTCHA)
from selenium.webdriver.chrome.service import Service                                                       # Import the service module, which is used to start the browser, and the Service class
from selenium.webdriver.common.by import By                                                                 # Import the By class, which is used to search for elements by their attributes
from selenium.webdriver.common.keys import Keys                                                             # Import the Keys class, which is used to send special keys like Enter, F1, etc.
from selenium.webdriver.support.ui import WebDriverWait                                                     # Import the WebDriverWait class, which is used to wait for a certain condition to be met before proceeding
from selenium.webdriver.support import expected_conditions as EC                                            # Import the expected_conditions module, which contains a set of predefined conditions to use with WebDriverWait
import time

service = Service(executable_path="chromedriver.exe")                                                       # Path to chromedriver executable, Create a new instance of the Service class, syntax: module_name.class_name(executable_path="path_to_chromedriver")
# driver = webdriver.Chrome(service=service)                                                                # Create a new instance of the Chrome driver, syntax: module_name.class_name(service=service_instance)
driver = uc.Chrome()                                                                                        # Create a new instance of the undetected_chromedriver
driver.set_window_size(1280, 800)                                                                           # Set the window size of the browser

driver.get("https://www.google.com")                                                                        # Open the specified URL in the browser


WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.CLASS_NAME, "gLFyf")))                    # this is used to wait for elements to load before proceeding, Syntax: WebDriverWait(driver, timeout).until(condition) , until() is a function from the WebDriverWait class that waits for a certain condition to be met before proceeding, in this case, it waits for the presence of an element located by the class name "gLfyf",  EC.presence_of_element_located() is a condition that waits for an element to be present in the DOM of the page, DOM is the Document Object Model, which is a representation of the structure of a web page, its content is a tuple (By.CLASS_NAME, "gLfyf")

input_element = driver.find_element(By.CLASS_NAME, "gLFyf")                                                 # Find the search bar by class name
input_element.clear()
input_element.send_keys("tech with tim" + Keys.ENTER)                                                       # Type "tech with tim" in the search bar, and press Enter


WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.PARTIAL_LINK_TEXT, "Tech With Tim")))


link_1 = driver.find_element(By.PARTIAL_LINK_TEXT, "Tech With Tim")                                         # Find the link by partial link text, if you want the exact link text, use By.LINK_TEXT instead of By.PARTIAL_LINK_TEXT, this line will find the first link that contains the text "Tech With Tim", if you want to find all the links that contain the text "Tech With Tim", use driver.find_elements(By.PARTIAL_LINK_TEXT, "Tech With Tim") instead, this will return a list of all the links that contain the text "Tech With Tim"
# Link_2 = driver.find_elements(By.LINK_TEXT, "Tech With Tim")                                                # Unused line, just for demonstration, find_elements() returns a list of all the elements, LINK_TEXT is used to find the exact link text

link_1.click()                                                                                              # Click the link

           

time.sleep(10)                                                                                              # Wait for 5 seconds

driver.quit()                                                                                               # Close the browser



#----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# cookie clicker game automation (my version)


from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome(service=service)


driver.get("https://orteil.dashnet.org/cookieclicker/")




WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.CLASS_NAME, "cc_btn_accept_all")))
cookie_accept = driver.find_element(By.CLASS_NAME, "cc_btn_accept_all")
cookie_accept.click()


WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.ID, "langSelect-EN")))
language_eng = driver.find_element(By.ID, "langSelect-EN")
language_eng.click()



WebDriverWait(driver, 50).until(EC.presence_of_element_located((By.ID, "bigCookie")))
for clicks in range(100):
    cookie = driver.find_element(By.ID, "bigCookie")
    cookie.click()


product0 = driver.find_element(By.ID, "product0")
time.sleep(255)


#----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# cookie clicker game automation (his full version)


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