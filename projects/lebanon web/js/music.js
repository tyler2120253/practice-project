var app = angular.module("app.music", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/music", {
        templateUrl: "../veiw/music.html",
        controller: "musicCtrl"
    })
})
app.controller("musicCtrl", function ($scope) {
    
})