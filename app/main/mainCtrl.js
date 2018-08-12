app.controller("mainCtrl", function ($scope, user) {
    
    $scope.usersCardsArray = [];
    $scope.userMainCard = null;

    $scope.displayusers = function () {
        $scope.usersCardsArray = ($scope.usersCardsArray).slice(0, 0);

        user.displayUsers().then(function (usersCardsArray) {
            $scope.usersCardsArray = usersCardsArray;
        }, function () {
        })
    }

    $scope.getActiveUser = function() {
        return user.getActiveUserName();
    }

    $scope.updateUserCardName = function(userMainCardNamr){
        user.updateUserCardName(userMainCardNamr);
    }
    
    $scope.displayusers();
})
