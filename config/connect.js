var mysql = require('mysql');
var MongoClient = require("mongodb").MongoClient;
var url ="mongodb://localhost:27017";
module.exports.mysqlCon = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "tss_11"
});

module.exports.mongoCon = function(cb){
	MongoClient.connect(url, cb);
}