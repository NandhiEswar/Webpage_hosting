from bs4 import BeautifulSoup
import requests 
import pandas  as pd
from openpyxl.workbook import Workbook

url ="https://www.hostinger.in/tutorials/linux-commands"

response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

#find the table data 
table = soup.find('figure',class_='wp-block-table').find('table')

# Extract rows from the table
rows = table.find('tbody').find_all('tr')

linux_commands=[]

for row in rows[1:]:
    columns = row.find_all('td')
    command = columns[0].get_text(strip=True) if columns[0].get_text(strip=True) else None
    function = columns[1].get_text(strip=True) if columns[1].get_text(strip=True) else None
    linux_commands.append([{'function':function,'command':command}])

df = pd.DataFrame(linux_commands)

#excel_file = 'command_for.excel'

df.to_excel('linux_commands.xlsx', index=False)

print(df)