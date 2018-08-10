app.controller("userPageCtrl", function ($scope, event) {

    $scope.userEventsArray = [];

    $scope.getUserEvents = function () {
        $scope.userEventsArray = ($scope.userEventsArray).slice(0, 0);

        $scope.userEventsArray = event.getUserEvents();
    }

    $scope.getUserEvents();

})
