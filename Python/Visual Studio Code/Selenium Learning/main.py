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