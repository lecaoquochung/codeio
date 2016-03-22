import React from 'react'

let SmartDestroySummernote = React.createClass({
    _onClick: function(){
        $(this.props.target).summernote('destroy');
    },
    render: function () {
        let {children, ...props} = this.props;
        return (
            <button {...props} onClick={this._onClick}>
                {children}
            </button>
        )
    }
});

export default SmartDestroySummernote