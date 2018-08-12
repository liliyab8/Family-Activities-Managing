app.controller("userPageCtrl", function ($scope, event, user) {

    $scope.userEventsArray = [];

    $scope.itIsUserCard = function () {
       return user.itIsUserCard();
    }

    $scope.getUserEvents = function () {
        $scope.userEventsArray = ($scope.userEventsArray).slice(0, 0);
        $scope.userEventsArray = event.getUserEvents();
    }

    $scope.deleteUserEvent = function (userEvent) {
        userEventsArray = $scope.userEventsArray;
        $scope.userEventsArray = ($scope.userEventsArray).slice(0, 0);
        $scope.userEventsArray = event.deleteUserEvents(userEventsArray, userEvent);
        return;
    }

    $scope.getUserEvents();
})
