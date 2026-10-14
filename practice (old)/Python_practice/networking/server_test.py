import socket
import threading

# Create the server socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 12345))
server_socket.listen(1)
server_socket.settimeout(1)  # Set timeout to allow periodic checks
print("Server is listening...")

stop_flag = False  # Flag to indicate when to stop the server

def server():
    global stop_flag
    try:
        while not stop_flag:
            try:
                conn, addr = server_socket.accept()
                print(f"Connected by {addr}")
                data = conn.recv(1024)
                conn.sendall(b'Hello, Client!!!')
                conn.close()
            except socket.timeout:
                continue  # Keep checking until stop_flag is True
    except OSError:
        pass  # Handle socket closure

    print("Server stopped.")

def stop_server():
    global stop_flag
    input("Press Enter to stop the server...\n")
    stop_flag = True
    server_socket.close()  # Closing socket will cause accept() to raise OSError

# Run the server in a separate thread
server_thread = threading.Thread(target=server, daemon=True)
server_thread.start()

# Wait for user to press Enter, then close the server
stop_server()