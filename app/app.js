var app = angular.module("FAMApp", ["ngRoute", "imageupload", "mwl.calendar", "ui.bootstrap", "ngAnimate", "colorpicker.module"]);

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
    .when("/calendar", {
        templateUrl: "app/calendar/calendar.html",
        controller: "calendarCtrl"
    })
    .when("/createEvent", {
        templateUrl: "app/event/createEvent.html",
        controller: "createEventCtrl"
    })
});