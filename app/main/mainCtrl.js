app.controller("mainCtrl", function($scope, user, $location) {    
    
    $location.path("/main");

    // $scope.main = function() {
    //     $scope.invalidLogin = false;
    //   //  user.login($scope.email, $scope.password).then(function(activeUser){
    //   //  }, function() {
    //   //      $scope.invalidLogin = true;
    //   //  })
    // }

    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
    else {
        $location.path("/NewAppUser");
        return;
    }


})
