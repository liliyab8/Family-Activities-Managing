app.controller("calendarCtrl", function ($scope, user, event, alert, $location, moment) {

  $location.path("/calendar");
  var vm = this;
  //$scope.vm = this;

  //These variables MUST be set as a minimum for the calendar to work
  vm.calendarView = 'month';
  vm.viewDate = new Date();
  var actions = [{
    label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
    onClick: function (args) {
      alert.show('Edited', args.calendarEvent);
    }
  }, {
    label: '<i class=\'glyphicon glyphicon-remove\'></i>',
    onClick: function (args) {
      alert.show('Deleted', args.calendarEvent);
    }
  }];

  vm.events = event.getallEvents();

  vm.cellIsOpen = true;

  vm.addEvent = function () {
    event.createEmptyEvent();
  };

  vm.eventClicked = function (event) {
    alert.show('Clicked', event);
  };

  vm.eventEdited = function (event) {
    alert.show('Edited', event);
  };

  vm.eventDeleted = function (event) {
    alert.show('Deleted', event);
  };

  vm.eventTimesChanged = function (event) {
    alert.show('Dropped or resized', event);
  };

  vm.timespanClicked = function (date, cell) {

    if (vm.calendarView === 'month') {
      if ((vm.cellIsOpen && moment(date).startOf('day').isSame(moment(vm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
        vm.cellIsOpen = false;
      } else {
        vm.cellIsOpen = true;
        vm.viewDate = date;
      }
    } else if (vm.calendarView === 'year') {
      if ((vm.cellIsOpen && moment(date).startOf('month').isSame(moment(vm.viewDate).startOf('month'))) || cell.events.length === 0) {
        vm.cellIsOpen = false;
      } else {
        vm.cellIsOpen = true;
        vm.viewDate = date;
      }
    }
  };

  // $scope.getActiveUser = function () {
  //   return user.getActiveUserName();
  // }
});

