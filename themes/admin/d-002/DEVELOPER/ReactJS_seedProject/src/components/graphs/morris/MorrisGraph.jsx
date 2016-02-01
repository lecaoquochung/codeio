import React from 'react'
import {findDOMNode} from 'react-dom'
import _ from 'lodash'

import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'


let MorrisGraph = React.createClass({
    componentDidMount: function () {
        ScriptLoader.loadScript([
            '/vendor.graphs.js'
        ]).then(function () {
            this._renderChart(this.props.data)
        }.bind(this))
    },
    componentWillReceiveProps: function (nextProps) {
        ScriptLoader.loadScript([
            '/vendor.graphs.js'
        ]).then(function () {
            this._renderChart(this.props.data)
        }.bind(this))
    },
    _renderChart: function (data) {
        if (data) {
            let options = {
                element: findDOMNode(this),
                data: data
            };
            _.each(['xkey', 'ykeys', 'labels', 'pointSize', 'hideHover', 'stacked', 'grid',
                'barColors', 'formater', 'events', 'units', 'xLabels', 'xLabelFormat', 'parseTime'], function (key) {
                if (_.has(this.props, key)) options[key] = this.props[key];
            }.bind(this));

            switch (this.props.type) {
                case 'area':
                    Morris.Area(options);
                    break;
                case 'bar':
                    Morris.Bar(options);
                    break;
                case 'line':
                    Morris.Line(options);
                    break;
                case 'donut':
                    Morris.Donut(options);
                    break;
            }
        }
    },
    render: function () {
        return (
            <div className="chart no-padding" />
        )
    }
});

export default MorrisGraph