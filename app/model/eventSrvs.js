app.factory('event', function ($location, user, moment) {

    function Event() {
        if (arguments.length === 0) {

        } else if (arguments.length === 1) {

            this.userName = arguments[0].userName;
            this.title = arguments[0].title,
            this.color = arguments[0].color;
            this.startsAt = arguments[0].startsAt;
            this.endsAt = arguments[0].endsAt;
            this.draggable = arguments[0].draggable;
            this.resizable = arguments[0].resizable;
            this.actions = arguments[0].actions;
            this.allDay = arguments[0].allDay;
            this.comments = arguments[0].comments;
            this.image = arguments[0].image;
        }
        else {
            this.userName = arguments[0];
            this.title = arguments[1],
            this.color = arguments[2];
            this.startsAt = arguments[3];
            this.endsAt = arguments[4];
            this.draggable = arguments[5];
            this.resizable = arguments[6];
            this.actions = arguments[7];
            this.allDay = arguments[8];
            this.comments = arguments[9];
            this.image = arguments[10];
        }
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
            startsAt: moment(new Date(2018, 07, 15, 09, 30)).toDate(),
            endsAt: moment(new Date(2018, 07, 15, 10, 15)).toDate(),
            draggable: true,
            resizable: true,
            actions: actions,
            allDay: true,
            comments: "",
            image: ""
        },
        {
            userName: "Sergey",
            title: 'The Second Event',
            color: "orange",
            startsAt: moment(new Date(2018, 07, 12, 13, 30)).toDate(),
            endsAt: moment(new Date(2018, 07, 12, 14, 00)).toDate(),
            draggable: true,
            resizable: true,
            actions: actions,
            allDay: true,
            comments: "",
            image: ""
        },
        {
            userName: "Sergey",
            title: 'The Second Event',
            color: "orange",
            startsAt: moment(new Date(2018, 07, 14, 13, 30)).toDate(),
            endsAt: moment(new Date(2018, 07, 14, 14, 00)).toDate(),
            draggable: true,
            resizable: true,
            actions: actions,
            allDay: true,
            comments: "",
            image: ""
        },
        {
            userName: "Mila",
            title: 'The Second Event',
            color: "orange",
            startsAt: moment(new Date(2018, 07, 18, 13, 30)).toDate(),
            endsAt: moment(new Date(2018, 07, 18, 14, 00)).toDate(),
            draggable: true,
            resizable: true,
            actions: actions,
            allDay: true,
            comments: "",
            image: ""
        }
    ];

    function getallEvents() {
        const now = moment().startOf('day').toDate();
        events.forEach(event => {
            if (event.startsAt < now) {
                var eventIndex = events.indexOf(event);
                events.splice(eventIndex, 1);
            }
        })
        return events;
    }

    function getUserEvents() {
        events = getallEvents();
        var userEventsArray = [];
        if (user.getActiveUserName()) {
            var userName = user.getActiveUserName().first_name;

            events.forEach(event => {
                if (event.userName == userName) {
                    userEventsArray.push(event);
                }
            })
            return userEventsArray;
        }
        return false;
    }

    function createEvent(title, startsAt, endsAt, allDay, date, comments, image) {

        const now = moment().startOf('day').toDate();

        if ((startsAt && startsAt > now
            && endsAt && endsAt > now
            && startsAt < endsAt)
            || (date && date > now)) {

            var color = "orange";
            var draggable = true;
            var resizable = true;
            var tempActions = actions;

            var userName = user.getActiveUserName().first_name;

            if (allDay) {

                startsAt = moment(new Date(date)).startOf('day').toDate();
                endsAt = moment(new Date(date)).endOf('day').toDate();
            }

            var newEvent = new Event(userName, title, color, startsAt, endsAt, draggable, resizable, tempActions, allDay, comments, image);
            events.push(newEvent);
            $location.path("/user");
            return newEvent;

        } else {
            alert("Please check the dates to be valid!");
            return false;
        }
    }

    function createEmptyEvent() {
        events.push({
            userName: user.getActiveUserName().first_name,
            title: "New Event",
            color: "orange",
            startsAt: moment().toDate(),
            endsAt: moment().toDate(),
            draggable: true,
            resizable: true,
            actions: actions,
            allDay: "",
            comments: "",
            image: ""
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
    var tempUserEvent = null;

    function getEventForEdit() {
        return tempUserEvent;
    }

    function setEventForEdit(userEvent) {
        tempUserEvent = userEvent;
        $location.path("/editEvent");
    }

    function editUserEvents(userEvent) {

        if (userEvent.allDay) {

            userEvent.startsAt = moment(new Date(userEvent.date)).startOf('day').toDate();
            userEvent.endsAt = moment(new Date(userEvent.date)).endOf('day').toDate();
        }

        const now = moment().startOf('day').toDate();

        if ((userEvent.startsAt && userEvent.startsAt > now
            && userEvent.endsAt && userEvent.endsAt > now
            && userEvent.startsAt < userEvent.endsAt)
            || (userEvent.date && userEvent.date > now)) {

            // events.forEach(event => {
            //     if (event == tempUserEvent) {
            //         event = userEvent;
            //     }
                $location.path("/user");
            // })
            return events;

        } else {
            alert("Please check the dates to be valid!");
            return false;
        }
    }

    return {
        getallEvents: getallEvents,
        getUserEvents: getUserEvents,
        createEvent: createEvent,
        createEmptyEvent: createEmptyEvent,
        deleteUserEvents: deleteUserEvents,
        editUserEvents: editUserEvents,
        getEventForEdit: getEventForEdit,
        setEventForEdit: setEventForEdit
    }
})