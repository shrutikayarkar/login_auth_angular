var connect = require("../../config/connect");

module.exports.find=function(cb){
	connect.mysqlCon.connect(function(err){
	var que = "SELECT * FROM student";
	connect.mysqlCon.query(que, cb);
});
}