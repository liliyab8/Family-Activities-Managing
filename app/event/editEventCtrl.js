app.controller("editEventCtrl", function ($scope, event) {

    $scope.tempEvent = event.getEventForEdit();
    $scope.image;

    $scope.isAllDayEvent = function () {
        if ($scope.tempEvent) {
            return $scope.tempEvent.allDay;
        }
        else {
            return false;
        }
    }

    $scope.isNotAllDayEvent = function () {
        if ($scope.tempEvent && $scope.tempEvent.allDay) {
            return false;
        }
        else {
            return true;
        }
    }

    $scope.editUserEvent = function () {
        if ($scope.tempEvent.allDay) {
            $scope.tempEvent.startsAt = null;
            $scope.tempEvent.endsAt = null;
        }
        else {
            $scope.tempEvent.date = null;
        }
        $scope.tempEvent.image = $scope.image;
        event.editUserEvents($scope.tempEvent);
        return;
    }
})
