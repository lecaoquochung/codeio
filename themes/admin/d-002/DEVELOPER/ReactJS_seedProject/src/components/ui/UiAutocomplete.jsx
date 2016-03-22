import React from 'react'
import ReactDOM from 'react-dom'

let UiAutocomplete = React.createClass({
    componentDidMount: function(){
        $(ReactDOM.findDOMNode(this)).autocomplete({
            source: this.props.source
        });
    },
    render: function () {

        return <input type="text" {...this.props} />
    }
});

export default UiAutocomplete