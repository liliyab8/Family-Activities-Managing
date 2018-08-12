app.factory('event', function ($http, $q, $location, user) {

    function Event(userName, title, color, startsAt, endsAt, draggable, resizable, actions, allDay, comments, image) {
        this.userName = userName;
        this.title = title,
        this.color = color;
        this.startsAt = startsAt;
        this.endsAt = endsAt;
        this.draggable = draggable;
        this.resizable = resizable;
        this.actions = actions;
        this.allDay = allDay;
        this.comments = comments;
        this.image = image;
    }

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

    events = [
        {
            userName: "Liliya",
            title: 'The First Event',
            color: "orange",
            startsAt: moment(new Date(2018, 07, 10, 09, 30)).toDate(),
            endsAt: moment(new Date(2018, 07, 10, 10, 15)).toDate(),
            draggable: true,
            resizable: true,
            actions: actions,
            allDay: true
        },
        {
            userName: "Sergey",
            title: 'The Second Event',
            color: "orange",
            startsAt: moment(new Date(2018, 07, 12, 13, 30)).toDate(),
            endsAt: moment(new Date(2018, 07 - 1, 12, 14, 00)).toDate(),
            draggable: true,
            resizable: true,
            actions: actions,
            allDay: true
        }
    ];

    function getallEvents() {
        return events;
    }

    function getUserEvents() {

        var userEventsArray = [];

        var userName = user.getActiveUserName().first_name;

        events.forEach(event => {
            if (event.userName == userName) {
                userEventsArray.push(event);
            }
        })
        return userEventsArray;
    }

    function createEvent(title, startsAt, endsAt, allDay, date, comments, image) {

        var color = "orange";
        var draggable = true;
        var resizable = true;
        var actions = actions;

        var userName = user.getActiveUserName().first_name;

        if (allDay) {

            startsAt = moment(new Date(date)).startOf('day').toDate();
            endsAt = moment(new Date(date)).endOf('day').toDate();
        }

        var newEvent = new Event(userName, title, color, startsAt, endsAt, draggable, resizable, actions, allDay, comments, image);
        events.push(newEvent);
        $location.path("/user");
        return newEvent;
    }

    function createEmptyEvent() {
        events.push({
            title: 'New event',
            startsAt: moment().toDate(),
            endsAt: moment().toDate(),
            color: "orange",
            draggable: true,
            resizable: true
        });
    }

    function deleteUserEvents(userEventsArray, userEvent) {
        //remove event from user events array
        var userEventIndex = userEventsArray.indexOf(userEvent);
        userEventsArray.splice(userEventIndex, 1);

        //remove event from all events array
        userEventIndex = events.indexOf(userEvent);
        events.splice(userEventIndex, 1);

        return userEventsArray;
    }

    return {
        getallEvents: getallEvents,
        getUserEvents: getUserEvents,
        createEvent: createEvent,
        createEmptyEvent: createEmptyEvent,
        deleteUserEvents: deleteUserEvents
    }
})