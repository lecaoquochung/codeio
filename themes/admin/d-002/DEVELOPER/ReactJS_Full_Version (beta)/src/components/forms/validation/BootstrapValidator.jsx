import React from 'react'
import _ from 'lodash'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import {findDOMNode} from 'react-dom'


let BootstrapValidator = React.createClass({

    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            $(findDOMNode(this)).bootstrapValidator(this.props.options || {})
        }.bind(this))
    },
    render: function () {
        return (
            this.props.children
        )
    }
});

export default BootstrapValidator