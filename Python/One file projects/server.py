import http.server
import socketserver
import socket
import os

# Define the port you want to use
PORT = 8080

# Get the current working directory
directory = os.getcwd()

# Function to get the local IP address
def get_local_ip():
    hostname = socket.gethostname()
    return socket.gethostbyname(hostname)

# Set up the HTTP server
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=directory, **kwargs)

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        ip_address = get_local_ip()
        print(f"Serving files from {directory} at http://{ip_address}:{PORT}")
        print("Press Ctrl+C to stop the server.")
        httpd.serve_forever()
except Exception as e:
    print(f"Error: {e}")