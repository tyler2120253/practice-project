var app = angular.module("app", []);
app.controller('mainctrl', function ($scope) {
	$scope.arr = [];
	$scope.submit = function () {
		var person = {
			firstname: $scope.first,
			lastname: $scope.last,
			email: $scope.email,
			phone: $scope.phone,
			birth: $scope.birth,
			favorite: $scope.food,
			infromation: $scope.info,

		}
		$scope.arr.push(person);
		console.log($scope.arr)
	}

})
