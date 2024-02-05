let server = require("http");
let fs = require('fs');
let multer = require('multer');
const path = require('path');

let http = server.createServer(handleRequest)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage }).single('myImage');

function handleRequest(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end("This is Home Page");
    } else if (req.url == '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is About Page');
        res.end();
    } else if (req.url == '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('This is Contact Page');
        res.end();
    } else if (req.url == '/file-write') {
        fs.writeFile('demo.txt', 'hello world', function(error) {
            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("Something went Wrong");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("File Create Successfully");
            }
        });
    } else if (req.method === 'POST' && req.url === '/uploads') {
        // Handle file upload
        upload(req, res, (error) => {
            if (error) {
                console.error('File uploading Failed:', error.message);
                return res.end('File uploading Failed');
            } else {
                res.end('File Uploaded Successfully')
            }
        });
    }
}
http.listen(5500, function() {
    console.log('Server is Running....')
});