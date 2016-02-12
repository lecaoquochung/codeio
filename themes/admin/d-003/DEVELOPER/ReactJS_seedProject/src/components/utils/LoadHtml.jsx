import React from 'react'

let LoadHtml = React.createClass({
    componentDidMount: function(){
        this._process(this.props.url);
    },

    render: function () {
        return (
            <div ref="viewport" />
        )
    },
    _process: function (url) {
        $.get(url).then(function (res) {
            $(this.refs.viewport).html(res);
        }.bind(this))
    }
});

export default LoadHtml