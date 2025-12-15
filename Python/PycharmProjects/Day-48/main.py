from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time


chrome_driver_path = "chromedriver.exe"
service_ = Service(executable_path=chrome_driver_path)
driver = webdriver.Chrome(service=service_)


driver.get("https://www.amazon.com")
button = "a-button-inner"
continue_ = driver.find_element(By.CLASS_NAME, button)
continue_.click()

link = '//*[@id="nav-hamburger-menu"]'
all_ = driver.find_element(By.XPATH, link)           # you can get the XPATH by right-clicking the element in inspection menu, copy -> copy XPATH (genius) you can also find the element by hovering over it by enabling mouse hover feature (top left corner of inspection menu, or press CTRL+SHIFT+C) AMAZING!
print(all_.text)                                     # get the element text

time.sleep(10000)
driver.close()                  # closes the tab
driver.quit()                   # quits the entire browser