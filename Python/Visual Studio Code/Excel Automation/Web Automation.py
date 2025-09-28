

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd, math, time


#-----------------------------------------------


service = Service(executable_path="chromedriver.exe")
driver = webdriver.Chrome()


driver.get("placeholder")
access_token = "placeholder"
driver.execute_script(f"window.localStorage.setItem('accessToken', '{access_token}');")


# 3. Refresh the page to apply the token
driver.refresh()
driver.get("placeholder")
time.sleep(5)



#-----------------------------------------------


df = pd.read_excel('translations.xlsx')
translations = []

for item in df['Translation']:
    if item == "Translation" or type(item) == float or "":
        pass
    else:
        translations.append(item)



#-----------------------------------------------

time.sleep(20)

def is_valid(text):
    return not (isinstance(text, float) and math.isnan(text)) and str(text).strip()

start_index = 0
for i in range(25):
    header_id = f"undefined_accordionheader_{i}"
    content_id = f"undefined_accordioncontent_{i}"
    
    WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.ID, header_id))).click()
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, content_id)))

    textareas = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, f"#{content_id} textarea.p-textarea"))
    )

    for t in textareas:
        if start_index >= len(translations): break
        val = translations[start_index]
        if not is_valid(val):
            start_index += 1
            continue
        driver.execute_script("arguments[0].scrollIntoView();", t)
        driver.execute_script("arguments[0].value = arguments[1];", t, str(val))
        driver.execute_script("arguments[0].dispatchEvent(new Event('input', { bubbles: true }));", t)
        driver.execute_script("arguments[0].dispatchEvent(new Event('change', { bubbles: true }));", t)
        start_index += 1
        time.sleep(0.1)
    time.sleep(5)

time.sleep(9000)