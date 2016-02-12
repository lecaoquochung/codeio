import React from 'react'
import FlotChart from '../../../components/graphs/flot/FlotChart.jsx'

let Revenue = React.createClass({

    getDefaultProps: function () {
        return {
            targetsShow: true,
            actualsShow: true,
            signupsShow: true
        }
    },
    getInitialState: function(){
        return {
            data: this._getData()
        }
    },
    _getData: function(){
        let data = [];
        if(this.props.targetsShow) data.push(this._getTargetsData());
        if(this.props.actualsShow) data.push(this._getActualsData());
        if(this.props.signupsShow) data.push(this._getSignupsData());
        return data
    },
    _getChartOptions: function () {
        return {
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time"
            },
            yaxes: {
                tickFormatter: function (val, axis) {
                    return "$" + val;
                },
                max: 1200
            }
        }
    },
    componentWillReceiveProps: function (nextProps) {

    },
    _toggleProp: function (type) {
        this.props[type] = !this.props[type];
        this.setState({
            data: this._getData()
        })
    },
    _getTargetsData: function () {
        return {
            label : "Target Profit",
            data : [[1354586000000, 153], [1364587000000, 658], [1374588000000, 198], [1384589000000, 663], [1394590000000, 801], [1404591000000, 1080], [1414592000000, 353], [1424593000000, 749], [1434594000000, 523], [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]],
            bars : {
                show : true,
                align : "center",
                barWidth : 30 * 30 * 60 * 1000 * 80
            }
        }
    },
    _getActualsData: function () {
        return {
            label : "Actual Profit",
            data : [[1354586000000, 53], [1364587000000, 65], [1374588000000, 98], [1384589000000, 83], [1394590000000, 980], [1404591000000, 808], [1414592000000, 720], [1424593000000, 674], [1434594000000, 23], [1444595000000, 79], [1454596000000, 88], [1464597000000, 36]],
            color : '#3276B1',
            lines : {
                show : true,
                lineWidth : 3
            },
            points : {
                show : true
            }
        };
    },
    _getSignupsData: function () {
        return {
            label : "Actual Signups",
            data : [[1354586000000, 647], [1364587000000, 435], [1374588000000, 784], [1384589000000, 346], [1394590000000, 487], [1404591000000, 463], [1414592000000, 479], [1424593000000, 236], [1434594000000, 843], [1444595000000, 657], [1454596000000, 241], [1464597000000, 341]],
            color : '#71843F',
            lines : {
                show : true,
                lineWidth : 1
            },
            points : {
                show : true
            }
        }
    },
    render: function () {
        return (
            <div className={this.props.className} id={this.props.id}>

                <div className="widget-body-toolbar bg-color-white smart-form" id="rev-toggles">

                    <div className="inline-group">

                        <label htmlFor="gra-0" className="checkbox">
                            <input type="checkbox" id="gra-0" defaultChecked={this.props.targetsShow} onClick={this._toggleProp.bind(this, 'targetsShow')}/>
                            <i /> Target </label>
                        <label htmlFor="gra-1" className="checkbox">
                            <input type="checkbox" id="gra-1" defaultChecked={this.props.actualsShow} onClick={this._toggleProp.bind(this, 'actualsShow')}/>
                            <i /> Actual </label>
                        <label htmlFor="gra-2" className="checkbox">
                            <input type="checkbox" id="gra-2" defaultChecked={this.props.signupsShow} onClick={this._toggleProp.bind(this, 'signupsShow')}/>
                            <i /> Signups </label>
                    </div>

                    <div className="btn-group hidden-phone pull-right">
                        <a className="btn dropdown-toggle btn-xs btn-default" data-toggle="dropdown"><i
                            className="fa fa-cog"/> More <span className="caret"> </span> </a>
                        <ul className="dropdown-menu pull-right">
                            <li>
                                <a href-void><i className="fa fa-file-text-alt"/> Export to PDF</a>
                            </li>
                            <li>
                                <a href-void><i className="fa fa-question-sign"/> Help</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="padding-10">
                    <FlotChart className="chart-large has-legend-unique"
                         data={this.state.data} options={this._getChartOptions()} />
                </div>
            </div>
        )
    }
});

export default Revenue