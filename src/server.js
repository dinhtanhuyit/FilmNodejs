const express = require("express");
const mysql = require("mysql2");
require("dotenv").config(); // ctr s để thay đổi chương trình 

const path = require("path")
// import connection 
const connection = require("./config/database");
// tìm đến config và vào file config
const configViewEngine = require("./config/viewEngine");

// tìm đến thưu mục routes và file web điều hướng các trang  
const webRoutes = require("./routes/web")
console.log("check env" ,process.env);
const app = express();
const port = process.env.port || 8080;
const hostname = process.env.HOST_NAME;
// truyền express
configViewEngine(app);
// tạo phiên bản cho api
app.use("/version1", webRoutes);
app.use("/version2", webRoutes);


 
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})
