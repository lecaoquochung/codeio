import React from 'react'


import SparklineContainer from  '../../../components/graphs/inline/SparklineContainer.jsx'
import EasyPieChartContainer from  '../../../components/graphs/inline/EasyPieChartContainer.jsx'
import FlotChart from '../../../components/graphs/flot/FlotChart.jsx'




let LiveStats = React.createClass({
    getInitialState: function(){
        return {
            liveSwitch: false,
            liveStats: [FakeDataSource.getRandomData()]
        }
    },
    _updateStats: function(){
        this.setState({

            liveStats: [FakeDataSource.getRandomData()]
        })
    },
    _toggleSwitch: function(){
        this.state.liveSwitch = !this.state.liveSwitch
        if(this.state.liveSwitch){
            this.interval = setInterval(this._updateStats, 1000)
        } else {
            clearInterval(this.interval);

        }
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function () {
        return (
            <div className={this.props.className} id={this.props.id}>
                <div className="row no-space">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <span className="demo-liveupdate-1"> <span
                        className="onoffswitch-title">Live switch</span> <span
                        className="onoffswitch">
                            <input type="checkbox" name="start_interval" onClick={this._toggleSwitch}
                                   className="onoffswitch-checkbox"
                                   id="start_interval"/>
                                <label className="onoffswitch-label"
                                       htmlFor="start_interval">
                                <span className="onoffswitch-inner"
                                      data-swchon-text="ON"
                                      data-swchoff-text="OFF"/>
                                    <span className="onoffswitch-switch"/>
                                </label> </span> </span>

                        <FlotChart className="chart-large txt-color-blue"  data={this.state.liveStats}
                                   options={liveStatsChartOptions} />

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats">

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12"><span
                                className="text"> My Tasks <span
                                className="pull-right">130/200</span> </span>

                                <div className="progress">
                                    <div className="progress-bar bg-color-blueDark"
                                         style={{width: '65%'}}></div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12"><span
                                className="text"> Transfered <span
                                className="pull-right">440 GB</span> </span>

                                <div className="progress">
                                    <div className="progress-bar bg-color-blue"
                                         style={{width: '34%' }}></div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12"><span
                                className="text"> Bugs Squashed<span
                                className="pull-right">77%</span> </span>

                                <div className="progress">
                                    <div className="progress-bar bg-color-blue"
                                         style={{width: '77%'}}></div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-12 col-lg-12"><span
                                className="text"> User Testing <span
                                className="pull-right">7 Days</span> </span>

                                <div className="progress">
                                    <div className="progress-bar bg-color-greenLight"
                                         style={{width: '84%'}}></div>
                                </div>
                            </div>

                            <span className="show-stat-buttons"> <span className="col-xs-12 col-sm-6 col-md-6 col-lg-6"> <a
                                href-void className="btn btn-default btn-block hidden-xs">Generate PDF</a> </span> <span
                                className="col-xs-12 col-sm-6 col-md-6 col-lg-6"> <a href-void
                                                                                     className="btn btn-default btn-block hidden-xs">Report
                                a bug</a> </span> </span>

                        </div>

                    </div>
                </div>

                <SparklineContainer className="show-stat-microcharts"
                                    data-easy-pie-chart-container>
                    <EasyPieChartContainer>
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">

                            <div className="easy-pie-chart txt-color-orangeDark" data-percent="33"
                                 data-pie-size="50">
                                <span className="percent percent-sign">35</span>
                            </div>
                                        <span className="easy-pie-title"> Server Load <i
                                            className="fa fa-caret-up icon-color-bad"/> </span>
                            <ul className="smaller-stat hidden-sm pull-right">
                                <li>
                                                <span className="label bg-color-greenLight"><i
                                                    className="fa fa-caret-up"/> 97%</span>
                                </li>
                                <li>
                                                <span className="label bg-color-blueLight"><i
                                                    className="fa fa-caret-down"/> 44%</span>
                                </li>
                            </ul>
                            <div className="sparkline txt-color-greenLight hidden-sm hidden-md pull-right"
                                 data-sparkline-type="line" data-sparkline-height="33px"
                                 data-sparkline-width="70px"
                                 data-fill-color="transparent">
                                130, 187, 250, 257, 200, 210, 300, 270, 363, 247, 270, 363, 247
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                            <div className="easy-pie-chart txt-color-greenLight" data-percent="78.9"
                                 data-pie-size="50">
                                <span className="percent percent-sign">78.9 </span>
                            </div>
                                        <span className="easy-pie-title"> Disk Space <i
                                            className="fa fa-caret-down icon-color-good"/></span>
                            <ul className="smaller-stat hidden-sm pull-right">
                                <li>
                                                <span className="label bg-color-blueDark"><i
                                                    className="fa fa-caret-up"/> 76%</span>
                                </li>
                                <li>
                                                <span className="label bg-color-blue"><i
                                                    className="fa fa-caret-down"/> 3%</span>
                                </li>
                            </ul>
                            <div className="sparkline txt-color-blue hidden-sm hidden-md pull-right"
                                 data-sparkline-type="line"
                                 data-sparkline-height="33px" data-sparkline-width="70px"
                                 data-fill-color="transparent">
                                257, 200, 210, 300, 270, 363, 130, 187, 250, 247, 270, 363, 247
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                            <div className="easy-pie-chart txt-color-blue" data-percent="23"
                                 data-pie-size="50">
                                <span className="percent percent-sign">23 </span>
                            </div>
                                        <span className="easy-pie-title"> Transfered <i
                                            className="fa fa-caret-up icon-color-good"/></span>
                            <ul className="smaller-stat hidden-sm pull-right">
                                <li>
                                    <span className="label bg-color-darken">10GB</span>
                                </li>
                                <li>
                                                <span className="label bg-color-blueDark"><i
                                                    className="fa fa-caret-up"/> 10%</span>
                                </li>
                            </ul>
                            <div className="sparkline txt-color-darken hidden-sm hidden-md pull-right"
                                 data-sparkline-type="line" data-sparkline-height="33px"
                                 data-sparkline-width="70px"
                                 data-fill-color="transparent">
                                200, 210, 363, 247, 300, 270, 130, 187, 250, 257, 363, 247, 270
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                            <div className="easy-pie-chart txt-color-darken" data-percent="36"
                                 data-pie-size="50">
                                <span className="percent degree-sign">36 <i className="fa fa-caret-up"/></span>
                            </div>
                            <span className="easy-pie-title"> Temperature <i
                                className="fa fa-caret-down icon-color-good"/></span>
                            <ul className="smaller-stat hidden-sm pull-right">
                                <li>
                                    <span className="label bg-color-red"><i className="fa fa-caret-up"/> 124</span>
                                </li>
                                <li>
                                    <span className="label bg-color-blue"><i className="fa fa-caret-down"/> 40 F</span>
                                </li>
                            </ul>
                            <div className="sparkline txt-color-red hidden-sm hidden-md pull-right"
                                 data-sparkline-type="line"
                                 data-sparkline-height="33px" data-sparkline-width="70px"
                                 data-fill-color="transparent">
                                2700, 3631, 2471, 2700, 3631, 2471, 1300, 1877, 2500, 2577, 2000, 2100, 3000
                            </div>
                        </div>
                    </EasyPieChartContainer>
                </SparklineContainer>

            </div>
        )
    }
});

let FakeDataSource = {
    data: [],
    total: 200,
    getRandomData: function(){
        if (this.data.length > 0)
            this.data = this.data.slice(1);

        // do a random walk
        while (this.data.length < this.total) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            this.data.push(y);
        }

        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i)
            res.push([i, this.data[i]])
        return res;
    }
};



let liveStatsChartOptions = {
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        min: 0,
        max: 100
    },
    colors: ['rgb(87, 136, 156)'],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        borderWidth: 0,
    },
    series: {
        lines: {
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [
                    {
                        opacity: 0.4
                    },
                    {
                        opacity: 0
                    }
                ]
            },
            steps: false

        }
    }
}


export default LiveStats