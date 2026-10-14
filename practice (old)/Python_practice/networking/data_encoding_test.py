import json

data = {"name": "Konny Bhai", "age": 20}
encoded_data = json.dumps(data)  # Convert dict to JSON string
print(encoded_data)
print(type(encoded_data))

decoded_data = json.loads(encoded_data)  # Convert JSON string back to dict
print(decoded_data)
print(type(decoded_data))