const{Connection,Request}=require("tedious");
 
// Create connection to database
const config={
 authentication:{
 options:{
 userName:"adbdb",// update me
 password:"Yasmin1@3",
// update me
},
 type:"default"
},
 server:"adbdb.database.windows.net",// update me
 options:{
 database:"adbdb",//update me
 encrypt:true,
 rowCollectionOnRequestCompletion:true,
 useColumnNames:true,
 multipleStatements: true,
 
}
};
 
const connection=new Connection(config);
//config.options.rowCollectionOnRequestCompletion
 
// Attempt to connect and execute queries if connection goes through
connection.on("connect",err=>{
if (err) {
console.error(err.message);
}else{
//queryDatabase();
}
});
 
//module.exports = requests;
module.exports=connection;