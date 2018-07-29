var app = angular.module("FAMApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    })
    .when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    })
    .when("/signup", {
        
    })
    .when("/user", {
        templateUrl: "app/user/user.html",
        controller: "userCtrl"
    })
    .when("/new", {
        templateUrl: "app/user/newUser.html",
        controller: "newUserCtrl"
    })
    .when("/recipe/:id", {
        
    })


});