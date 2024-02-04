exports.homePage =(req, res)=>{
    res.end('This is Home Page');
}

exports.aboutPage =(req, res)=>{
    res.end('This is About Page');
}

exports.contactPage =(req, res)=>{
    res.end('This is Contact Page');
}

const fs = require('fs');

exports.fileWrite =(req, res)=>{
    fs.writeFile('demo.text','hello world', function(err){
        if(err){
            res.end('File Create Failed');
        } else {
            res.end('File Create Success')
        }
    })
}

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage }).single('myImage');

  exports.uploadImage =(req, res)=>{

    upload(req, res, function(err){
        if(err){
            res.end('File Upload Failed');
        } else {
            res.end('File Upload Success');
        }
    })
}