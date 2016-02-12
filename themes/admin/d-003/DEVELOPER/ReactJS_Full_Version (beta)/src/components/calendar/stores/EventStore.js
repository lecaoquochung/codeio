/**
 * Created by griga on 12/11/15.
 */

import _ from 'lodash'
import Reflux from 'reflux'
import actions from '../actions/EventActions'


let data = {
    externalEvents: require('./external.js'),
    events: require('./events.js'),
    removeAfterDrop: false

};

let EventStore = Reflux.createStore({
    listenables: actions,
    onAddExternalEvent: function (external) {

        let event = _.defaults(external, {
            title: "Untitled Event",
            description: "no description",
            className: "bg-color-darken txt-color-white",
            icon: "fa-info"
        }, external)
        data.externalEvents.push(event);
        this.trigger(_.pick(data, 'externalEvents'))
    },
    onDropExternal: function(external){
        // is the "remove after drop" checkbox checked?
        if (data.removeAfterDrop) {
            // if so, remove the element from the "Draggable Events" list
            this.onRemoveExternalEvent(external);
        }
    },

    onRemoveExternalEvent: function(external){
        data.externalEvents = _.without(data.externalEvents, external)
        this.trigger(data)
    },
    onToggleRemoveAfterDrop: function(){
        data.removeAfterDrop = !data.removeAfterDrop
    },
    _getData: function () {
        return data;
    }
});


export default EventStore