app.controller("createEventCtrl", function ($scope, event) {

    $scope.title = "";
    $scope.startsAt = "";
    $scope.endsAt = "";
    $scope.allDay = "";
    $scope.date = "";
    $scope.comments = "";
    $scope.image = "";

    $scope.createEvent = function () {
        event.createEvent($scope.title, $scope.startsAt, $scope.endsAt, $scope.allDay, $scope.date, $scope.comments, $scope.image);
    }

    $scope.isAllDayEvent= function () {
        return $scope.allDay;
    }

    $scope.isNotAllDayEvent= function () {
        if($scope.allDay){
            return false;
        }
        else{
            return true;
        }
    }
})
