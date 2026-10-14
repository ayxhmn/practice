import random
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
import time

# Random search generator
words = ["Javascript","C#" ,"pork","rain", "weather", "AI", "technology", "space", "cooking", "chicken", "soup", "shakshouka", "kitty", "cat", "dog", "house", "price", "stock", "market", "C", "C++", "coding"]
def generate_random_query():
    return " ".join(random.choices(words, k=random.randint(2, 7)))

# Edge WebDriver setup
options = Options()
options.add_argument(r"user-data-dir=C:/Users/ayxhm/AppData/Local/Microsoft/Edge/User Data")
options.add_argument("profile-directory=Profile 1")
options.add_argument("--headless")  # Runs without GUI
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option("useAutomationExtension", False)

# Initialize WebDriver
service = Service(r"edgedriver_win64/msedgedriver.exe")  # Replace with correct path to msedgedriver
driver = webdriver.Edge(service=service, options=options)

# Perform searches
num_search = 60
driver.get("https://www.bing.com/search?pglt=385&q=Who+am+I")
for _ in range(num_search):
    query = generate_random_query()
    search_box = driver.find_element("name", "q")  # Bing search box
    search_box.clear()
    search_box.send_keys(query)
    search_box.send_keys(Keys.RETURN)  # Press Enter
    time.sleep(5)  # Wait for results to load

# Close browser
driver.quit()
