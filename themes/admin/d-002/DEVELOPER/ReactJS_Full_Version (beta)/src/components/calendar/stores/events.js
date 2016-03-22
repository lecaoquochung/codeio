var moment = require('moment');

module.exports = [{
    "_id": "544c4183be624ef013bb009a",
    "title": "All Day Event",
    "start": moment().subtract(15, 'day').startOf('day').add(21, 'hours'),
    "description": "long description",
    "icon": "fa-check",
    "className": ["event", "bg-color-greenLight"]
}, {
    "_id": "544c4183be624ef013bb009b",
    "title": "Long Event",
    "start": moment().subtract(12, 'day').startOf('day'),
    "end": moment().subtract(11, 'day').startOf('day'),
    "icon": "fa-lock",
    "className": ["event", "bg-color-red"]
}, {
    "_id": "544c4183be624ef013bb009c",
    "id": 999,
    "title": "Repeating Event",
    "start": moment().subtract(7, 'day').startOf('day').add(13, 'hours'),
    "allDay": false,
    "icon": "fa-clock-o",
    "className": ["event", "bg-color-blue"]
}, {
    "_id": "544c4183be624ef013bb009d",
    "id": 999,
    "title": "Repeating Event",
    "start": moment().add(14, 'day').startOf('day').add(14, 'hours'),
    "allDay": false,
    "icon": "fa-clock-o",
    "className": ["event", "bg-color-blue"]
}, {
    "_id": "544c4183be624ef013bb009e",
    "title": "Meeting",
    "start": moment().add(1, 'day').startOf('day').add(8, 'hours').add(30, 'minutes'),
    "allDay": false,
    "className": ["event", "bg-color-darken"]
}, {
    "_id": "544c4183be624ef013bb009f",
    "title": "Lunch",
    "start": moment().add(3, 'day').startOf('day').add(10, 'hours'),
    "end": moment().add(3, 'day').startOf('day').add(12, 'hours'),
    "allDay": false,
    "className": ["event", "bg-color-darken"]
}, {
    "_id": "544c4183be624ef013bb00a0",
    "title": "Birthday Party",
    "start": moment().add(5, 'day').startOf('day').add(17, 'hours'),
    "end": moment().add(5, 'day').startOf('day').add(20, 'hours').add(30, 'minutes'),
    "allDay": false,
    "className": ["event", "bg-color-darken"]
}, {
    "_id": "544c4183be624ef013bb00a1",
    "title": "Smartadmin Open Day",
    "start": moment().add(7, 'day').startOf('day').add(22, 'hours'),
    "end": moment().add(8, 'day').startOf('day').add(22, 'hours'),
    "className": ["event", "bg-color-darken"]
}];