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

    $scope.getUserEvents = function () {
        return event.getUserEvents();
    }

    $scope.getallEvents = function () {
        return event.getallEvents();
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
