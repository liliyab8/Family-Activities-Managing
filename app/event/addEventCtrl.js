app.controller("addEventCtrl", function($scope, user, $location) {
    
    
    $scope.login = function() {
        $scope.invalidLogin = false;
        user.login($scope.email, $scope.password).then(function(activeUser){
            $scope.activeUser = activeUser;
            $location.path("/main");
        }, function() {
            $scope.invalidLogin = true;
        })
    }
})
