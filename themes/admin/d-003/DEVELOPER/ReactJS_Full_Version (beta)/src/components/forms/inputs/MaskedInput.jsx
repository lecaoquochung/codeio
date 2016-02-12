import React from 'react'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import {findDOMNode} from 'react-dom'

let MaskedInput = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            var options = {};
            if(this.props.maskPlaceholder) options.placeholder =  this.props.maskPlaceholder;
            $(findDOMNode(this)).mask(this.props.mask, options);
        }.bind(this))
    },
    render: function () {
        return (
            <input {...this.props}/>
        )
    }
});

export default MaskedInput