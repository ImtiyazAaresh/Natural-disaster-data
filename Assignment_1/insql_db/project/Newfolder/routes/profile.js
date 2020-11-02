const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
var path = require("path");


//calling root folder from server.js by app.use("/profile", PeopleRoutes);
Router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+'/../index1.html'));
})

//calling search by name,phone num etc and display image 
Router.post("/search", (req,res)=>{
    var name = req.body.Name;
    var value = req.body.Value;
    mysqlConnection.query("Select * from db.details where " + name + " = '" + value + "'", (err, rows, fields)=>{
        if (!err) {
        
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

//calling display keyword by name
Router.post("/searchnamekey", (req,res)=>{
    var name = req.body.Name;
    var value = req.body.Value;
    mysqlConnection.query("Select * from db.details where name = '" + value + "'", (err, rows, fields)=>{
        if (!err) {
        
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

//calling search by salary and display pictures
Router.post("/searchsal", (req,res)=>{
    var name = req.body.Name;
    var value = req.body.Value;
    if(name == "salary_less" )
    {
    mysqlConnection.query("Select * from db.details where salary < '" + value + "'", (err, rows, fields)=>{
        if (!err) {
        
            res.json(rows);
        } else {
            console.log(err);
        }
    })
}
else
{
    mysqlConnection.query("Select * from db.details where salary >= '" + value + "'", (err, rows, fields)=>{
        if (!err) {
        
            res.json(rows);
        } else {
            console.log(err);
        }
    })
    
}
})

//calling search name and delete
Router.post("/delete", (req,res)=>{
    var value = req.body.Value;
    mysqlConnection.query("delete from db.details where name = '" + value + "'", (err, rows, fields)=>{
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})

//calling change picture for name
Router.post("/updatephoto", (req,res)=>{
    var name = req.body.Name;
    var picture = req.body.Value;
    mysqlConnection.query("update db.details set PICTURE = '" + picture + "' where name = '" + name + "' ", (err, rows, fields)=>{
        if (!err) {
        
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


//calling replace keyword for name
Router.post("/replacekeyword", (req,res)=>{
    var name = req.body.Name;
    var keyword = req.body.Value;
    mysqlConnection.query("update db.details set KEYWORK = '" + keyword + "' where name = '" + name + "' ", (err, rows, fields)=>{
        if (!err) {
        
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})


module.exports = Router;