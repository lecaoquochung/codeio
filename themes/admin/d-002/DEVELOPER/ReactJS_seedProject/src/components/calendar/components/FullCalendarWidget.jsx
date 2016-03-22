import React from 'react'
import Reflux from 'reflux'
import _ from 'lodash'

import {DropdownButton, MenuItem} from 'react-bootstrap'

import EventStore from '../stores/EventStore'
import EventActions from '../actions/EventActions'

import JarvisWidget from '../../layout/widgets/JarvisWidget.jsx'

let FullCalendarWidget = React.createClass({
    mixins: [Reflux.connect(EventStore)],
    getInitialState: function () {
        return EventStore._getData()
    },
    componentDidMount: function () {
        let self = this;
        let $calendar = $(this.refs.smartCalendar);
        let calendar = $calendar.fullCalendar({
            lang: 'en',
            editable: true,
            draggable: true,
            selectable: false,
            selectHelper: true,
            unselectAuto: false,
            disableResizing: false,
            droppable: true,

            header: {
                left: 'title', //,today
                center: 'prev, next, today',
                right: 'month, agendaWeek, agendaDay' //month, agendaDay,
            },

            drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                let originalEventObject = $(this).data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                let copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;

                // $log.log(scope);

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $calendar.fullCalendar('renderEvent', copiedEventObject, true);



                EventActions.dropExternal($(this).data('eventObject'))

            },

            select: function (start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: start,
                            end: end,
                            allDay: allDay
                        }, true // make the event "stick"
                    );
                }
                calendar.fullCalendar('unselect');
            },

            // events: scope.events,

            events: function (start, end, timezone, callback) {

                callback(this.state.events);

            }.bind(this),

            eventRender: function (event, element, icon) {
                if (!event.description == "") {
                    element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
                }
                if (!event.icon == "") {
                    element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
                }
            }
        });

        $('.fc-header-right, .fc-header-center', $calendar).hide();
    },

    _changeView: function (period) {
        $(this.refs.smartCalendar).fullCalendar('changeView', period);
    },
    _next: function () {
        $('.fc-button-next', this.refs.smartCalendar).click();
    },
    _prev: function () {
        $('.fc-button-prev', this.refs.smartCalendar).click();
    },
    _today: function () {
        $('.fc-button-today', this.refs.smartCalendar).click();
    },
    render: function () {
        return (
            <JarvisWidget color="blueDark">
                <header>
                    <span className="widget-icon"> <i className="fa fa-calendar"/> </span>

                    <h2> My Events </h2>

                    <div className="widget-toolbar">
                        <DropdownButton id="calendar-showing-dropdown" title="Showing" pullRight bsSize="xsmall">
                            <MenuItem onClick={this._changeView.bind(this, 'month')}>Month</MenuItem>
                            <MenuItem onClick={this._changeView.bind(this, 'agendaWeek')}>Agenda</MenuItem>
                            <MenuItem onClick={this._changeView.bind(this, 'agendaDay')}>Today</MenuItem>
                        </DropdownButton>
                    </div>
                </header>

                {/* widget div*/}
                <div>
                    <div className="widget-body no-padding">
                        {/* content goes here */}
                        <div className="widget-body-toolbar">

                            <div id="calendar-buttons">

                                <div className="btn-group">
                                    <a onClick={this._prev} className="btn btn-default btn-xs"><i
                                        className="fa fa-chevron-left"/></a>
                                    <a onClick={this._next} className="btn btn-default btn-xs"><i
                                        className="fa fa-chevron-right"/></a>
                                </div>
                            </div>
                        </div>


                        <div id="calendar" ref="smartCalendar"/>

                        {/* end content */}
                    </div>

                </div>
                {/* end widget div */}
            </JarvisWidget>        )
    }
});

export default FullCalendarWidget