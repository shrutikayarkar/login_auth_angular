var app = angular.module("demoApp", []);
app.controller('demoCtrl', function($scope, $http){
	$scope.a="rohit";
	$scope.get_method=function(){
		$http({
			method : "get",
			url : "demoWebService",
			data : $.params({ name : "rohit"})
		}).then(function(res){
			console.log(res);
		})
	}
	$scope.post_method=function(){
		$http({
			method : "post",
			url : "demoWebService",
			data : { name : "james"}
		}).then(function(res){
			console.log(res);
		})
	}
	$scope.put_method=function(){
		$http({
			method : "put",
			url : "demoWebService",
			data : { name : "jaya"}
		}).then(function(res){
			console.log(res);
		})
	}
	$scope.delete_method=function(){
		$http({
			method : "delete",
			url : "demoWebService",
			data : $.params({ name : "gaurav"})
		}).then(function(res){
			console.log(res);
		})
	}
});