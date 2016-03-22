import React from 'react'
import Reflux from 'reflux'
import _ from 'lodash'

import NavigationStore from '../stores/NavigationStore'

let BigBreadcrumbs = React.createClass({
    mixins: [Reflux.listenTo(NavigationStore, 'onNavigationChange')],
    getInitialState: function () {
        return {
            items: this.props.items || [],
            icon: this.props.icon || 'fa fa-fw fa-home'
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
            this.state.icon = '';
            this._addCrumb(item);
            this.forceUpdate()
        }

    },
    _addCrumb: function(item){
        this.state.items.unshift(item.title)
        if(!this.state.icon && item.icon)
            this.state.icon = item.icon
        if(item.parent)
            this._addCrumb(item.parent)
    },

    render: function () {
        var first = _.first(this.state.items);

        return (
            <div className={this.props.className + ' big-breadcrumbs'}>
                <h1 className="page-title txt-color-blueDark">
                    <i className={this.state.icon}/>{' ' + first}
                    {_.rest(this.state.items).map(function (item) {
                        return <span key={_.uniqueId('big-breadcrumb-')}>
                            <span className="page-title-separator">&gt;</span>
                            {item}</span>
                    })}
                </h1>
            </div>
        )
    }
});

export default BigBreadcrumbs