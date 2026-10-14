import socket

hostname1 = "www.github.com"
hostname2 = "www.youtube.com"
ip_address1 = socket.gethostbyname(hostname1)
ip_address2 = socket.gethostbyname(hostname2)
print(f"IP Address of {hostname1}: {ip_address1}")
print(f"IP Address of {hostname2}: {ip_address2}")