import React from 'react'
import ReactDOM from 'react-dom'

let UiAccordion = React.createClass({
    componentDidMount: function(){
        $(ReactDOM.findDOMNode(this)).accordion({
            autoHeight : false,
            heightStyle : "content",
            collapsible : true,
            animate : 300,
            icons: {
                header: "fa fa-plus",    // custom icon class
                activeHeader: "fa fa-minus" // custom icon class
            },
            header : "h4"
        })
    },
    render: function () {
        return this.props.children
    }
});

export default UiAccordion