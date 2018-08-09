app.controller("mainCtrl", function ($scope, user, $location) {

    // $location.path("/main");
    $scope.usersCardsArray = [];

    $scope.displayusers = function () {
        // $scope.invalidLogin = false;
        $scope.usersCardsArray = ($scope.usersCardsArray).slice(0, 0);

        user.displayUsers().then(function (usersCardsArray) {
            $scope.usersCardsArray = usersCardsArray;
        }, function () {
            //    $scope.invalidLogin = true;
        })
    }

    $scope.getActiveUser = function() {
        return user.getActiveUserName();
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
