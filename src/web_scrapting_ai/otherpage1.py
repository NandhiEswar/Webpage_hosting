from bs4 import BeautifulSoup
import requests as re


data = re.get(
    "https://www.firewall.cx/operating-systems/linux-unix/linux-advanced-cmd.html"
)

print(data)
# Ensure the request was successful

soup = BeautifulSoup(data.text, "html.parser")
main_div = soup.find_all("div")
print(main_div[15])
