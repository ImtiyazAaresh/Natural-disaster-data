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
//------------------------------------------------------------------------------------------------------------//
//calling function to fetch largest 5 earth quakes
//GIVES LARGEST N QUAKES--PASS N
Router.post("/maxnumber", (req,res)=>{
    var value = req.body.Value;
    conn.query(`Select * from MCP95677.NEWEARTH where type='earthquake' and mag is not null order by mag desc limit ${value}`, (err, rows, fields)=>{
    console.log(rows);
        if (!err) {      
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})
//------------------------------------------------------------------------------------------------------------//
//calling function to calculate quakes within range
//GIVES COORDINATES AND RANGE IN KM--GIVES EARTHQUAKES IN THAT RANGE
Router.post("/lan_lon_range", (req,res)=>{
    var lat = req.body.latitude;
    var lon = req.body.longitude;
    var range = req.body.Range;
    conn.query(`SELECT id,latitude,longitude,MAG,(6371*acos(cos(radians(${lat}))* cos(radians(latitude))* cos(radians(longitude) - radians(${lon}))+ sin(radians(${lat}))*sin(radians(latitude)))) AS distance FROM MCP95677.NEWEARTH where (6371*acos(cos(radians(${lat}))* cos(radians(latitude))* cos(radians(longitude) - radians(${lon}))+ sin(radians(${lat}))*sin(radians(latitude)))) < ${range} order by mag desc;`, (err, rows, fields)=>{
    if (!err) {
        console.log(rows);
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})
//------------------------------------------------------------------------------------------------------------//
//calling function to calculate date range
// GIVE DATES AND MAG--SHOWS DATA BETWEEN THAT DATES
Router.post("/daterangecal", (req,res)=>{
    var dat1 = req.body.Date1;
    var dat2 = req.body.Date2;
    var mag = req.body.Mag;
    console.log(dat1 +" hello "+ dat2);
    conn.query(`select * from MCP95677.NEWEARTH where mag<${mag} and VARCHAR_FORMAT(time,'YYYY-MM-DD') between '${dat1}' and '${dat2}'`, (err, rows, fields)=>{
    if (!err) {
        console.log(rows);
            res.json(rows);
        } else {
            console.log(err);
        }
    })
})
//------------------------------------------------------------------------------------------------------------//
//calling function to calculate date range
// GIVE DATES AND MAG--SHOWS DATA BETWEEN THAT DATES
Router.post("/count_of_mag", (req,res)=>{
    var dat = req.body.Day;
    console.log(dat)
    conn.query(`SELECT count(RANGE) as COUNT, range FROM  (select t.*, (case when t.mag between 0 and 1  then '0-1' when t.mag between 1 and 2 then '1-2' when t.mag between 2 and 3 then '2-3' when t.mag between 3 and 4 then '3-4' when t.mag between 4 and 5 then '4-5' when t.mag between 5 and 6 then '5-6' when t.mag between 6 and 7 then '6-7'  end) as range from earth t where VARCHAR_FORMAT(time,'YYYY-MM-DD') >VARCHAR_FORMAT(sysdate-${dat},'YYYY-MM-DD')) group by range;`, (err, rows, fields)=>{
        if (!err) {
            console.log(rows);
            //res.send(rows);
                res.json(rows);
            } else {
                console.log(err);
            }
    })
})
//------------------------------------------------------------------------------------------------------------//
//GIVE LOCATIOIN 1 and LOCATION 2 DETAILS AND RANGE
Router.post("/lac_lon_mac_cal", (req,res)=>{
    var loc_lat1 = req.body.lat1;
    var loc_lon1 = req.body.lon1;
    var loc_lat2 = req.body.lat2;
    var loc_lon2 = req.body.lon2;
    var range = req.body.ran;
    conn.query(`SELECT count(distinct l1.id),count(distinct l2.id) FROM MCP95677.NEWEARTH l1,MCP95677.NEWEARTH l2 where 
    (6371*acos(cos(radians(${loc_lat1}))* 
    cos(radians(l1.latitude))* 
    cos(radians(l1.longitude) - 
    radians(${loc_lon1}))+ 
    sin(radians(${loc_lat1}))*
    sin(radians(l1.latitude)))) < ${range}
    and (6371*acos(cos(radians(${loc_lat2}))* 
    cos(radians(l2.latitude))* 
    cos(radians(l2.longitude) - 
    radians(${loc_lon2}))+ 
    sin(radians(${loc_lat2}))*
    sin(radians(l2.latitude)))) < ${range};`, (err, rows, fields)=>{
        if (!err) {
            console.log(rows);
            //res.send(rows);
                res.json(rows);
            } else {
                console.log(err);
            }
    })
})


module.exports = Router;