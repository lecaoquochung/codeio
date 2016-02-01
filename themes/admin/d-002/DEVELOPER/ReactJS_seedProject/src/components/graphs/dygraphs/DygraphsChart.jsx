import React from 'react'

import ElementHolder from '../../utils/mixins/ElementHolder.jsx'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'

let DygraphsChart = React.createClass({
    mixins: [ScriptLoader, ElementHolder],
    componentDidMount: function () {
        this.loadScript(
            '/vendor.graphs.js'
        ).then(function () {
            this._renderChart(this.props.data)
        }.bind(this))
    },
    componentWillReceiveProps: function (nextProps) {
        this._renderChart(nextProps.data)
    },
    _renderChart: function (data) {
        if (data) {
            new Dygraph(this.getHold(), data, this.props.options||{})
        }
    },

    render: function () {
        return (
            <div style={this.props.style}/>
        )
    }
});

export default DygraphsChart