app.controller("loginCtrl", function($scope, user, $location) {
    
    $scope.email = "";
    $scope.password = "";
    $scope.invalidLogin = false;
    $scope.activeUser = null;

    $scope.login = function() {
        $scope.invalidLogin = false;
        user.login($scope.email, $scope.password).then(function(activeUser){
            $scope.activeUser = activeUser;
            $location.path("/main");
        }, function() {
            $scope.invalidLogin = true;
        })
    }

    $scope.getActiveUser = function() {
        return user.getActiveUserName();
    }
})
