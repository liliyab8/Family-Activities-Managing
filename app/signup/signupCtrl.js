app.controller("signupCtrl", function($scope, user, $location) {
    
    $scope.email = "";
    $scope.password = "";
    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;
        user.signup($scope.email, $scope.password).then(function(activeUser){
            $location.path("/newAppUser");
        }, function() {
            $scope.invalidLogin = true;
        })
    }
})
