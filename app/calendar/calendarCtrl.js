/* <div ng-controller="MyCalendarController as cal">
        <mwl-calendar
            view="cal.calendar.view"
            view-date="cal.calendar.date"
            events="cal.events.list"
            view-title="cal.calendar.title"
            custom-template-urls="{calendarMonthCell: 'customMonthCell.html'}"
            cell-is-open="cal.calendar.cellIsOpen"
            slide-box-disabled="true"
            parent-ctl="cal"
        >
        </mwl-calendar>
</div> */

app.controller("calendarCtrl", function($scope, user, event, alert, $location, moment, calendarConfig) {
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

     //vm.events = event.getallEvents();

    // 2013-02-08 09:30  var day = moment("2018-08-08");
    vm.events = [
      {
        title: 'An event',
        color: calendarConfig.colorTypes.warning,
        // startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        startsAt: moment(new Date (2018,08,10,09,30)).toDate(),
        // startsAt:  moment({ years:'2018', months:'8', date:'9', hours:'15', minutes:'10', seconds:'0', milliseconds:'0'}),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true,
        actions: actions,
        allDay: true 
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        color: calendarConfig.colorTypes.info,
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true,
        actions: actions,
        allDay: true 
      }, {
        title: 'This is a really long event title that occurs on every year',
        color: calendarConfig.colorTypes.important,
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true,
        actions: actions,
        allDay: true 
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

    $scope.getActiveUser = function() {
      return user.getActiveUserName();
  }

  });

