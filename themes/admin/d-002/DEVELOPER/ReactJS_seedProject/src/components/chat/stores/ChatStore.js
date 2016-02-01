import Reflux from 'reflux'

import ChatActions from './../actions/ChatActions'
import UserStore from '../../user/stores/UserStore'

let chatData = {
    user: {},
    users: [],
    messages: [],
    message: ''
}
let ChatStore = Reflux.createStore({

    init: function () {

        this.listenTo(UserStore, this._userUpdate);
    },
    _userUpdate: function (user) {
        chatData.user = user
    },
     _getData: function(){
        return chatData
     },
    listenables: ChatActions,
    onInitCompleted: function (data) {
        _.assign(chatData, data)
        this.trigger(chatData)
    },
    onMessageTo: function (user) {
        chatData.message += (user.username + ', ')
        this.trigger(chatData)
    },
    onMessageUpdate: function (message) {
        chatData.message = message
    },
    onSend: function () {
        var message = {
            user: chatData.user,
            body: chatData.message,
            date: new Date()
        };
        chatData.messages.push(message);
        chatData.message = '';
        this.trigger(chatData)
    }
});

export default ChatStore