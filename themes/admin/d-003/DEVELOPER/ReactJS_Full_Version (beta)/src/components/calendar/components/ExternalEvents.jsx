import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Reflux from 'reflux'

import EventStore from '../stores/EventStore'
import EventActions from '../actions/EventActions'

import DraggableEvent from './DraggableEvent.jsx'

let ExternalEvents = React.createClass({
    mixins: [Reflux.connect(EventStore), LinkedStateMixin],
    getInitialState: function () {
        return EventStore._getData()
    },
    _toggleRemoveAfterDrop: function(){
        EventActions.toggleRemoveAfterDrop()
    },
    render: function () {
        return (
            <form>
                <legend>
                    Draggable Events
                </legend>
                <ul id="external-events" className="list-unstyled">
                    {this.state.externalEvents.map(function (event, idx) {
                        return (<DraggableEvent event={event} key={idx}>
                                <span className={event.className}
                                      data-description={event.description}
                                      data-icon={event.icon}>
                                    {event.title}</span>
                        </DraggableEvent>)
                        })}
                </ul>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" id="drop-remove" className="checkbox style-0"
                              onClick={this._toggleRemoveAfterDrop}/>
                        <span>remove after drop</span>
                    </label>
                </div>
            </form>
        )
    }
});

export default ExternalEvents