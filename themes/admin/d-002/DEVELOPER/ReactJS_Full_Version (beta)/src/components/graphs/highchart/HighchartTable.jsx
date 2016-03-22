import React from 'react'
import {findDOMNode} from 'react-dom'
import ScriptLoader from '../../utils/mixins/ScriptLoader.jsx'


class HighchartTable extends React.Component {
    componentDidMount() {
        ScriptLoader.loadScript(
            '/vendor.graphs.js'
        ).then(function () {
            this._renderChart()
        }.bind(this))
    }

    componentWillReceiveProps(nextProps) {
        this._renderChart()
    }

    _renderChart() {
        $(findDOMNode(this)).highchartTable();
    }

    render() {
        let {children, ...props} = {...this.props};
        return (
            <table {...props}>
                {children}
            </table>
        )
    }
}

export default HighchartTable