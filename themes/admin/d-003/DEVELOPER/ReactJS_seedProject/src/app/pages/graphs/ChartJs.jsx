import React from 'react'
import Reflux from 'reflux'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import ChartJsGraph from '../../../components/graphs/chartjs/ChartJsGraph.jsx'

import config from '../../config/config'


let actions = Reflux.createActions({
    init: {asyncResult: true}
});
actions.init.listen(function(){
    $.getJSON('api/graphs/chartjs.json').then(this.completed, this.failed)
});

// Update the store when the init action's promise is completed
let store = Reflux.createStore({
    listenables: actions,
    onInitCompleted: function(data){
        this.trigger(data)
    }
});


let ChartJs = React.createClass({
    mixins: [Reflux.connect(store)],
    componentWillMount: function () {
        actions.init()
    },
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                <WidgetGrid>
                    <div className="row">
                        <article className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <JarvisWidget editbutton={false}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-bar-chart-o"/> </span>
                                    <h2>Line Chart</h2>
                                </header>
                                <div>
                                    <div className="widget-body">
                                        <ChartJsGraph type="line" data={this.state['line-chart']} />
                                    </div>
                                </div>
                            </JarvisWidget>

                            <JarvisWidget editbutton={false}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-bar-chart-o"/> </span>
                                    <h2>Radar Chart</h2>
                                </header>
                                <div>
                                    <div className="widget-body">
                                        <ChartJsGraph type="radar" data={this.state['radar-chart']} />
                                    </div>
                                </div>
                            </JarvisWidget>

                            <JarvisWidget editbutton={false}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-bar-chart-o"/> </span>
                                    <h2>Polar Chart</h2>
                                </header>
                                <div>
                                    <div className="widget-body">
                                        <ChartJsGraph type="polar" data={this.state['polar-chart']} />
                                    </div>
                                </div>
                            </JarvisWidget>

                        </article>

                        <article className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

                            <JarvisWidget editbutton={false}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-bar-chart-o"/> </span>
                                    <h2>Bar Chart</h2>
                                </header>
                                <div>
                                    <div className="widget-body">
                                        <ChartJsGraph type="bar" data={this.state['bar-chart']} />
                                    </div>
                                </div>
                            </JarvisWidget>


                            <JarvisWidget editbutton={false}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-bar-chart-o"/> </span>
                                    <h2>Doughnut Chart</h2>
                                </header>
                                <div>
                                    <div className="widget-body">
                                        <ChartJsGraph type="doughnut" data={this.state['doughnut-chart']} />
                                    </div>
                                </div>
                            </JarvisWidget>


                            <JarvisWidget editbutton={false}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-bar-chart-o"/> </span>
                                    <h2>Pie Chart</h2>
                                </header>
                                <div>
                                    <div className="widget-body">
                                        <ChartJsGraph type="pie" data={this.state['pie-chart']} />
                                    </div>
                                </div>
                            </JarvisWidget>

                        </article>
                    </div>
                </WidgetGrid>
            </div>
        )
    }
});

export default ChartJs