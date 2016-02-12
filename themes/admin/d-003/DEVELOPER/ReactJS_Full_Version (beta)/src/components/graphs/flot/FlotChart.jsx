require("script!flot")
require("script!flot-resize")
require("script!flot-fillbetween")
require("script!flot-orderBar")
require("script!flot-pie")
require("script!flot-time")
require("script!flot-tooltip")

import React from 'react'
import _ from 'lodash'

//import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'
import ElementHolder from '../../utils/mixins/ElementHolder.jsx'

let FlotChart = React.createClass({
    mixins: [ ElementHolder],
    componentDidMount: function () {
        this._renderChart(this.props.data);
    },
    componentWillReceiveProps: function (nextProps) {
        if(JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data))
            this._renderChart(nextProps.data)
    },
    _renderChart: function (data) {
        if (data)
            $.plot(this.getHold(), data, this.props.options)
    },
    shouldComponentUpdate(nextProps, nextState){
        return JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data)
    },
    render: function () {
        let className = this.props.className || 'chart';
        return (
            <div className={className}/>
        )
    }
});

export default FlotChart