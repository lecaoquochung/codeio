import React from 'react'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import {findDOMNode} from 'react-dom'

let Timepicker = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            let element = $(findDOMNode(this));
            element.knob(this.props)
        }.bind(this))
    },
    render: function () {
        return (
            <input type="text" className={this.props.className} defaultValue={this.props.defaultValue}/>
        )
    }
});

export default Timepicker