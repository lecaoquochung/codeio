import React from 'react'

import {findDOMNode} from 'react-dom'

import ScriptLoader from '../utils/mixins/ScriptLoader.jsx'

let SmartNestable = React.createClass({

    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function () {

            let element = $(findDOMNode(this))
            let options = {};
            if(this.props.group){
                options.group = this.props.group;
            }
            element.nestable(options);

            if(this.props.onChange){
                element.on('change', function(){
                    this.props.onChange(element.nestable('serialize'))
                }.bind(this));
                this.props.onChange(element.nestable('serialize'))
            }

        }.bind(this))
    },
    render: function () {
        return (
            this.props.children
        )
    }
});

export default SmartNestable