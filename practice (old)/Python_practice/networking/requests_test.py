import urllib.request

with urllib.request.urlopen("http://www.github.com/ayxhmn") as response:
    html = response.read().decode('utf-8')
    # print(html.decode('utf-8'))  # Decodes and prints HTML content

with open("output.html", "w", encoding="utf-8") as file:
    file.write(html)


# import requests

# response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
# print(response.json())  # Prints JSON response from the API