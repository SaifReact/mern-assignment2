In this assignment, you will build a server using NodeJs. Your server should listen on 5500.

Requirements:
Your file server should meet the following requirements:
1. It should use the http module to create an HTTP server.
2. It should listen on port 5500.
3. It should log a message to the console when it starts listening on port 5500.
4. If you request this url "/" then the respone is "This is Home Page".
5. If you request this url "/about" then the respone is "This is About Page".
6. If you request this url "/contact" then the respone is "This is Contact Page".
7. If you request this url "/file-write" then fs.writeFile() method will create a file "demo.text" and write the text "hello world" in this file.
8. Show how to upload a file using multer.
9. And of course you need to end the server respone using res.end()
