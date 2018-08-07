var express = require('express');
var routes = express.Router();
var mysqlStudent = require("../model/mysql/student");
var mongoStudent = require("../model/mongo/student");
var mongo = require("mongodb");

routes.get("/getAll", function(req, res){
	mongoStudent.find(function(err, result){
		res.send(result);
	});
});

routes.post("/add", function(req, res){
	// console.log(req.body);
	mongoStudent.insert(req.body, function(err, result){
		res.send(result.ops[0]);
	});
});
routes.post("/delete", function(req, res){
	//console.log(req.body);
	mongoStudent.remove({ _id : mongo.ObjectId(req.body._id) }, function(err, result){
		res.send(result);
	});
});
routes.post("/update", function(req, res){
	// console.log(req.body);
	var id = req.body._id;
	delete req.body._id;
	mongoStudent.update({ _id : mongo.ObjectId(id) }, req.body, function(err, result){
		res.send(result);
	});
});


module.exports=routes;