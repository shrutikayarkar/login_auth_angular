var express = require('express');
var routes = express.Router();

routes.get("/", function(req, res){
	var pageData = { title : "Home Page", pagename : "home/index", appName : "myApp", angularFileName : "/js/app.js"};
	res.render("layout", pageData);
});
routes.get("/demo", function(req, res){
	var pageData = { title : "Home Page", pagename : "home/demo", appName : "demoApp", angularFileName : "/js/app2.js"};
	res.render("layout", pageData);
});


module.exports=routes;