---
title: "Beginner's Guide to Web Scraping with Python: Extracting Data and Images from Flipkart"
seoDescription: "Web Scraping with Python: Extracting Data and Images from Flipkart"
datePublished: Sun Sep 24 2023 13:59:13 GMT+0000 (Coordinated Universal Time)
cuid: clmxizzyw000d08l7hw03eajd
slug: beginners-guide-to-web-scraping-with-python-extracting-data-and-images-from-flipkart
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1695563517344/3c2acb71-e4b6-48ae-bae1-467b94a78413.png
tags: python, webdev, pandas, beautifulsoup, webscraping

---

**Hello Coders👩‍💻👨‍💻 Are you curious about how to gather information and images from your favorite online shopping website, Flipkart?**

<mark>Web scraping is the key! </mark> In this beginner-friendly guide, we'll walk you through the process step by step, breaking down the code to make it easy to understand and exciting to explore.

![Lets Get Started Saturday Night Live GIF - Lets Get Started Saturday Night Live Lets Start GIFs](https://media.tenor.com/KL0H0VZILx4AAAAC/lets-get-started-saturday-night-live.gif align="center")

# **🐱‍🏍Introduction**

![Happy Jimmy fallon GIF - Happy Jimmy fallon Late night with jimmy fallon GIFs](https://i.gifer.com/origin/65/651d5042e49e2eea63ea94c09e119716_w200.gif align="center")

### 🐱‍👓Unlocking the Power of Web Scraping

***Imagine having the ability to collect product details and images from Flipkart automatically.*** Whether you're a price-savvy shopper or an aspiring data scientist, web scraping can be your secret weapon. **Let's dive in and uncover the magic behind it.**

# **🐱‍💻Setting Up Your Web Scraping Environment**

Before we start, make sure you have Python installed on your computer. Additionally, you'll need some libraries to make web scraping a breeze: `requests`, `pandas`, `BeautifulSoup`, and `time`. I already explained how to install them please check my previous blog.

`pip install requests pandas beautifulsoup4`

**🕸We'll use the following libraries in our project:**

* `requests`: For making web requests
    
* `pandas`: For data manipulation and organization
    
* `beautifulsoup4`: For parsing HTML
    
* `time`: To introduce delays and be a polite scraper
    

### Let's break down the code and understand its functionality:

![GIFs Debt Paid Winning GIF](https://i.gifer.com/origin/35/3537e062025ce96f3d1fa865d8bc9d12_w200.gif align="center")

```python
import os
import requests
from bs4 import BeautifulSoup
import time
```

**These lines import necessary libraries:**

* `os`: For working with the file system to create directories.
    
* `requests`: For making HTTP requests to fetch web pages and images.
    
* `BeautifulSoup`: For parsing HTML content.
    
* `time`: To introduce delays between requests to avoid overwhelming the server.
    
    **2\. Defining Helper Functions**
    
    `create_nested_folders(path, *folder_names)`: This function creates nested folders in the specified directory path.
    
    It takes the `path` as the base directory and `*folder_names` as a variable number of folder names to create. It returns the path of the created nested folder.
    
    `clean_for_folder_name(text)`: This function cleans the input text to make it suitable for folder names.
    
    It removes any characters that are not alphanumeric, spaces, hyphens, underscores, or periods.
    
    `clean_for_file_name(text)`: Similar to the previous function, this one cleans the input text to make it suitable for file names.
    
    **3.** `scrape_flipkart_images(search_query, starting_page, ending_page)` **Function**
    
    This is the main function that performs web scraping to download product images from Flipkart. It takes three parameters:
    
    * `search_query`: The search query for Flipkart.
        
    * `starting_page`: The page index to start scraping from.
        
    * `ending_page`: The page index to stop scraping at.
        
    
    **4\. Creating a Base Folder**
    
    ```python
    # Create the 'flipimg' folder if it doesn't exist
    if not os.path.exists("westerndressforwoman"):
        os.makedirs("westerndressforwoman")
    ```
    
    This code checks if a folder named "westerndressforwoman" exists in the current directory. If it doesn't exist, it creates the folder.
    
* ![GIFs Thumbs up Friends tv No problem GIF](https://i.gifer.com/origin/a3/a3fc46493ff362be2b616d9db1fa5498_w200.gif align="center")
    

**5\. Looping Through Search Result Pages**

```python
page_num = starting_page

while page_num <= ending_page:
```

This loop iterates through the specified pages (from `starting_page` to `ending_page`) of search results on Flipkart.

**6\. Fetching and Parsing the Web Page**

```python
page_url = f"https://www.flipkart.com/search?q={search_query}&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page={page_num}"
r = requests.get(page_url)
soup = BeautifulSoup(r.text, "html.parser")
```

In each iteration, it constructs the URL for the search results page, and sends an HTTP GET request to that URL using `requests`, and parses the HTML content of the page using `BeautifulSoup`.

**7\. Extracting Product Cards**

```python
product_cards = soup.find_all("div", class_="_1AtVbE")

if not product_cards:
    break
```

It finds all the HTML `div` elements with the class name "\_1AtVbE," which typically represent product cards on Flipkart. If no product cards are found on the page, it breaks out of the loop, assuming there are no more results to scrape.

**8\. Looping Through Product Cards**

```python
for card in product_cards:
```

**9\. Extracting Product Information**

```python
product_name = card.find("a", class_="IRpwTa")
if not product_name:
    continue

product_name = product_name.text
```

It finds the product name within each product card and checks if it exists. If it doesn't find a product name, it skips that card and continues with the next one.

**10\. Cleaning Product Names**

```python
product_name_cleaned_folder = clean_for_folder_name(product_name)
product_name_cleaned_file = clean_for_file_name(product_name)
```

The product name is cleaned using the `clean_for_folder_name` and `clean_for_file_name` functions to ensure it is suitable for use as both a folder name and a file name.

**11\. Creating Nested Folders**

```python
nested_folder = create_nested_folders("westerndressforwoman", product_name_cleaned_folder)
```

A nested folder is created using the cleaned product name as the folder name within the "westerndressforwoman" directory.

**12\. Downloading and Saving Images**

```python
pythonCopy codeimage_element = card.find("img", class_="_2r_T1I")

if image_element:
    img_url = image_element.get("src")

    try:
        img_data = requests.get(img_url, timeout=10).content
        img_name = os.path.join(nested_folder, f"{product_name_cleaned_file}.jpg")
        with open(img_name, "wb") as img_file:
            img_file.write(img_data)
        print(f"Downloaded image for {product_name_cleaned_folder}")
    except requests.exceptions.RequestException as e:
        print(f"Error downloading image for {product_name_cleaned_folder}: {e}")
```

This code finds the image element within each product card, extracts the image URL, and attempts to download the image using `requests`. If successful, the image is saved within the nested folder with the cleaned product name as the file name.

**13\. Introducing Delays**

```python
time.sleep(1)
```

To avoid overwhelming the server and to be a considerate web scraper, a one-second delay is introduced between requests.

**14\. Moving to the Next Page**

```python
page_num += 1
```

Finally, after processing all product cards on the current page, the loop moves on to the next page of search results.

**👉👉👉Here is the completed code🎉**

```python
import os
import requests
from bs4 import BeautifulSoup
import time

def create_nested_folders(path, *folder_names):
    folder_path = os.path.join(path, *folder_names)
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
    return folder_path

# Define the function to clean text for folder names
def clean_for_folder_name(text):
    # Clean the text for folder names
    return "".join(c for c in text if c.isalnum() or c in (' ', '-', '_'))

# Define the function to clean text for file names
def clean_for_file_name(text):
    # Clean the text for file names
    return "".join(c for c in text if c.isalnum() or c in (' ', '-', '_', '.'))

def scrape_flipkart_images(search_query, starting_page, ending_page):
    # Create the 'flipimg' folder if it doesn't exist
    if not os.path.exists("westerndressforwoman"):
        os.makedirs("westerndressforwoman")

    page_num = starting_page

    while page_num <= ending_page:
        page_url = f"https://www.flipkart.com/search?q={search_query}&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page={page_num}"
        r = requests.get(page_url)
        soup = BeautifulSoup(r.text, "html.parser")

        product_cards = soup.find_all("div", class_="_1AtVbE")

        if not product_cards:
            break

        for card in product_cards:
            product_name = card.find("a", class_="IRpwTa")
            if not product_name:
                continue

            product_name = product_name.text

            # Clean the product name for use as a folder name and a file name
            product_name_cleaned_folder = clean_for_folder_name(product_name)
            product_name_cleaned_file = clean_for_file_name(product_name)

            # Create a nested folder for each product if it doesn't exist
            nested_folder = create_nested_folders("westerndressforwoman", product_name_cleaned_folder)

            # Find the images associated with the product using the specified class names
            image_element = card.find("img", class_="_2r_T1I")
            
            if image_element:
                img_url = image_element.get("src")
                
                try:
                    img_data = requests.get(img_url, timeout=10).content  # Set a timeout
                    img_name = os.path.join(nested_folder, f"{product_name_cleaned_file}.jpg")
                    with open(img_name, "wb") as img_file:
                        img_file.write(img_data)
                    print(f"Downloaded image for {product_name_cleaned_folder}")
                    print(img_url)
                except requests.exceptions.RequestException as e:
                    print(f"Error downloading image for {product_name_cleaned_folder}: {e}")
                except FileNotFoundError as e:
                    print(f"FileNotFoundError for {product_name_cleaned_folder}: {e}")
                
                # Introduce a delay to avoid overwhelming the server
                time.sleep(1)  # 1-second delay between requests

        page_num += 1  # Move to the next page

    print(f"Images for {search_query} have been scraped and saved successfully.")

# Example usage:
search_query = input("Enter the search query (e.g., western dress for woman): ")
starting_page = int(input("Enter the starting page index: "))
ending_page = int(input("Enter the ending page index: "))

scrape_flipkart_images(search_query, starting_page, ending_page)
```

![GIFs Thumbs up Friends tv No problem GIF](https://i.gifer.com/origin/a3/a3fc46493ff362be2b616d9db1fa5498_w200.gif align="center")

**Once the loop completes, the code prints a message indicating that the images for the specified search query have been successfully scraped and saved.**

This script allows you to scrape images from Flipkart based on your search query and desired range of pages. It's a useful tool for collecting data for various purposes, such as research or building datasets.

# **🎯 Wrap Up and Stay Connected!**

**Conclusion: You're a Web Scraping Pro!**

***Congratulations!*** You've successfully scraped data and images from Flipkart using Python. **Now, you have a valuable dataset to analyze or simply enjoy your shopping journey even more.**

![GIFs Thumbs up Nice Good job GIF](https://i.gifer.com/origin/b9/b931c61ff9b4cacdd355654be8df1b2b_w200.gif align="center")

Feel free to modify the code for your projects and explore the world of web scraping further. Remember, with great power comes great responsibility, so always respect websites' terms of service and scraping etiquette.

**Now, you have the skills to extract data from your favorite websites and uncover hidden treasures on the web. If you found this guide helpful, don't forget to like and share my blog. Feel free to leave comments and questions Happy scraping!**

![GIF bye, reaction, jimmy fallon, best animated GIFs submission, free download ](https://i.gifer.com/origin/23/23cd286d378a5d50597311575627246c_w200.gif align="center")