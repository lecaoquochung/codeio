import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import Reflux from 'reflux'

import ChatActions from '../actions/ChatActions'
import ChatStore from '../stores/ChatStore'

let ChatForm = React.createClass({
    mixins: [
        Reflux.listenTo(ChatStore, 'updateFromStore'),
        LinkedStateMixin],
    getInitialState: function () {
        return {
            message: '',
            enterToSend: false
        }
    },
    _sendMessage: function () {
        ChatActions.send(this.state.message)
    },
    _onKeyDown: function (event) {
        if(event.which == 13 && !event.shiftKey && this.state.enterToSend){
            this._sendMessage()
        } else {
            ChatActions.messageUpdate(this.state.message)
        }
    },
    updateFromStore: function (data) {
        this.setState({
            message: data.message
        })
    },
    render: function () {
        return (
            <div className="chat-footer">

                {/* CHAT TEXTAREA */}
                <div className="textarea-div">
                    <div className="typearea">
                        <textarea onKeyPress={this._onKeyDown} placeholder="Write a reply..." id="textarea-expand"
                                  className="custom-scroll"
                                  valueLink={this.linkState('message')}/>
                    </div>
                </div>

                {/* CHAT REPLY/SEND */}
                <span className="textarea-controls">
                    <button className="btn btn-sm btn-primary pull-right"
                            onClick={this._sendMessage}>
                        Reply
                    </button> <span className="pull-right smart-form"
                                    style={{marginTop:'3px',marginRight:'10px',}}> <label
                    className="checkbox pull-right">
                    <input type="checkbox" name="subscription" id="subscription"
                           checkedLink={this.linkState('enterToSend')}/>
                    <i/>Press <strong> ENTER </strong> to send </label> </span> <a
                    href-void="" className="pull-left"><i
                    className="fa fa-camera fa-fw fa-lg"/></a> </span>

            </div>
        )
    }
});

export default ChatForm