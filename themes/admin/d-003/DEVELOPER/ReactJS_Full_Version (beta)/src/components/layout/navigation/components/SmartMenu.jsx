/**
 * Created by griga on 11/30/15.
 */

import React from 'react'
import Reflux from 'reflux'
import _ from 'lodash'
import {Link}  from 'react-router'
import classnames from 'classnames'

import SmartMenuList from './SmartMenuList.jsx'

import NavigationStore from './../stores/NavigationStore.js'
import NavigationActions from './../actions/NavigationActions.js'

let config = window.SMARTADMIN_GLOBALS;

let SmartMenu = React.createClass({
    mixins:[Reflux.connect(NavigationStore)],
    getInitialState: function () {
        if(this.props.rawItems){
            NavigationStore.initRawItems(this.props.rawItems)
        }
        return NavigationStore.getData()
    },
    render: function () {
        return (
            <SmartMenuList items={this.state.items} />
        )
    }
});

export default SmartMenu