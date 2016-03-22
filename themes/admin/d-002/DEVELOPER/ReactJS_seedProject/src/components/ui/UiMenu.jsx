import React from 'react'
import ReactDOM from 'react-dom'

let UiMenu = React.createClass({
    componentDidMount: function(){
        $(ReactDOM.findDOMNode(this)).menu();
    },
    render: function () {
        return this.props.children
    }
});

export default UiMenu