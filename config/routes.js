var express = require('express');
var routes = express.Router();

routes.use("/home", require("../controller/home"));
routes.use("/", require("../controller/login"));
routes.use("/studentWebService", require("../controller/studentWebService"));
routes.use("/loginWebService", require("../controller/loginWebService"));
routes.use("/demoWebService", require("../controller/demoWebService"));


function backdoor(req, res, next){
	if(! req.session.is_user_logged_in){
		res.redirect("/");
	}
	next();
}

module.exports=routes;