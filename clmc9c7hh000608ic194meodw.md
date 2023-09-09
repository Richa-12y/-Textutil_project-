---
title: "Mastering Web Scraping with Python and BeautifulSoup: A Beginner's Guide"
datePublished: Sat Sep 09 2023 16:45:37 GMT+0000 (Coordinated Universal Time)
cuid: clmc9c7hh000608ic194meodw
slug: mastering-web-scraping-with-python-and-beautifulsoup-a-beginners-guide
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1694271905487/0f5e22a8-96e7-4d1a-b993-661d94928255.png
tags: webdevelopment, python, web-development, beautifulsoup

---

Hey coders👩‍💻👨‍💻! It's been a few months since I last posted on this blog, but I'm back with an exciting topic that I've been diving into recently: <mark>web scraping</mark>.

If you're wondering what web scraping is and how you can use <mark>Python and BeautifulSoup (often referred to as BS4) to get data from websites</mark>, you're in the right place.

![So Lets Get Started Lets Do This GIF - So Lets Get Started Lets Do This Lets Do It GIFs](https://media.tenor.com/5G5_VEoEAiAAAAAC/so-lets-get-started-lets-do-this.gif align="center")

## **🐱‍👤What is Web Scraping?**

**Web scraping is the process of automatically extracting data from websites.** This data can include <mark>text, images, tables, and more. Imagine being able to gather news headlines, product prices, weather forecasts</mark>, or any other information from the web without manually copying and pasting.

## **🐱‍🏍Prerequisites**

Before we dive into web scraping with Python and BeautifulSoup, you'll need a few things:

1. **<mark>Python Installed</mark>**<mark>:</mark> If you don't have Python installed on your computer, download it from the official website [https://www.python.org/downloads/](https://www.python.org/downloads/) and follow the installation instructions.
    
2. **<mark>BeautifulSoup (BS4)</mark>**: This Python library makes web scraping easy. You can install it using `pip`:
    
    `pip install beautifulsoup4`
    
    You can find the official documentation for BeautifulSoup (BS4) on the following website:
    
    [https://www.crummy.com/software/BeautifulSoup/bs4/doc/](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
    
    This documentation provides detailed information about how to use BeautifulSoup for web scraping and parsing HTML and XML documents. It includes examples, explanations of various methods and functions and best practices for web scraping. It's an excellent resource to accompany your learning journey.
    
3. **<mark>HTML Basics</mark>**: A basic understanding of HTML structure will be helpful. Don't worry; you don't need to be an expert. Knowing the difference between tags, attributes, and elements will suffice.  
    
    ## **<sup>✨</sup>Getting Started with Web Scraping**
    
    ![Friends | Apartment Bet (shown) The high-stakes trivia game played during season 4, when Monica and Rachel's complete lack of knowledge of Chandler's profession (see ''T'') cost](https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2014%2F05%2Ffriends-a-apartment-bet_0.jpg&q=60 align="center")
    

## **Getting Started with Web Scraping**

### **1\. Choose a Website to Scrape**

For this beginner's guide, let's pick a simple website to scrape. I'll use a hypothetical website that lists information about books. We'll extract book titles, authors, and prices.

### **2\. Inspect the Web Page**

Before scraping, it's crucial to understand the structure of the web page you want to extract data from. Right-click on the web page and select "Inspect" (or press `Ctrl+Shift+I` or `Cmd+Option+I` on Mac) to open the browser's Developer Tools. This will show you the HTML source code of the page.

### **3\. Use BeautifulSoup to Parse HTML**

Here's where BeautifulSoup comes into play. We'll use it to parse the HTML and extract the data we need. First, import BeautifulSoup in your Python script:

```python
from bs4 import BeautifulSoup
```

### **4\. Send an HTTP Request**

To fetch the web page's HTML content, you can use the `requests` library. If you don't have it installed, you can install it with `pip`:

```python
pip install requests

```

Let's understand this with a practical example. We'll work on a small project together so that you can grasp the concepts more effectively.

![TV gif. Zooey Deschanel as Jessica Day on New Girl sits in front of her laptop at a table. She looks at the screen and raises her fists up in excitement.](https://media0.giphy.com/media/l3V0dy1zzyjbYTQQM/200w.gif?cid=ecf05e47fygff2nz4q7ow3pwjxkaw5hsfc7b38x3ribfxww7&ep=v1_gifs_search&rid=200w.gif&ct=g align="center")

```python
# Import necessary libraries
from bs4 import BeautifulSoup
import requests

# Define the URL of the website containing the movie transcript
website = 'https://subslikescript.com/movie/Titanic-120338'

# Send an HTTP GET request to the website and store the response
result = requests.get(website)

# Get the HTML content of the website
content = result.text

# Create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(content, 'lxml')

# Uncomment the line below to see the nicely formatted HTML (for debugging purposes)
# print(soup.prettify())

# Locate the HTML element that contains the title and transcript of the movie
box = soup.find('article', class_='main-article')

# Locate the title of the movie (it's within an <h1> tag)
title = box.find('h1').get_text()

# Locate and extract the transcript of the movie (it's within a <div> with class 'full-script')
transcript = box.find('div', class_='full-script').get_text(strip=True, separator=' ')

# Export the extracted data (transcript) to a text file with the same name as the movie title
with open(f'{title}.txt', 'w', encoding='utf-8') as file:
    file.write(transcript)

```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694276254857/7e3981e6-c424-44ac-a3a4-3a8fed2285e0.png align="center")

No matter what name you give to the file, if you run the code in the terminal, it will create a text file with the <mark>Titanic movie script</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694276355674/fdd0c42d-df07-4791-acd4-445c837642d9.png align="center")

```python
from bs4 import BeautifulSoup
import requests

#####################################################
# Extracting the links of multiple movie transcripts
#####################################################

# How To Get The HTML
root = 'https://subslikescript.com'  # this is the homepage of the website
website = f'{root}/movies'  # concatenating the homepage with the movies section
result = requests.get(website)
content = result.text
soup = BeautifulSoup(content, 'lxml')
# print(soup.prettify())  # prints the HTML of the website

# Locate the box that contains a list of movies
box = soup.find('article', class_='main-article')

# Store each link in "links" list (href doesn't consider root aka "homepage", so we have to concatenate it later)
links = []
for link in box.find_all('a', href=True):  # find_all returns a list
    links.append(link['href'])

#################################################
# Extracting the movie transcript
#################################################

# Loop through the "links" list and sending a request to each link
for link in links:
    result = requests.get(f'{root}/{link}')
    content = result.text
    soup = BeautifulSoup(content, 'lxml')

    # Locate the box that contains title and transcript
    box = soup.find('article', class_='main-article')
    # Locate title and transcript
    title = box.find('h1').get_text()
    title = ''.join(title.split('/'))
    transcript = box.find('div', class_='full-script').get_text(strip=True, separator=' ')

    # Exporting data in a text file with the "title" name
    with open(f'{title}.txt', 'w', encoding='utf-8') as file:
         file.write(transcript)
```

In this code:

**Step 1 (Extracting Links to Multiple Movie Transcripts):**

1. We start by defining the root URL of the website and creating a URL for the movies section by appending it to the root URL.
    
2. We send an HTTP GET request to the movies section and retrieve the HTML content.
    
3. A BeautifulSoup object is created to parse the HTML content.
    
4. We locate the section that contains a list of movie links within the parsed HTML.
    
5. We store each movie's link in the "links" list, making sure to add the root URL to each link since href attributes don't include the root.
    

**Step 2 (Extracting Movie Transcripts):**

1. We loop through the "links" list and send an HTTP GET request to each movie's transcript link, creating the complete URL by combining the root URL with the movie's transcript link.
    
2. For each movie, we retrieve the HTML content of the transcript page, create a new BeautifulSoup object, and locate the section that contains the title and transcript.
    
3. We extract the title of the movie, remove any forward slashes from it (as they can't be used in file names), and locate and extract the transcript of the movie.
    
4. Finally, we export the extracted data (transcript) into a text file, naming the file after the movie's title.
    

This code automates the process of scraping and saving movie transcripts from a website, generating separate text files for each movie's transcript.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694276889401/5f48d164-2702-4c82-9672-3e1006c99d2d.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694276907712/b5489a8f-4787-447c-ba8d-412cde615ee7.png align="center")

```python
# Import the necessary libraries
from bs4 import BeautifulSoup
import requests

#####################################################
# Step 1: Extracting Links from Pagination Bar
#####################################################

# Define the root URL of the website
root = 'https://subslikescript.com'  # This is the homepage of the website

# Create the URL for the movies "letter-X" section (you can choose any section)
website = f'{root}/movies_letter-X'

# Send an HTTP GET request to the movies "letter-X" section
result = requests.get(website)

# Get the HTML content of the page
content = result.text

# Create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(content, 'lxml')

# Locate the box that contains the pagination bar
pagination = soup.find('ul', class_='pagination')

# Find all the pages in the pagination bar
pages = pagination.find_all('li', class_='page-item')

# Get the number of the last page (this represents the number of pages in the "letter-X" section)
last_page = pages[-2].text

##################################################################################
# Step 2: Extracting Links to Movie Transcripts from Multiple Pages
##################################################################################

# Loop through all the pages and send a request to each page
for page in range(1, int(last_page) + 1):
    # Create the URL for the current page by adding the page number as a query parameter
    page_url = f'{website}?page={page}'

    # Send an HTTP GET request to the current page
    result = requests.get(page_url)

    # Get the HTML content of the current page
    content = result.text

    # Create a BeautifulSoup object to parse the HTML content of the current page
    soup = BeautifulSoup(content, 'lxml')

    # Locate the box that contains a list of movies
    box = soup.find('article', class_='main-article')

    # Store each movie link in the "links" list (href doesn't include the root URL, so we'll add it later)
    links = []
    for link in box.find_all('a', href=True):  # find_all returns a list
        links.append(link['href'])

    #################################################
    # Step 3: Extracting Movie Transcripts
    #################################################

    for link in links:
        try:
            # Create the complete URL for the current movie by combining the root URL with the movie's link
            movie_url = f'{root}/{link}'

            # Send an HTTP GET request to the current movie's transcript page
            result = requests.get(movie_url)

            # Get the HTML content of the movie's transcript page
            content = result.text

            # Create a BeautifulSoup object to parse the HTML content
            soup = BeautifulSoup(content, 'lxml')

            # Locate the box that contains the title and transcript
            box = soup.find('article', class_='main-article')

            # Locate the title of the movie
            title = box.find('h1').get_text()

            # Remove any forward slashes from the title (as they can't be used in file names)
            title = ''.join(title.split('/'))

            # Locate and extract the transcript of the movie
            transcript = box.find('div', class_='full-script').get_text(strip=True, separator=' ')

            # Export the data into a text file with the title as the file name
            with open(f'{title}.txt', 'w') as file:
                file.write(transcript)
        except:
            print('------ Link not working -------')
            print(link)

```

In this code:

**Step 1 (Extracting Links from Pagination Bar):**

1. We start by defining the root URL of the website and create the URL for a specific section (in this case, movies starting with the letter "X").
    
2. An HTTP GET request is sent to the page, and its HTML content is retrieved.
    
3. We create a BeautifulSoup object to parse the HTML content and locate the pagination bar.
    
4. We find all the pages in the pagination bar and determine the number of the last page, which represents the total number of pages in the "letter-X" section.
    

**Step 2 (Extracting Links to Movie Transcripts from Multiple Pages):**

1. We loop through all the pages (from 1 to the last page) and send an HTTP GET request to each page, appending the page number as a query parameter.
    
2. For each page, we retrieve its HTML content, create a BeautifulSoup object, and locate the box containing a list of movies.
    
3. We store each movie's link in the "links" list, making sure to add the root URL to each link since href attributes don't include the root.
    

**Step 3 (Extracting Movie Transcripts):**

1. For each movie link in the "links" list, we send an HTTP GET request to the movie's transcript page, create a BeautifulSoup object, and locate the title and transcript.
    
2. We extract the title of the movie, remove any forward slashes from it (as they can't be used in file names), and locate and extract the transcript of the movie.
    
3. Finally, we export the extracted data (transcript) into a text file, naming the file after the movie's title. If any errors occur during this process, we print a message indicating that the link is not working.
    

This code allows you to scrape movie transcripts from multiple pages with pagination, ensuring that you don't miss any movies listed on the website.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694277435012/4debe2cd-26ce-4b53-a2f1-dc5880c6c6d1.png align="center")

# 🎯 Wrap Up and Stay Connected!

**<mark>Congratulations 🐱‍💻 on completing this beginner's guide to web scraping with Python and BeautifulSoup!</mark>**

![Reality TV gif. Supermodel Heidi Klum excitedly claps and dances in a cloud of confetti on America's Got Talent. ](https://media0.giphy.com/media/artj92V8o75VPL7AeQ/giphy.gif?cid=ecf05e47fygff2nz4q7ow3pwjxkaw5hsfc7b38x3ribfxww7&ep=v1_gifs_search&rid=giphy.gif&ct=g align="center")

You've learned how to extract valuable data from websites, and the possibilities are endless. You can save the extracted data to files, databases, or use it for in-depth analysis, depending on your project's requirements.

**But remember, this is just the beginning of your web scraping journey. There are more advanced topics to explore, such as handling pagination, dealing with dynamic websites, and implementing techniques to avoid being banned by websites—so stay curious and keep learning!**

I*'m thrilled to be back on the blogging scene, and I'm committed to sharing valuable knowledge and insights with you. If you found this guide helpful, don't forget to like and share my blog. Feel free to leave comments and questions; I'll be here to assist you on your web scraping adventure.*

And remember, stay tuned for weekly web scraping knowledge-sharing right here! Together, we'll dive deeper into the world of web scraping and uncover exciting opportunities for data acquisition and analysis. **Happy scraping, and see you in the next blog post! 🚀📚**

![Go Away Goodbye GIF](https://media1.giphy.com/media/YorwDAH66ln3O/200w.gif?cid=ecf05e475bpl2o2vtnvhlmg5kfc4e94pqjwmbwp5t8bt66mq&ep=v1_gifs_search&rid=200w.gif&ct=g align="center")