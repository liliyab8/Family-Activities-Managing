var app = angular.module("FAMApp", ["ngRoute", "imageupload"]);

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
        templateUrl: "app/signup/signup.html",
        controller: "signupCtrl"        
    })
    .when("/appUser", {
        templateUrl: "app/user/appUser.html",
        controller: "appUserCtrl"
    })
    .when("/newAppUser", {
        templateUrl: "app/users/newAppUser.html",
        controller: "newAppUserCtrl"
    })
    .when("/main", {
        templateUrl: "app/main/main.html",
        controller: "mainCtrl"
    })


});