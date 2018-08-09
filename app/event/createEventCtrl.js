app.controller("createEventCtrl", function ($scope, user, event, $location) {

    $scope.createEvent = function (title, startsAt, endsAt, allDay) {
        event.createEvent(title, startsAt, endsAt, allDay);
    }

    $scope.getUserEvents = function () {
        return event.getUserEvents();
    }

    $scope.getallEvents = function () {
        return event.getallEvents();
    }
})
