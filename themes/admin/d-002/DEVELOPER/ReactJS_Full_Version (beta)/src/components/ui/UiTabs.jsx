import React from 'react'
import ReactDOM from 'react-dom'

let UiTabs = React.createClass({
    componentDidMount: function(){
        $(ReactDOM.findDOMNode(this)).tabs();
    },
    render: function () {
        let {children, ...props} = this.props;
        return (
            <div {...props}>
                {children}
            </div>
        )
    }
});

export default UiTabs