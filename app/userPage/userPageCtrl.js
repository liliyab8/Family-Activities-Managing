app.controller("userPageCtrl", function ($scope, event, user, $location) {

    $scope.userEventsArray = [];

    $scope.getUserEvents = function () {
        $scope.userEventsArray = ($scope.userEventsArray).slice(0, 0);

        $scope.userEventsArray = event.getUserEvents();
    }

    $scope.getUserEvents();

})
