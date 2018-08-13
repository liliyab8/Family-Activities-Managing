app.controller("editEventCtrl", function ($scope, event) {

    $scope.title = "";
    $scope.startsAt = "";
    $scope.endsAt = "";
    $scope.allDay = "";
    $scope.date = "";
    $scope.comments = "";
    $scope.image = "";

    var tempEvent = null;

    $scope.editUserEvent = function (userEvent) {

        $scope.event = userEvent;
        $scope.userEventsArray = event.editUserEvents(userEvent);
        
        return;
    }

    $scope.tempEvent = event.getEventForEdit();
})
