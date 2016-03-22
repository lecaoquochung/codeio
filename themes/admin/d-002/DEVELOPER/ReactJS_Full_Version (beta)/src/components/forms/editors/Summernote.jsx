import React from 'react'
import ReactDOM from 'react-dom'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import ElementHolder from '../../utils/mixins/ElementHolder.jsx'


let Summernote = React.createClass({
    mixins: [ScriptLoader, ElementHolder],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            $(this.getHold()).summernote({
                height: this.props.height || 270
            })
        }.bind(this))
    },
    componentWillUnmount: function(){
        $(this.getHold()).summernote('destroy');
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