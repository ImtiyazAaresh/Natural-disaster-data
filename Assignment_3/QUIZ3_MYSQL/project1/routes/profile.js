const express = require("express");
const Router = express.Router();
const conn = require("../connection");
const lodash = require("lodash");
//random value generation
const random = require('random');
//redis - ref : https://redislabs.com/get-started-with-redis/
var redis = require("redis");
var redisHost = 'redis-13674.c56.east-us.azure.cloud.redislabs.com';
var redisPort = process.argv[3] || 13674;
var redisAuth = 'IDJlIpi5VhmHl9kQ6MMVlMpycs1Q8Nui';
var client = redis.createClient ({
    port : redisPort,
    host : redisHost
    });  
    client.auth(redisAuth, function(err, response){
    if(err){
    throw err;
    }
    else{
        console.log("Connection estabished to redis");
    }
    });
                // client.flushdb( function (err, succeeded) {
                //     console.log('FLUSHED CACHE'); // will be true if successfull
                // });


    var path = require("path");
    const{Connection,Request}=require("tedious");
const { result } = require("lodash");
//calling root folder from server.js by app.use("/profile", PeopleRoutes);
    Router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+'/../home.html'));
})


// 777777777777777777777777777777777777777777777
Router.post("/retrive_redis", (req,res)=>{
    var val = req.body.Value;
    var newobj = {};
    const starttime = Date.now();
    var sql=`select year,NumberTerroristIncidents,Entity from ti where code='${val}' order by year asc;`;
    const call=new Request(sql,(err,rowCount,rows)=>{
        if (err) {
        console.error(err.message);
        }else{
         
        console.log(`${rowCount} row(s) returned`);
        console.log(rows);
        newobj["timeTaken"] = (Date.now() - starttime);
        rows.push(newobj);
        res.json(rows);
        }
        });
         
        conn.execSql(call);
});



// 88888888888888888888888888888888888888888888888
Router.post("/lat1_lat2_data", (req,res)=>{
    var lat1 = req.body.Latitude1;
    var lat2 = req.body.Latitude2;
    var newobj = {};
    const starttime = Date.now();
    var sql = `Select Entity,year,NumberTerroristIncidents from ti where year between ${lat1} and ${lat2}`;
const call=new Request(sql,(err,rowCount,rows)=>{
if (err) {
console.error(err.message);
}else{
 
// console.log(`${rowCount} row(s) returned`);
// console.log(rows);
newobj["timeTaken"] = (Date.now() - starttime);
rows.push(newobj);
res.json(rows);
}
});
 
conn.execSql(call);
});

// 999999999999999999999999999999999999999999999999
Router.post("/p1_p2_data", (req,res)=>{
    var lat1 = req.body.Latitude1;
    var lat2 = req.body.Latitude2;
    var newobj = {};
    const starttime = Date.now();
    // var sql = `Select Entity,year,NumberTerroristIncidents from ti where year between ${lat1} and ${lat2}`;
    var sql= `select count(NumberTerroristIncidents) as count,t.Entity from sp s, ti t where s.Prevalence between ${lat1} and ${lat2} and s.Code = t.Code group by t.entity,NumberTerroristIncidents`;
const call=new Request(sql,(err,rowCount,rows)=>{
if (err) {
console.error(err.message);
}else{
 
console.log(`${rowCount} row(s) returned`);
console.log(rows);
newobj["timeTaken"] = (Date.now() - starttime);
rows.push(newobj);
res.json(rows);
}
});
 
conn.execSql(call);
});


// 10 10 10 10 10 10 10 10 10 10 10 10
Router.post("/lat1_lat2_db_data", (req,res)=>{
    var tempobj;
    var lat1 = Number(req.body.Latitude1);
    var lat2 = Number(req.body.Latitude2);
    var timenew = Number(req.body.Timesn);
    const totalstarttime = Date.now();
    var i = 0;
    callsqlfun(lat1,lat2);
    function callsqlfun(val1,val2) {
    var lL = val1;
    var uL = val2;
    var newobj = {};
    var sql = `Select Entity,year,NumberTerroristIncidents from ti where year between ${lL} and ${uL}`;
   // var label = val1 + "," + val2;
    if(i==timenew){
        newobj = {};
        newobj["Totaltime"] = Date.now() - totalstarttime;
        tempobj.push(newobj);
        res.json(tempobj);
    }
    else {
    const call = new Request(sql,(err, rowCount, rows) => {
    if (err) {
    console.error(err.message);
    } else {
        tempobj = rows;
    }
    });
    call.on('requestCompleted', function () { 
        i++;
    callsqlfun(val1,val2);
    });
    conn.execSql(call);
    }
   } 
   });


   Router.post("/per_values_sql", (req,res)=>{
    var result = [];
    var lat1 = Number(req.body.Latitude1);
    var lat2 = Number(req.body.Latitude2);
    var timenew = Number(req.body.Timesn);
    const totalstarttime = Date.now();
    var i = 0;
    callsqlfun(lat1,lat2);
    function callsqlfun(val1,val2) {
    var lL = val1;
    var uL = val2;
    var newobj = {};
    var sql = `select count(NumberTerroristIncidents) as count,t.Entity from sp s, ti t where s.Prevalence between ${lL} and ${uL} and s.Code = t.Code group by t.entity,NumberTerroristIncidents`;
   // var label = val1 + "," + val2;
    if(i==timenew){
        newobj = {};
        newobj["Totaltime"] = Date.now() - totalstarttime;
        result.push(newobj);
        console.log(result);
        res.json(result);
    }
    else {
    const call = new Request(sql,(err, rowCount, rows) => {
    if (err) {
    console.error(err.message);
    } else {
        result.push(rows);
    }
    });
    call.on('requestCompleted', function () { 
        i++;
    callsqlfun(val1,val2);
    });
    conn.execSql(call);
    }
   } 
   });

// 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11

Router.post("/aaresh", (req,res)=>{
    var result = [];
    var lat1 = Number(req.body.Latitude1);
    var lat2 = Number(req.body.Latitude2);
    var timenew = Number(req.body.Timesn);
    const totalstarttime = Date.now();
    var i = 0;

    callsqlfun(lat1,lat2);
    function callsqlfun(val1,val2) {
    var lL = val1;
    var uL = val2;
    var newobj = {};
    var sql = `Select Entity,year,NumberTerroristIncidents from ti where year between ${lL} and ${uL}`;
   var label = val1 + "," + val2;
    if(i==timenew)
    {
        newobj = {};
        newobj["Totaltime"] = Date.now() - totalstarttime;
        result.push(newobj);
        res.json(result);
    }
    else
    {  
    client.get(label,(err,data) => {
     {
         if(data != null)
         {
            var op = JSON.parse(data.toString());
            i++;
            result.push(op);
            callsqlfun(val1,val2);
         }
         else{
    const call = new Request(sql,(err, rowCount, rows) => {
    if (err) {
    console.error(err.message);
    } else {
        client.set(label, JSON.stringify(rows));
        result.push(rows);
    }
    });
    call.on('requestCompleted', function () { 
        i++;
    callsqlfun(val1,val2);
    });
    conn.execSql(call);
    }
}
});
   } 
}
   });


   Router.post("/per_values_sqlc", (req,res)=>{
    var result = [];
    var lat1 = Number(req.body.Latitude1);
    var lat2 = Number(req.body.Latitude2);
    var timenew = Number(req.body.Timesn);
    const totalstarttime = Date.now();
    var i = 0;
    callsqlfun(lat1,lat2);
    function callsqlfun(val1,val2) {
    var lL = val1;
    var uL = val2;
    var newobj = {};
    var sql = `select count(NumberTerroristIncidents) as count,t.Entity from sp s, ti t where s.Prevalence between ${lL} and ${uL} and s.Code = t.Code group by t.entity,NumberTerroristIncidents`;
    var label = val1 + "," + val2;
    if(i==timenew)
    {
        newobj = {};
        newobj["Totaltime"] = Date.now() - totalstarttime;
        result.push(newobj);
        res.json(result);
    }
    else
    {  
    client.get(label,(err,data) => {
     {
         if(data != null)
         {
            var op = JSON.parse(data.toString());
            i++;
            result.push(op);
            callsqlfun(val1,val2);
         }
         else{
    const call = new Request(sql,(err, rowCount, rows) => {
    if (err) {
    console.error(err.message);
    } else {
        client.set(label, JSON.stringify(rows));
        result.push(rows);
    }
    });
    call.on('requestCompleted', function () { 
        i++;
    callsqlfun(val1,val2);
    });
    conn.execSql(call);
    }
}
});
   } 
} 
   });


module.exports = Router;
