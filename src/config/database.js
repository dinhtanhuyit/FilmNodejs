// import mysql
const mysql = require("mysql2");
// config connection to database
// const connection = mysql.createConnection({
//     host : process.env.DB_HOST,
//     port : process.env.DB_PORT,
//     user: process.env.DB_USER, 
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
// })

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit:0
})
module.exports = connection;