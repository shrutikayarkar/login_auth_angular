var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
	$scope.data=[
		{
			name : "rohit",
			age : 25,
			fee : 2500
		},
		{
			name : "james",
			age : 23,
			fee : 1200
		},
		{
			name : "mohit",
			age : 26,
			fee : 3500
		},
		{
			name : "kishan",
			age : 22,
			fee : 3100
		},
		{
			name : "sanjay",
			age : 27,
			fee : 4000
		},
		{
			name : "shruti",
			age : 25,
			fee : 3500
		},
		{
			name : "Taha",
			age : 30,
			fee : 5500
		},
		{
			name : "Ajay",
			age : 30,
			fee : 5500
		}

	];
	$scope.fieldName = '';
	
	$scope.orderType=function(a){
		console.log(a);
		$scope.fieldName=a;
	}

});