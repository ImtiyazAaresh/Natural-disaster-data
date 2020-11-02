const express = require("express");
const Router = express.Router();
const conn = require("../connection");
const lodash = require("lodash");
//random value generation
const random = require('random');


    var path = require("path");
    const{Connection,Request}=require("tedious");
const { result } = require("lodash");
//calling root folder from server.js by app.use("/profile", PeopleRoutes);
    Router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname+'/../home.html'));
})



// Router.post("/retrive_redis", (req,res)=>{
//     var val = req.body.Value;
//     var newobj = {};
//     const starttime = Date.now();
//     var sql=`select year,NumberTerroristIncidents,Entity from ti where code='${val}' order by year asc;`;
//     const call=new Request(sql,(err,rowCount,rows)=>{
//         if (err) {
//         console.error(err.message);
//         }else{
         
//         console.log(`${rowCount} row(s) returned`);
//         console.log(rows);
//         newobj["timeTaken"] = (Date.now() - starttime);
//         rows.push(newobj);
//         res.json(rows);
//         }
//         });
         
//         conn.execSql(call);
// });

// ----------------------------------------------table-------------------------------------------------
Router.post("/example_table", (req,res)=>{
    var fir = req.body.First;//1970
    var sec = req.body.Second;//2
    var sql=`select * from ti where year < ${fir} and NumberTerroristIncidents < ${sec} and  code is not null;`;
    const call=new Request(sql,(err,rowCount,rows)=>{
        if (err) {
        console.error(err.message);
        }else{
         
        console.log(`${rowCount} row(s) returned`);
        console.log(rows);
        res.json(rows);
        }
        });
         
        conn.execSql(call);
});


// ----------------------------------------------scatter-------------------------------------------------
Router.post("/example_graph", (req,res)=>{
    var fir = req.body.First;//1980
    var sec = req.body.Second;//2012
    var sql=`select avg(Prevalence) as pre,year from dbo.sp where year between ${fir} and ${sec} group by year order by year desc;`;
    const call=new Request(sql,(err,rowCount,rows)=>{
        if (err) {
        console.error(err.message);
        }else{
         
        console.log(`${rowCount} row(s) returned`);
        console.log(rows);
        res.json(rows);
        }
        });
         
        conn.execSql(call);
});

// ----------------------------------------------bar-------------------------------------------------
Router.post("/bar_example", (req,res)=>{
    var fir = req.body.First;//1980
    var sec = req.body.Second;//2012
    var sql=`select year,sum(NumberTerroristIncidents) as count from ti where year between ${fir} and ${sec}  group by year order by 1 asc;`;
    const call=new Request(sql,(err,rowCount,rows)=>{
        if (err) {
        console.error(err.message);
        }else{
         
        console.log(`${rowCount} row(s) returned`);
        console.log(rows);
        res.send(rows);
        }
        });
         
        conn.execSql(call);
});

// ----------------------------------------------bar multiple-------------------------------------------------
Router.post("/bar_example_multiple", (req,res)=>{
    var fir = req.body.First;//1980
    var sec = req.body.Second;//2012
    var run = req.body.Second-req.body.First;
    var sql=`select * from sp where Entity in ('Afghanistan','Bahamas','Canada','Egypt','France') and year between '2001' and '2005' order by 1,3;`;
    const call=new Request(sql,(err,rowCount,rows)=>{
        if (err) {
        console.error(err.message);
        }else{      
        console.log(`${rowCount} row(s) returned`);
        console.log(rows);
        res.send(rows);
        }
        });
         
        conn.execSql(call);
});

// ----------------------------------------------pie-------------------------------------------------
Router.post("/pie_example", (req,res)=>{
    var fir = req.body.First;
    var sec = req.body.Second;
    var sql=`select year,sum(NumberTerroristIncidents) as count from ti where year between ${fir} and ${sec} group by year order by 1 asc;`;
    const call=new Request(sql,(err,rowCount,rows)=>{
        if (err) {
        console.error(err.message);
        }else{
         
        console.log(`${rowCount} row(s) returned`);
        console.log(rows);
        res.json(rows);
        }
        });
         
        conn.execSql(call);
});

// ----------------------------------------------hist-------------------------------------------------
Router.post("/example_hist", (req,res)=>{
    var fir = req.body.First;
    var sec = req.body.Second;
    var sql=`select year,sum(NumberTerroristIncidents) as count from ti where year between ${fir} and ${sec} group by year order by 1 asc;`;
    const call=new Request(sql,(err,rowCount,rows)=>{
        if (err) {
        console.error(err.message);
        }else{
         
        console.log(`${rowCount} row(s) returned`);
        console.log(rows);
        res.json(rows);
        }
        });
         
        conn.execSql(call);
});



module.exports = Router;
