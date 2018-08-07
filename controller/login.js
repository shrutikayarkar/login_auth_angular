var express = require('express');
var routes = express.Router();

routes.get("/", function(req, res){
	var pageData = { title : "Login Page", pagename : "login/index", appName : "loginApp", angularFileName : "/js/login.js"};
	res.render("layout", pageData);
});



module.exports=routes;