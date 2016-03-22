import React from 'react'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import {findDOMNode} from 'react-dom'

let IonSlider = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            $(findDOMNode(this)).ionRangeSlider();
        }.bind(this))
    },
    render: function () {
        return (
            <input {...this.props}/>
        )
    }
});

export default IonSlider