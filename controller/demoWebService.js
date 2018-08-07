var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
	console.log("GET Calling");
	console.log(req.query);
	console.log(req.params);
});

router.post("/", function(req, res){
	console.log("POST Calling");
	console.log(req.body);
});


router.put("/", function(req, res){
	console.log("PUT Calling");
	console.log(req.body);
});


router.delete("/", function(req, res){
	console.log("DELETE Calling");
	// console.log(req.body);
	console.log(req.query);
	console.log(req.params);
});



module.exports=router;