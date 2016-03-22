import React from 'react'
import classnames from 'classnames'
import Moment from '../utils/Moment.jsx'

import Message from './Message.jsx'
import Notification from './Notification.jsx'
import Task from './Task.jsx'

let Components = {
    Message: Message,
    Notification: Notification,
    Task: Task
};

let ActivitiesDropdown = React.createClass({
    getInitialState: function () {
        return {
            activity: {
                items: []
            },
            activities: [],
            lastUpdate: new Date()
        }
    },
    _active: false,
    render: function () {
        let activities = this.state.activities;
        let activity = this.state.activity;
        let count = _.sum(activities, function (a) {
            return a.length
        });
        return (
            <div>
                <span id="activity" onClick={this._toggleDropdown} ref="dropdownToggle" className="activity-dropdown">
                    <i className="fa fa-user"/>
                    <b className="badge bg-color-red">{count}</b>
                </span>
                <div className="ajax-dropdown" ref="dropdown">

                    <div className="btn-group btn-group-justified" data-toggle="buttons">
                        {activities.map(function (_activity, idx) {
                            return (
                                <label className={classnames(["btn", "btn-default",{
                                    active: _activity.name == activity.name
                                }])} key={idx} onClick={this._setActivity.bind(this, _activity)}
                                >
                                    <input type="radio" name="activity"/>
                                    {_activity.title} ({_activity.length})
                                </label>

                            )
                        }.bind(this))}
                    </div>

                    {/* notification content */}
                    <div className="ajax-notifications custom-scroll">
                        <ul className="notification-body">
                        {activity.items.map(function(item, idx){
                            let component = Components[item.type]
                            return  <li key={idx}>{React.createElement(component, {
                                    item: item,
                                    lastUpdated: this.state.lastUpdated
                                })}</li>
                        }.bind(this))}
                        </ul>
                    </div>
                    {/* end notification content */}

                    {/* footer: refresh area */}
                    <span> Last updated on: <Moment data={this.state.lastUpdate} format="h:mm:ss a"/>
                  <button type="button" onClick={this._update}
                          className="btn btn-xs btn-default pull-right">
                      <i ref="loadingSpin" className="fa fa-refresh"/>
                      <span ref="loadingText"/>
                  </button>
                  </span>
                    {/* end footer */}

                </div>
            </div>
        )
    },
    _setActivity: function (_activity) {
        this.setState({
            activity: _activity
        })
    },

    _toggleDropdown: function (e) {
        e.preventDefault();
        let $dropdown = $(this.refs.dropdown);
        let $dropdownToggle = $(this.refs.dropdownToggle);

        if (this._active) {
            $dropdown.fadeOut(150)
        } else {
            $dropdown.fadeIn(150)
        }

        this._active = !this._active;
        $dropdownToggle.toggleClass('active', this._active)
    },
    componentWillMount: function () {
        this._fetch()
    },
    _update: function(){
        $(this.refs.loadingText).html('Loading...');
        $(this.refs.loadingSpin).addClass('fa-spin');
        this._fetch().then(function(){
            $(this.refs.loadingText).html('');
            $(this.refs.loadingSpin).removeClass('fa-spin');
        }.bind(this))
    },
    _fetch: function () {
        return $.getJSON(this.props.url).then(function (activities) {
            this.setState({
                activities: activities,
                activity: activities[0],
                lastUpdate: new Date()
            })
        }.bind(this))
    }

});

export default ActivitiesDropdown