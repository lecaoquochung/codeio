import React from 'react'
import ReactDOM from 'react-dom'

import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'

let UiSlider = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function(){
        this.loadScript('/vendor.ui.js').then(function(){
            $(ReactDOM.findDOMNode(this)).bootstrapSlider();

        }.bind(this))
    },
    render: function () {
        return <input type="text" {...this.props} />
    }
});

export default UiSlider