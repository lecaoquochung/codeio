import React from 'react'
import {Popover, OverlayTrigger} from 'react-bootstrap'

import chatboxManager from 'chatbox'

import HtmlRender from '../../utils/HtmlRender.jsx'

let AsideChatUser = React.createClass({
    getInitialState: function(){
        return {
            chatId: _.uniqueId('chatbox-user')
        }
    },
    _openChatBox: function (e) {
        e.preventDefault();
        let user = this.props.user;
        let [firstname, lastname] = user.username.split(/ /);
        let id = this.state.chatId;
        if (!user.status != 'ofline') {
            chatboxManager.addBox(id, {
                title: user.username,
                first_name: firstname,
                last_name: lastname,
                status: user.status || 'online',
                alertmsg: user.status == 'busy' ? user.username + ' is in a meeting. Please do not disturb!' : '',
                alertshow: user.status == 'busy'
                //you can add your own options too
            });
        }

    },
    render: function () {
        let user = this.props.user;
        let {firstname, lastname} = user.username.split(/ /);
        return (
            <dt>
                <OverlayTrigger placement="right" overlay={<Popover id="popover-1-popover">
										<div className="usr-card">
											<img src={user.picture} alt={user.username}/>
											<div className="usr-card-content">
												<h3>{user.username}</h3>

												<HtmlRender html={user.role} tag="p" />

											</div>
										</div>
									</Popover>}><a href="#" className="usr" onClick={this._openChatBox}
                                                   data-chat-id={this.state.chatId}
                                                   data-chat-status={user.status}
                                                   >
                    <i/>{user.username}
                </a></OverlayTrigger>
            </dt>
        )
    }
});

export default AsideChatUser