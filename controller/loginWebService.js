var express = require('express');
var routes = express.Router();
var user = require("../model/mongo/user");

routes.post("/", function(req, res){
	// console.log(req.body);
	// { username : "", password : ""}
	user.findWhere(req.body, function(err, result){
		// console.log(result);
		res.send(result);
	});

});


routes.post("/doLogin", function(req, res){
	// console.log(req.body);
	// { username : "", password : ""}
	user.findWhere(req.body, function(err, result){
		// console.log(result);
		if(result.length>0)
		{
			req.session.is_user_logged_in=true;	
			req.session.uid=result[0]._id;	
			req.session.full_name=result[0].full_name;	
		}
		res.send(result);
	});

});




module.exports=routes;