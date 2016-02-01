import React from 'react'
import Reflux from 'reflux'
import _ from 'lodash'

import NavigationStore from '../stores/NavigationStore'

let SmallBreadcrumbs = React.createClass({
    mixins: [Reflux.listenTo(NavigationStore, 'onNavigationChange')],
    getInitialState: function () {
        return {
            items: this.props.items || []
        }
    },
    componentWillMount: function(){
        if(!this.props.items && NavigationStore.getData().item){
            this.onNavigationChange({
                item: NavigationStore.getData().item
            })
        }
    },

    onNavigationChange: function (data) {
        let item = data.item;
        if(item.route) {
            this.state.items = [];
            this._addCrumb(item);
            this.forceUpdate()
        }

    },
    _addCrumb: function(item){
        this.state.items.unshift(item.title)
        if(item.parent)
            this._addCrumb(item.parent)
    },

    render: function () {
        return (
            <ol className="breadcrumb">
                <li>Home</li>
                {this.state.items.map(function(item, idx){
                    return <li key={idx}>{item}</li>
                })}
            </ol>
        )
    }
});

export default SmallBreadcrumbs