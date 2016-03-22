import React from 'react'
import Reflux from 'reflux'
import LinkedStateMixin from 'react-addons-linked-state-mixin'

import classnames from 'classnames'

import AsideChatUser from './AsideChatUser.jsx'

import ChatStore from '../stores/ChatStore'
import ChatActions from '../actions/ChatActions'


let AsideChatWidget = React.createClass({
    mixins: [Reflux.connect(ChatStore), LinkedStateMixin],
    getInitialState: function () {
        return {
            open: false,
            filter: ''
        }
    },
    componentWillMount: function(){
        ChatActions.init();
    },
    _openToggle: function (e) {
        this.setState({
            open: !this.state.open
        });
        $(this.refs.chatUsersList).slideToggle();
        e.preventDefault()
    },
    render: function () {
        let users = this.state.users || [];
        return (
            <ul>
                <li className={classnames({
                    'chat-users': true,
                    'top-menu-invisible': true,
                    'open': this.state.open
                })}>
                    <a href="#" onClick={this._openToggle}><i className="fa fa-lg fa-fw fa-comment-o"><em
                        className="bg-color-pink flash animated">!</em></i>&nbsp;<span className="menu-item-parent">Smart Chat API <sup>beta</sup></span></a>
                    <ul ref="chatUsersList">
                        <li>
                            <div className="display-users">
                                <input className="form-control chat-user-filter" placeholder="Filter" type="text" valueLink={this.linkState('filter')}/>
                                <dl>
                                    { users.filter(function(user){
                                        let filter = this.state.filter.trim();
                                        return !filter || user.username.toLowerCase().search(filter.toLowerCase()) > -1
                                        }.bind(this)).map(function(user, idx){
                                        return <AsideChatUser key={'aside-chat-user-'+idx} user={user}/>
                                        }) }
                                </dl>
                                {/*<a href="chat.html" className="btn btn-xs btn-default btn-block sa-chat-learnmore-btn">About the API</a>*/}
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
});

export default AsideChatWidget