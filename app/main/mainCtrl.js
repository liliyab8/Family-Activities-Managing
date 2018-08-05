app.controller("mainCtrl", function($scope, user, $location) {    
    
    $location.path("/main");
    $scope.usersCardsArray = [];

    $scope.displayusers = function() {
        // $scope.invalidLogin = false;
       user.displayUsers().then(function(usersCardsArray){
        $scope.usersCardsArray = usersCardsArray;
       }, function() {
        //    $scope.invalidLogin = true;
       })
    }

    // if (!user.isLoggedIn()) {
    //     $location.path("/");
    //     return;
    // }
    // else {
    //     $location.path("/NewAppUser");
    //     return;
    // }

    $scope.displayusers();
})
