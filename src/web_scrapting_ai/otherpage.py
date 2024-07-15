import pandas as pd
from bs4 import BeautifulSoup
import requests as rq


get_data = rq.get(
    "https://www.oracle.com/technical-resources/articles/linux/advanced-linux-command-mastery-part2.html"
)

soup = BeautifulSoup(get_data.text, "html.parser")


heading = soup.find_all("h3")
code = soup.find("code", class_="ocode")

data = []

for heading in heading:
    code_texts = [code.text for code in heading.find_all_next("code", class_="ocode")]
    data.append(f"heading: {heading.text}, codes: {', '.join(code_texts)}")

df = pd.DataFrame(data)

df.to_csv("third_page.xlsx", index=False)
