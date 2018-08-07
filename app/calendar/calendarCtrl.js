// app.controller("calendarCtrl", function($scope, user, $location) {
//     $scope.calendarView = 'month';
//     $scope.viewDate = new Date(2018,5,1,1);
//     // $scope.calendarTitle = 'CALENDAR';
//     $scope.events = [
//         {
//           title: 'HUG', // The title of the event
//           startsAt: new Date(2018,8,1,1), // A javascript date object for when the event starts
//           endsAt: new Date(2018,8,26,15), // Optional - a javascript date object for when the event ends
//           color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
//             primary: '#e3bc08', // the primary event color (should be darker than secondary)
//             secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
//           },
//           actions: [{ // an array of actions that will be displayed next to the event title
//             label: '<i class=\'glyphicon glyphicon-pencil\'></i>', // the label of the action
//             cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
//             onClick: function(args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
//               console.log('Edit event', args.calendarEvent);
//             }
//           }],
//           draggable: true, //Allow an event to be dragged and dropped
//           resizable: true, //Allow an event to be resizable
//           incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
//           recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
//           cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
//           allDay: false // set to true to display the event as an all day event on the day view
//         }
//       ];
// })

app.controller("calendarCtrl", function($scope, user, alert, $location, moment, calendarConfig) {
//angular.module('mwl.calendar.docs', ['mwl.calendar', 'ngAnimate', 'ui.bootstrap', 'colorpicker.module']);
// angular.module('mwl.calendar.docs') //you will need to declare your module with the dependencies ['mwl.calendar', 'ui.bootstrap', 'ngAnimate']
//  angular.module('FAMApp', ['mwl.calendar', 'ui.bootstrap', 'ngAnimate']).controller('KitchenSinkCtrl', function(moment, alert, calendarConfig) {
  $location.path("/calendar");
     var vm = this;
    //$scope.vm = this;

    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    var actions = [{
      label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
      onClick: function(args) {
        alert.show('Edited', args.calendarEvent);
      }
    }, {
      label: '<i class=\'glyphicon glyphicon-remove\'></i>',
      onClick: function(args) {
        alert.show('Deleted', args.calendarEvent);
      }
    }];
    vm.events = [
      {
        title: 'An event',
        color: calendarConfig.colorTypes.warning,
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        color: calendarConfig.colorTypes.info,
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true,
        actions: actions
      }, {
        title: 'This is a really long event title that occurs on every year',
        color: calendarConfig.colorTypes.important,
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true,
        actions: actions
      }
    ];

    vm.cellIsOpen = true;

    vm.addEvent = function() {
      vm.events.push({
        title: 'New event',
        startsAt: moment().startOf('day').toDate(),
        endsAt: moment().endOf('day').toDate(),
        color: calendarConfig.colorTypes.important,
        draggable: true,
        resizable: true
      });
    };

    vm.eventClicked = function(event) {
      alert.show('Clicked', event);
    };

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

    vm.eventTimesChanged = function(event) {
      alert.show('Dropped or resized', event);
    };

    vm.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

    vm.timespanClicked = function(date, cell) {

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

  });

