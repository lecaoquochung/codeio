import React from 'react'

let Message = React.createClass({
    render: function () {
        let item = this.props.item;
        return (
            <span className={item.status}>
                <a className="msg">
                    <img src={item.image} alt="" className="air air-top-left margin-top-5" width="40"
                         height="40"/>
                    <span className="from">{item.title}</span>
                    <time>{item.time}</time>
                    <span className="subject">{item.subject}</span>
                    <span className="msg-body">{item.message}</span>
                </a>
            </span>
        )
    }
});

export default Message