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
    .when("/appUser", {
        templateUrl: "app/user/appUser.html",
        controller: "appUserCtrl"
    })
    .when("/newAppUser", {
        templateUrl: "app/user/newAppUser.html",
        controller: "newAppUserCtrl"
    })
    .when("/recipe/:id", {
        
    })


});