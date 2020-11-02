const express = require("express");
const Router = express.Router();
const conn = require("../connection");

var path = require("path");
const { response } = require("express");
const { endTransaction } = require("../connection");


//calling root folder from server.js by app.use("/profile", PeopleRoutes);
Router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+'/../index1.html'));
})

/////question 7
Router.post("/room_num_range", (req,res)=>{
    var r1 = req.body.Value1;
    var r2 = req.body.Value2;
    conn.query(`select * from names where room between ${r1} and ${r2}`, (err, rows, fields)=>{
    console.log(rows);
        if (!err) { 
            console.log(rows);     
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})
/////question 8
Router.post("/name_pic_id", (req,res)=>{
    var r1 = req.body.Value1;
    var r2 = req.body.Value2;
    console.log(r1);
    console.log(r2);
    conn.query(`update names set name=${r1} where id = ${r2}`, (err, rows, fields)=>{
    console.log(rows);
        if (!err) { 
            console.log(rows);     
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


Router.post("/name_pic_room", (req,res)=>{
    var r1 = req.body.Value1;
    var r2 = req.body.Value2;
    console.log(r1);
    console.log(r2);
    conn.query(`update names set picture=${r1} where room = ${r2}`, (err, rows, fields)=>{
    console.log(rows);
        if (!err) { 
            console.log(rows);     
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})




module.exports = Router;