import React from 'react'

let HtmlRender = React.createClass({
    rawMarkup: function(){
        return { __html: this.props.html }
    },
    render: function () {
        return ( this.props.html ?
            <p {...this.props} dangerouslySetInnerHTML={this.rawMarkup()} ></p>
        : null)
    }
});

export default HtmlRender