app.controller("signupCtrl", function ($scope, user, $location) {

    $scope.email = "";
    $scope.password = "";
    $scope.image = "";
    $scope.invalidLogin = false;
    $scope.activeUser = null;

    $scope.signUp = function () {
        $scope.invalidLogin = false;              
            user.signUp($scope.first_name, $scope.last_name, $scope.email, $scope.password, $scope.image).then(function (activeUser) {               
                $scope.activeUser = activeUser;
                $location.path("/main");                
            }, function () {
                $scope.invalidLogin = true;
            })        
    }
})
