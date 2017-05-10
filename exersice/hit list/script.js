var app = angular.module('myapp', []);
app.controller('mainctrl', function ($scope, $http) {
	$scope.hitlist = function () {
		//$scope.arr = [];
		$http.get(" http://api.vschool.io:6543/hitlist.json").then(function (arr) {
				
				
				$scope.arr = arr.data;
			console.log($scope.arr)

			},

			function (err) {

				console.log(err.statusText + " " + err.status);
				console.log(err)
			}
		)
	}
})
