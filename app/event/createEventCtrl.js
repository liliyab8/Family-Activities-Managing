app.controller("createEventCtrl", function ($scope, event) {

    $scope.title = "";
    $scope.startsAt = "";
    $scope.endsAt = "";
    $scope.allDay = "";

    $scope.createEvent = function (title, startsAt, endsAt, allDay) {
        event.createEvent(title, startsAt, endsAt, allDay);
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
})
