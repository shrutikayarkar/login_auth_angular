var app = angular.module('loginApp', []);

app.controller('loginCtrl', function($scope, $http, $window){
	// $scope.showMsg=false;
	$scope.showPasswordBox=true;
	$scope.data = {};
	$scope.next=function(){
		// console.log($scope.data);
		$http({
			method : "post",
			url : "loginWebService",
			data : $scope.data
		}).then(function(res){
			console.log(res.data);
			if(res.data.length>0)
			{
				$scope.showMsg=false;
				$scope.showPasswordBox=false;
				$scope.userData = res.data[0];
			}
			else
			{
				$scope.showMsg=true;
				$scope.msg="This Username is Incorrect !";
			}
		});
	}
	$scope.do_login=function(){
		$http({
			method : "post",
			url : "loginWebService/doLogin",
			data : $scope.data

		}).then(function(res){
			if(res.data.length>0)
			{

				$window.location.href="/home"
			}
			else
			{
				$scope.showMsg=true;
				$scope.msg="This Password is Incorrect !";
			}
		});
	}

});