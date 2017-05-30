var app = angular.module("app.youtube", ["ngRoute", "mySvr"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/youtube", {
        templateUrl: "../veiw/youtube.html",
        controller: "youtubeCtrl"
    })
})
app.controller("youtubeCtrl", function ($scope, toserve) {
    $scope.arr = [];
    toserve.getWebsite().then(function (response) {
            $scope.arr = response.data.articles;
            console.log($scope.arr);
        },
        function (err) {
            console.log(err.statusText + " " + err.status);
            console.log(err)

        });


});