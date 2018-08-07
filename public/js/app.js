var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http){
	$scope.newData = {};


	$scope.data=[];
	$scope.getAll=function(){
		$http({
			method : "get",
			url : "studentWebService/getAll"
		}).then(function(res){
			console.log(res.data);
			$scope.data = res.data;
		});
	}

	$scope.save=function(){
		if($scope.newData._id)
		{
			//update
			$http({
				method : "post",
				url : "studentWebService/update",
				data : $scope.newData
			}).then(function(res){
				// console.log(res.data);
				for(var i=0; i < $scope.data.length; i++)
				{
					if($scope.data[i]._id == $scope.newData._id)
					{
						$scope.data[i]=$scope.newData;
					}
				}
			});
			
		}
		else
		{
			console.log($scope.newData);
			$http({
				method : "post",
				url : "studentWebService/add",
				data : $scope.newData
			}).then(function(res){
				$scope.data.push(res.data);
			});
		}
	}

	$scope.askDelete=function(obj){
		// console.log(obj);
		$scope.selectedObj=obj;
	}
	$scope.delete=function(){
		console.log($scope.selectedObj);
		$http({
			method : "post",
			url : "studentWebService/delete",
			data : $scope.selectedObj
		}).then(function(res){
			// console.log(res.data);
			var n = $scope.data.indexOf($scope.selectedObj);
			$scope.data.splice(n, 1);

		});
	}
	$scope.askUpdate=function(obj){
		// $scope.newData = obj;
		angular.copy(obj, $scope.newData);
	}
});