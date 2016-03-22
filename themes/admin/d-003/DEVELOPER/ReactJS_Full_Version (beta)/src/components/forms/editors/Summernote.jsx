import React from 'react'
import {findDOMNode} from 'react-dom'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import ElementHolder from '../../utils/mixins/ElementHolder.jsx'


let Summernote = React.createClass({
    componentDidMount: function () {
        ScriptLoader.loadScript('/vendor.ui.js').then(function(){
            $(findDOMNode(this)).summernote({
                height: this.props.height || 270
            })
        }.bind(this))
    },
    componentWillUnmount: function(){
        $(findDOMNode(this)).summernote('destroy');
    },
    render: function () {
        let {children, ...props} = this.props;
        return (
            <div {...props}>
                {children}
            </div>
        )
    }
});

export default Summernote