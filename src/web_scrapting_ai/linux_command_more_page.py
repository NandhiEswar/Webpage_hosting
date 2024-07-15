import pandas as pd
from bs4 import BeautifulSoup
import requests as rq

web_page = rq.get("https://www.scaler.com/topics/advanced-linux-commands/")

soup = BeautifulSoup(web_page.text, "html.parser")

heading = soup.find_all(attrs={"level": "3"})

paragraph = soup.find("section", class_="main").find("p")

capture_next = False

for element in heading:
    if capture_next:
        print(f"Found <h2>: {element.text}")
        # Assuming the <p> immediately follows <h2>, find the next sibling
        paragraph = element.find_next_sibling("p")
        if paragraph:
            print(f"Paragraph: {paragraph.text}")
        break  # Exit loop after finding the first matching <h2> and <p>
    if element.name == "h3" and element.get("level") == "3":
        capture_next = True
