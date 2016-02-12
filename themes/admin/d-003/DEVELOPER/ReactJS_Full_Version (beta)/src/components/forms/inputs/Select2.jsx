import React from 'react'
import ReactDOM from 'react-dom'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import ElementHolder from '../../utils/mixins/ElementHolder.jsx'

let Select2 = React.createClass({
    mixins: [ScriptLoader, ElementHolder],
    componentDidMount: function () {
        this.loadScript('/vendor.ui.js').then(function(){
            $(this.getHold()).select2()
        }.bind(this))
    },
    componentWillUnmount: function () {
        $(this.getHold()).select2('destroy');
    },
    render: function () {
        let {children, ...props} = this.props;
        return (
            <select {...props}>
                {children}
            </select>
        )
    }

});

export default Select2