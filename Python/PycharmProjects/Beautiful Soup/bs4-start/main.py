
# local HTML file scraping

from bs4 import BeautifulSoup

with open("website.html", encoding="utf-8") as file:
    contents = file.read()

soup = BeautifulSoup(contents, "html.parser")
print(soup.title)
print(soup.title.name)
print(soup.title.string)
print(soup)                     # this prints the entire html page
print(soup.prettify())          # this prints the entire html page formatted properly
print(soup.a)                   # brings the first anchor tag (href link)
print(soup.li)                    # brings the first list
print(soup.p)                     # brings the first paragraph


# searching by tag name

all_anchor_tags = soup.find_all(name="a")           # returns all elements with that tag name, returns a list
print(all_anchor_tags)

for tag in all_anchor_tags:
    print(tag.getText())                              # method to return text of tags
    print(tag.get("href"))                            # method to return by attribute "href" which is all the links


# searching by attribute name

heading = soup.find(name="h1", id="name")
print(heading)


# searching by class attribute
section_heading = soup.find(name="h3", class_="heading")
print(section_heading)                          # get the whole tag
print(section_heading.getText())                # get the text of the tag
print(section_heading.name)                     # get tag name
print(section_heading.get("class"))             # get the value of the attribute class


# searching using CSS selector tags

company_url = soup.select()                          # returns the all matching items, returns as list
company_url = soup.select_one(selector="p a")        # returns the first matching item, it's looking for p a (paragraph that has anchor in it)
id_name = soup.select_one(selector="#name")          # here it's looking for an id called name
print(company_url)

headings = soup.select(selector=".heading")          # here it's looking all classes called heading, returns a list
print(headings)


#------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# online html file scraping

from bs4 import BeautifulSoup
import requests

response = requests.get("https://news.ycombinator.com/news")
yc_web_page = response.text

soup = BeautifulSoup(yc_web_page, "html.parser")

#----------------------------------------------------------------------

# get a single element matching the criteria

article_tag = soup.find(name="span", class_="titleline")             #bringing a span tag by its class

article_text = article_tag.getText()
print(article_text)

article_link = article_tag.a.get("href")
print(article_link)

article_upvote = soup.find(name="span", class_="score", id="score_46242871")
print(article_upvote.text)


#----------------------------------------------------------------------

# get all elements matching the criteria

articles = soup.find_all(name="span", class_="titleline")
article_texts = []
article_links = []
for article in articles:
    text = article.getText()
    link = article.a.get("href")

    article_texts.append(text)
    article_links.append(link)


article_upvote = [int(score.text.split(" ")[0]) for score in soup.find_all(name="span", class_="score")]        #find all scores by tag name "span" with class "score", loop though it and apply int(score.text.split(" ")[0]), get only text by using .text, split ex. '132 score' by space using .split[' '], you get a list of ['132', 'score'], take only first item by using [0], then convert it to integer by using int()

print(article_texts)
print(article_links)
print(article_upvote)

#----------------------------------------------------------------------

# find the article with the highest upvotes and prints its text and link

largest_number = max(article_upvote)

print(article_texts[article_upvote.index(largest_number)])
print(article_links[article_upvote.index(largest_number)])