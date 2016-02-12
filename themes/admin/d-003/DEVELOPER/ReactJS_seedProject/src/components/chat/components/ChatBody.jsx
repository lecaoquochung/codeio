import React from 'react'
import Reflux from 'reflux'
import ReactDom from 'react-dom'
import Moment from '../../utils/Moment.jsx'
import HtmlRender from '../../utils/HtmlRender.jsx'
import ChatStore from '../stores/ChatStore'
import ChatActions from '../actions/ChatActions'

let ChatBody = React.createClass({
    _messageTo: function(user){
        ChatActions.messageTo(user)
    },
    componentDidUpdate: function(){
        var $ref = $(ReactDom.findDOMNode(this));
        $ref.animate({scrollTop: $ref[0].scrollHeight});
    },
    render: function () {
        let messages = this.props.messages || [];

        return (
            <div id="chat-body" className="chat-body custom-scroll">
                <ul>
                    {messages.map(function(message, idx){
                        return(<li className="message" key={'chat-message-'+idx}>
                            <img className="message-picture online" src={message.user.picture}/>

                            <div className="message-text">
                                <time>
                                    <Moment date={message.date} />
                                </time>

                                <a onClick={this._messageTo.bind(this, message.user)} className="username">{message.user.username}</a>

                                <HtmlRender html={message.body}/>
                            </div>
                        </li>)
                        }.bind(this))}
                </ul>
            </div>
        )
    }
});

export default ChatBody