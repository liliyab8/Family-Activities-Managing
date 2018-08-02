app.controller("signupCtrl", function($scope, user, $location) {
    
    $scope.email = "";
    $scope.password = "";
    $scope.invalidLogin = false;

    $scope.signUp = function() {
        $scope.invalidLogin = false;
        user.signUp($scope.first_name, $scope.last_name, $scope.email, $scope.password).then(function(activeUser){
            $location.path("/newAppUser");
        }, function() {
            $scope.invalidLogin = true;
        })
    }
})
