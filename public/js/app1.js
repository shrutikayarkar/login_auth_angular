var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$scope.a="";
	$scope.b="";
	$scope.del=function(){
		$http({
			url : "/del",
			method : "get"
		});
	}

	$scope.send=function(){
		$http({
			url : "/send",
			method : "post",
			data : { x : $scope.a, y : $scope.b }
		});
	}
});