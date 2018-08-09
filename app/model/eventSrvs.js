app.factory('event', function ($http, $q) {
    
    function Event(userName, title, color, startsAt, endsAt, draggable, resizable, actions, allDay) {
        this.userName = userName;
        this.title = title,
        this.color = color;
        this.startsAt = startsAt;
        this.endsAt = endsAt;
        this.draggable = draggable;
        this.resizable = resizable;
        this.actions = actions;
        this.allDay = allDay;
    }

    events = [];
    // events = [
    //     {
    //       title: 'An event',
    //       color: "orange",
    //       // startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
    //       startsAt: moment(new Date (2018,08,10,09,30)).toDate(),
    //       // startsAt:  moment({ years:'2018', months:'8', date:'9', hours:'15', minutes:'10', seconds:'0', milliseconds:'0'}),
    //       endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
    //       draggable: true,
    //       resizable: true,
    //       actions: actions,
    //       allDay: true 
    //     }, {
    //       title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
    //       color: "orange",
    //       startsAt: moment().subtract(1, 'day').toDate(),
    //       endsAt: moment().add(5, 'days').toDate(),
    //       draggable: true,
    //       resizable: true,
    //       actions: actions,
    //       allDay: true 
    //     }, {
    //       title: 'This is a really long event title that occurs on every year',
    //       color: "orange",
    //       startsAt: moment().startOf('day').add(7, 'hours').toDate(),
    //       endsAt: moment().startOf('day').add(19, 'hours').toDate(),
    //       recursOn: 'year',
    //       draggable: true,
    //       resizable: true,
    //       actions: actions,
    //       allDay: true 
    //     }
    //   ];

    //{
    //     title: 'An event',
    //     color: calendarConfig.colorTypes.warning,
    //     // startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
    //     startsAt: moment(new Date (2018,08,10,09,30)).toDate(),
    //     // startsAt:  moment({ years:'2018', months:'8', date:'9', hours:'15', minutes:'10', seconds:'0', milliseconds:'0'}),
    //     endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
    //     draggable: true,
    //     resizable: true,
    //     actions: actions,
    //     allDay: true 
    //   }

    function getallEvents(){
        return events;
    }

    function getUserEvents(userName){
        var userEventsArray;
        events.forEach(event => {    
            if(event.userName == userName)
            {
                userEventsArray.push(event);
            }
        })
            return userEventsArray;
    }

    function createEvent(userName, title, startsAt, endsAt, allDay) {

        var color = "orange";
        var draggable = true;
        var resizable = true;
        var actions = actions;

        var newEvent = new Event(userName, title, color, startsAt, endsAt, draggable, resizable, actions, allDay);
        events.push(newEvent);
        return newEvent;
    }

    return {
        getallEvents: getallEvents,
        getUserEvents: getUserEvents,
        createEvent: createEvent
    }
})