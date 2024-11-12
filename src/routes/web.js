const express = require("express");
const { getHome, getABC } = require("../controllers/homeController");
 
const routes = express.Router();

// trả cho người một file hay gọi là xử lý logic 
routes.get("/banhang", getHome);
routes.get("/food", getABC);
module.exports = routes;