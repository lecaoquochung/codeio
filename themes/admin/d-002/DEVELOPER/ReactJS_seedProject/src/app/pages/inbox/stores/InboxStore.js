/**
 * Created by griga on 12/8/15.
 */

import Reflux from 'reflux'

import InboxActions from './../actions/InboxActions'

let InboxStore = Reflux.createStore({
    listenables: InboxActions,
    init: function(){
        this.data = {
            folders: {},
            labels: {},
            space: {},
            message: {
                contact: {}
            },
            messages: []
        }
    },
    onInitCompleted: function(data){
        this.data = data
        this.trigger(this.data)
    },
    getData: function(){
        return this.data
    },
    getFolder: function(key){
        return this.data.folders[key] || (this.data.folders.inbox || {})
    }
});


export default InboxStore
