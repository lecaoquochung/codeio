import React from 'react'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import {findDOMNode} from 'react-dom'

require('bootstrap-markdown');

let MarkdownEditor = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            $(findDOMNode(this)).markdown()
        }.bind(this))
    },

    render: function () {
        return (
            <textarea defaultValue={this.props.value} className={this.props.className}/>
        )
    }
});

export default MarkdownEditor