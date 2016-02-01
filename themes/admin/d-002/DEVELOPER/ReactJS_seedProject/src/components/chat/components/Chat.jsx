import React from 'react'
import Reflux from 'reflux'

import ChatStore from '../stores/ChatStore'
import ChatActions from '../actions/ChatActions'

import ChatUsers from './ChatUsers.jsx'
import ChatBody from './ChatBody.jsx'
import ChatForm from './ChatForm.jsx'

let Chat = React.createClass({
    mixins: [Reflux.connect(ChatStore)],
    getInitialState: function(){
        return ChatStore._getData()
    },
    render: function () {
        return (
            <div className={this.props.className}>

                <ChatUsers users={this.state.users} />

                <ChatBody messages={this.state.messages}/>

                <ChatForm />
            </div>
        )
    }
});

export default Chat