import requests
from bs4 import BeautifulSoup
import pandas as pd

# URL of the webpage to scrape
url = 'https://www.hostinger.in/tutorials/linux-commands'

# Fetch the content of the webpage
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Find all headings and their corresponding paragraphs and lists
headings = soup.find_all('h3', class_='wp-block-heading')
content_paragraphs = soup.find_all('div', class_='wp-block-image')  # Adjust this to match the structure of your content
preformatted_blocks = soup.find_all('div', class_='wp-block-preformatted')  # New: Extract preformatted content

# Ensure lengths match
num_headings = len(headings)
num_content = len(content_paragraphs)
num_preformatted = len(preformatted_blocks)

# Create lists to store data
data = []

# Extract heading, combined content and lists
for i in range(min(num_headings, num_content)):
    heading = headings[i].get_text(strip=True)
    content = content_paragraphs[i].find_next('p').get_text(strip=True)
    lists = [li.get_text(strip=True) for li in content_paragraphs[i].find_next('ul').find_all('li')]
    
    # Combine content and lists
    combined_content = f"{content}\n\n" + "\n".join(f"- {item}" for item in lists)
    
    # Append data to list
    data.append({
        'Heading': heading,
        'Combined Content': combined_content
    })

# Extract and add preformatted content
for i in range(num_preformatted):
    heading = preformatted_blocks[i].find_previous('h3', class_='wp-block-heading').get_text(strip=True)
    content = preformatted_blocks[i].get_text(strip=True)
    
    # Append preformatted data to list
    data.append({
        'Heading': heading,
        'Combined Content': content
    })

# Create DataFrame
df = pd.DataFrame(data)

# Define the path where you want to save the Excel file
excel_file = 'linux_commands_combined.xlsx'

# Write the DataFrame to an Excel file
df.to_excel(excel_file, index=False)

print(f"Data saved to {excel_file}")
