import React from 'react'
import classnames from 'classnames'
import LinkStateMixin from 'react-addons-linked-state-mixin'
import ChatActions from '../actions/ChatActions'


let ChatUsers = React.createClass({
    mixins: [
        LinkStateMixin
    ],
    getInitialState: function () {
        return {
            open: false,
            chatUserFilter: ''
        }
    },
    _openToggle: function () {
        this.setState({
            open: !this.state.open
        })
    },
    _messageTo: function (user) {
        ChatActions.messageTo(user)
    },
    render: function () {
        return (
            <div id="chat-container" className={classnames({
                open: this.state.open
            })}>
                <span className="chat-list-open-close" onClick={this._openToggle}><i
                    className="fa fa-user"/><b>!</b></span>

                <div className="chat-list-body custom-scroll">
                    <ul id="chat-users">
                        {
                            (this.props.users || [])
                                .filter(function(user){
                                    let filter = this.state.chatUserFilter.trim();
                                    return !filter || user.username.toLowerCase().search(filter.toLowerCase()) > -1
                                }.bind(this))
                                .map(function(user, idx){
                                    let statusColorClass = (user.status == 'online' ? 'txt-color-green':
                                    (user.status == 'away' ? 'txt-color-orange' :
                                        (user.status == 'busy' ? 'txt-color-red':
                                            'txt-color-white')))
                                return (
                                <li key={'chat-user-'+idx}>
                                    <a onClick={this._messageTo.bind(this, user)}><img
                                        src={user.picture}/>{user.username} <span
                                        className="badge badge-inverse">{user.username.length}</span><span
                                        className="state"><i
                                        className={classnames(
                                            'fa', 'fa-circle', 'pull-right', statusColorClass
                                        )}/></span></a>
                                </li>
                                    )}.bind(this))
                            }
                    </ul>
                </div>
                <div className="chat-list-footer">
                    <div className="control-group">
                        <form className="smart-form">
                            <section>
                                <label className="input">
                                    <input type="text" valueLink={this.linkState('chatUserFilter')}
                                           id="filter-chat-list"
                                           placeholder="Filter"/>
                                </label>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});

export default ChatUsers