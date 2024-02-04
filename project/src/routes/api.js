const express = require('express');

const webControllers = require('../controllers/webControllers');

const router = express.Router();

router.get("/", webControllers.homePage);

router.get("/about", webControllers.aboutPage);

router.get("/contact", webControllers.contactPage);

router.get("/file-write", webControllers.fileWrite);

router.post("/uploadImage", webControllers.uploadImage);


module.exports = router;

