const app = require("../app");
const express = require("express");
//instantiate router 
const router = express.Router(); 

const staticController = require("../controllers/staticController");

//index page routing
router.get("/", staticController.index); 

//about page routing
router.get("/about", staticController.about);


module.exports = router;