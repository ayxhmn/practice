import re

text = "Name: Phonk, Aura: 99999"
match = re.search(r"Name: (\w+), Age: (\d+)", text)
print(match.group(1))  # John
print(match.group(2))  # 30
print(match)