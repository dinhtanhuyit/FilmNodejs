const { render } = require("ejs");
const connection = require("../config/database")

// const getHome = (req,res) => {
//     let user = [];
//     connection.query("SELECT *FROM user", function(err, resault){
//         console.log("resault :", resault);
//         user = resault;
//         console.log("resault", resault)
//         res.send(JSON.stringify(user));

//      })

// }

const getHome = (req,res) =>{
    return res.render("home.ejs")
}

const getABC = (req,res) =>{
    return res.render("home.ejs")

}
module.exports = {
    getHome, getABC
}