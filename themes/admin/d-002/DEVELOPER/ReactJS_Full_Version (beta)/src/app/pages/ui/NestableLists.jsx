import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import SmartNestable from '../../../components/ui/SmartNestable.jsx'

import EasyPieChart from '../../../components/graphs/inline/EasyPieChart.jsx'
let NestableLists = React.createClass({
    getInitialState: function(){
        return {
            demoOutput1: '',
            demoOutput2: ''
        }

    },
    onChange1: function(output){
        this.setState({
            demoOutput1: output
        })
    },
    onChange2: function(output){
        this.setState({
            demoOutput2: output
        })
    },
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['UI Elements', 'Nestable Lists']} icon="desktop"
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>
                {/* widget grid */}
                <WidgetGrid>
                    {/* row */}
                    <div className="row">
                        {/* NEW WIDGET START */}
                        <article className="col-sm-12">
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget className="well">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-comments"/> </span>
                                    <h2>My Data </h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <div id="nestable-menu">
                                            <button type="button" className="btn btn-default" data-action="expand-all">
                                                Expand All
                                            </button>
                                            <button type="button" className="btn btn-default"
                                                    data-action="collapse-all">
                                                Collapse All
                                            </button>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-4">
                                                <h6>Nestable List #1</h6>
                                                <SmartNestable group="1" onChange={this.onChange1}>
                                                    <div className="dd">
                                                        <ol className="dd-list">
                                                            <li className="dd-item" data-id="1">
                                                                <div className="dd-handle">
                                                                    Item 1 <span>- Description Field</span>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id="2">
                                                                <div className="dd-handle">
                                                                    <h4><span className="semi-bold">Item 2 </span> - Big
                                                                        Header</h4>
                                                                    <span>Description with piechart</span>
                                                                    <div className="air air-top-right padding-7">
                                                                        <EasyPieChart
                                                                            className="easy-pie-chart text-danger easyPieChart"
                                                                            percent={33} pieSize={40}
                                                                            trackColor="rgba(169, 3, 41,0.07)">
                                                                            <span
                                                                                className="percent percent-sign txt-color-red font-xs"/>
                                                                        </EasyPieChart>
                                                                    </div>
                                                                </div>
                                                                <ol className="dd-list">
                                                                    <li className="dd-item" data-id="3">
                                                                        <div className="dd-handle">
                                                                            Item 3
                                                                        </div>
                                                                    </li>
                                                                    <li className="dd-item" data-id="4">
                                                                        <div className="dd-handle">
                                                                            Item 4
                                                                            <em className="label pull-right label-primary">
                                                                                Label ID
                                                                            </em>
                                                                        </div>
                                                                    </li>
                                                                    <li className="dd-item" data-id="5">
                                                                        <div className="dd-handle">
                                                                            Item 5
                                                                        </div>
                                                                        <ol className="dd-list">
                                                                            <li className="dd-item" data-id="6">
                                                                                <div
                                                                                    className="dd-handle bg-color-blue txt-color-white">
                                                                                    <i>Item 6 (italic)</i>
                                                                                </div>
                                                                            </li>
                                                                            <li className="dd-item" data-id="7">
                                                                                <div
                                                                                    className="dd-handle bg-color-pink txt-color-white">
                                                                                    <strong>Item 7 (bold)</strong>
                                                                                </div>
                                                                            </li>
                                                                            <li className="dd-item" data-id="8">
                                                                                <div
                                                                                    className="dd-handle bg-color-greenLight txt-color-white">
                                                                                    <strong><i>Item 8 (Bold +
                                                                                        Italic)</i></strong>
                                                                                </div>
                                                                            </li>
                                                                        </ol>
                                                                    </li>
                                                                    <li className="dd-item" data-id="9">
                                                                        <div className="dd-handle">
                                                                            Item 9
                                                                            <em className="badge pull-right bg-color-purple">
                                                                                99
                                                                            </em>
                                                                        </div>
                                                                    </li>
                                                                    <li className="dd-item" data-id="10">
                                                                        <div className="dd-handle">
                                                                            Item 10
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                            <li className="dd-item" data-id="11">
                                                                <div className="dd-handle">
                                                                    <div className="row">
                                                                        <div className="col-xs-8">
                                                                            Item 11
                                                                            <span className="font-xs text-muted">
                                                                                - with progress bar
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-xs-4">
                                                                            <div
                                                                                className="progress progress-striped active no-margin">
                                                                                <div
                                                                                    className="progress-bar progress-bar-primary"
                                                                                    role="progressbar"
                                                                                    style={{width:'37%'}}>
                                                                                    37%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id="12">
                                                                <div className="dd-handle">
                                                                    <div className="row">
                                                                        <div className="col-xs-8 text-success">
                                                                            <strong>Item 12 </strong>
                                                                            <span className="font-xs text-muted">
                                                                                - success text
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-xs-4">
                                                                            <div
                                                                                className="progress progress-striped active no-margin">
                                                                                <div
                                                                                    className="progress-bar progress-bar-success"
                                                                                    role="progressbar"
                                                                                    style={{width:'85%'}}>
                                                                                    85%
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </SmartNestable>
                                            </div>
                                            <div className="col-sm-6 col-lg-4">
                                                <h6>Nestable List #2</h6>
                                                <SmartNestable group="1" onChange={this.onChange2}>
                                                    <div className="dd">
                                                        <ol className="dd-list">
                                                            <li className="dd-item" data-id="13">
                                                                <div className="dd-handle">
                                                                    Item 13
                                                                    <em className="pull-right badge bg-color-orange padding-5"
                                                                        rel="tooltip" title="" data-placement="left"
                                                                        data-original-title="Warning Icon Text"><i
                                                                        className="fa fa-warning fa-lg txt-color-white"/></em>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id="14">
                                                                <div className="dd-handle">
                                                                    Item 14
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id="15">
                                                                <div className="dd-handle">
                                                                    Item 15
                                                                </div>
                                                                <ol className="dd-list">
                                                                    <li className="dd-item" data-id="16">
                                                                        <div className="dd-handle">
                                                                            Item 16
                                                                        </div>
                                                                    </li>
                                                                    <li className="dd-item" data-id="17">
                                                                        <div className="dd-handle text-right">
                                                                            Item 17 (text-right)
                                                                        </div>
                                                                    </li>
                                                                    <li className="dd-item" data-id="18">
                                                                        <div className="dd-handle">
                                                                            <i className="fa fa-check text-success"/>
                                                                            Item 18 <br/>
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </SmartNestable>

                                            </div>
                                            <div className="col-sm-6 col-lg-4">
                                                <h6>Nestable List #3 (with drag handle)</h6>
                                                <SmartNestable>
                                                    <div className="dd">
                                                        <ol className="dd-list">
                                                            <li className="dd-item dd3-item" data-id="13">
                                                                <div className="dd-handle dd3-handle">
                                                                    Drag
                                                                </div>
                                                                <div className="dd3-content">
                                                                    Item 13
                                                                    <div className="pull-right">
                                                                        <div className="checkbox no-margin">
                                                                            <label>
                                                                                <input type="checkbox"
                                                                                       className="checkbox style-0"
                                                                                       defaultChecked/>
                                                                                <span
                                                                                    className="font-xs">Checkbox 1</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item dd3-item" data-id="14">
                                                                <div className="dd-handle dd3-handle">
                                                                    Drag
                                                                </div>
                                                                <div className="dd3-content">
                                                                    Item 14
                                                                </div>
                                                            </li>
                                                            <li className="dd-item dd3-item" data-id="15">
                                                                <div className="dd-handle dd3-handle">
                                                                    Drag
                                                                </div>
                                                                <div className="dd3-content">
                                                                    With a switch
																<span className="pull-right">
															<span className="onoffswitch">
																<input type="checkbox" name="start_interval"
                                                                       className="onoffswitch-checkbox"
                                                                       id="start_interval"/>
																<label className="onoffswitch-label"
                                                                       htmlFor="start_interval">
                                                                    <span className="onoffswitch-inner"
                                                                          data-swchon-text="ON"
                                                                          data-swchoff-text="OFF"/>
                                                                    <span className="onoffswitch-switch"/>
                                                                </label>
															</span>
														</span>
                                                                </div>
                                                                <ol className="dd-list">
                                                                    <li className="dd-item dd3-item" data-id="16">
                                                                        <div className="dd-handle dd3-handle">
                                                                            Drag
                                                                        </div>
                                                                        <div className="dd3-content">
                                                                            Item 16
                                                                        </div>
                                                                    </li>
                                                                    <li className="dd-item dd3-item" data-id="17">
                                                                        <div className="dd-handle dd3-handle">
                                                                            Drag
                                                                        </div>
                                                                        <div className="dd3-content">
                                                                            Item 17
                                                                        </div>
                                                                    </li>
                                                                    <li className="dd-item dd3-item" data-id="18">
                                                                        <div className="dd-handle dd3-handle">
                                                                            Drag
                                                                        </div>
                                                                        <div className="dd3-content">
                                                                            Item 18
                                                                        </div>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </SmartNestable>

                                            </div>
                                        </div>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                        </article>
                        {/* WIDGET END */}
                    </div>
                    {/* end row */}
                    {/* row */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="well well-sm well-light">
                                <p>
                                    <strong>Serialised Output (per list)</strong>
                                </p>
                                <p className="alert alert-info">
                                    Preview of the lists update DB input.
                                </p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <pre>{JSON.stringify(this.state.demoOutput1, null, 2)}</pre>
                                    </div>
                                    <div className="col-sm-6">
                                        <pre>{JSON.stringify(this.state.demoOutput2, null, 2)}</pre>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* end row */}
                </WidgetGrid>
                {/* end widget grid */}
            </div>
        )
    }
});

export default NestableLists