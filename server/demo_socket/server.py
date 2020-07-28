#!/usr/bin/env python3

import socket

HOST = '127.0.0.1'
PORT = 65432

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.bind((HOST, PORT))
s.listen()

conn, addr = s.accept()

print('Connected by', addr)
while True:
    data = conn.recv(1024)
    print('Received', data)
    if not data:
        break
    
    conn.sendall(b'This is server')