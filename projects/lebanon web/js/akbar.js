var app = angular.module("app.akbar", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/akbar", {
        templateUrl: "./veiw/akbar.html",
        controller: "akbarCtrl"
    })
})
app.controller("akbarCtrl", function ($scope) {
    
})