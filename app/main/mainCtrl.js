app.controller("mainCtrl", function ($scope, user, event) {
    
    $scope.usersCardsArray = [];
    $scope.usersEventsArray = [];
    $scope.userMainCard = null;

    $scope.displayusers = function () {
        $scope.usersCardsArray = ($scope.usersCardsArray).slice(0, 0);

        user.displayUsers().then(function (usersCardsArray) {
            $scope.usersCardsArray = usersCardsArray;
        }, function () {
        })
    }

    $scope.getAllEvents = function(){
        $scope.usersEventsArray = ($scope.usersEventsArray).slice(0, 0);
        $scope.usersEventsArray = event.getallEvents();
    }

    $scope.getActiveUser = function() {
        return user.getActiveUserName();
    }

    $scope.updateUserCardName = function(userMainCardNamr){
        user.updateUserCardName(userMainCardNamr);
    }
    
    $scope.getAllEvents();
    $scope.displayusers();
})
