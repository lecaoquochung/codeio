import React from 'react'
import ReactDOM from 'react-dom'

import ScriptLoader from '../utils/mixins/ScriptLoader.jsx'

let UiProgressbar = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function(){
        this.loadScript('/vendor.ui.js').then(function(){
            $(ReactDOM.findDOMNode(this)).progressbar({
                display_text : 'fill'
            })

        }.bind(this))
    },
    render: function () {
        return <div {...this.props} />
    }
});

export default UiProgressbar