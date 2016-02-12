import React from 'react'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import {findDOMNode} from 'react-dom'

let Dropzone = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            let element = $(findDOMNode(this));
            let options = this.props.options || {};
            element.dropzone(options)
        }.bind(this))
    },
    render: function () {
        return (
           this.props.children
        )
    }
});

export default Dropzone