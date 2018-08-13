app.controller("editEventCtrl", function ($scope, event) {

    $scope.tempEvent = event.getEventForEdit();

    $scope.isAllDayEvent= function () {
        return $scope.tempEvent.allDay;
    }

    $scope.isNotAllDayEvent= function () {
        if($scope.tempEvent.allDay){
            return false;
        }
        else{
            return true;
        }
    }

    $scope.editUserEvent = function () {  
        if($scope.tempEvent.allDay)
        {
            $scope.tempEvent.startsAt = null;
            $scope.tempEvent.endsAt = null;
        }  
        else{
            $scope.tempEvent.date = null;
        }   
        event.editUserEvents($scope.tempEvent);        
        return;
    }

   
})
