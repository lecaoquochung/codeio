import React from 'react'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import {findDOMNode} from 'react-dom'

let Clockpicker = React.createClass({
    mixins: [ScriptLoader],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            let element = $(findDOMNode(this));
            let options = {
                placement: 'top',
                donetext: 'Done'
            };
            element.clockpicker(options);
        }.bind(this))
    },
    render: function () {
        return (
            <input type="text" {...this.props}/>
        )
    }
});

export default Clockpicker