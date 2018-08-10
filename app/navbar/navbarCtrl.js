app.controller("navbarCtrl", function($scope, user, $location) {
    
    $scope.isUserLoggedIn = function() {
        return user.isLoggedIn();
    }

    $scope.isUserLoggedOut = function() {
        if(user.isLoggedIn())
        {return false;}
        else
        {return true;}
    }

    $scope.logout = function() {
        user.logout();
        $location.path("/");
    }

    $scope.getActiveUser = function() {
        return user.getActiveUserName();
    }

})