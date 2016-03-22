import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'

import SparklineContainer from '../../../components/graphs/inline/SparklineContainer.jsx'

export default () => (
            <div id="content">

                <div className="row">
                    <BigBreadcrumbs className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                <div className="row">


                    <SparklineContainer className="col-sm-12">

                        <div className="well">

                            <h1>JQuery <span className="semi-bold">Sparklines</span> <small>Modified for easier usage</small></h1>
                            <p>Sparklines are light weight, easy to use, inline charts. We have modified sparklines so you can use it with just <code>data-*</code> values, without the use of javascript</p>
                            <br/>
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul>
                                        <li>
                                            Inline Graphs &nbsp;
                                            <span className="sparkline" data-sparkline-type="line" data-sparkline-width="50px" data-sparkline-height="18px">90,30,60,40,60,70,50,40,70,60,90,50</span>&nbsp;
                                            also change width, height, and color &nbsp;
                                            <span className="sparkline txt-color-green" data-sparkline-type="line" data-sparkline-width="80px" data-fill-color="transparent" data-sparkline-spotradius="3" data-sparkline-height="15px">4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7</span>
                                            <p className="note">
                                                &lt;span data-sparkline-type="line" data-sparkline-width="50px" data-sparkline-height="18px"&gt;90,30,60,...&lt;/span&gt;
                                            </p>
                                        </li>
                                        <li>
                                            Compose inline charts
                                            <span className="sparkline display-inline" data-sparkline-type="compositeline" data-sparkline-barcolor="#aafaaf" data-sparkline-linecolor="#ed1c24" data-sparkline-height="15px" data-sparkline-line-val="[6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6]" data-sparkline-bar-val="[4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7]"/>
                                            and Composite Bar charts&nbsp;
                                            <span className="sparkline display-inline" data-sparkline-type="compositebar" data-sparkline-height="15px" data-sparkline-color-bottom="#57889C" data-sparkline-barcolor="#aafaaf" data-sparkline-line-width="1.5" data-sparkline-linecolor="#ed1c24" data-sparkline-line-val="[6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6]" data-sparkline-bar-val="[4,1,5,7,9,9,8,7,6,6,4,7,8,4]"/>
                                            <p className="note">
                                                &lt;span data-sparkline-type="compositeline" data-sparkline-height="15px" data-sparkline-line-val="[9,8,7...]" data-sparkline-bar-val="[4,1,5...]"&gt;&lt;/span&gt;
                                            </p>

                                        </li>
                                        <li>
                                            Discrete bars &nbsp;&nbsp; <span className="sparkline txt-color-blue" data-sparkline-type="discrete" data-sparkline-height="18px" data-sparkline-width="30">4,6,7,7,4,3,2,1,4,4</span> &nbsp;
                                            and with threshhold  &nbsp;
                                            <span className="sparkline txt-color-blue" data-sparkline-type="discrete" data-sparkline-height="18px" data-sparkline-width="30" data-sparkline-threshold="4">4,6,7,7,4,3,2,1,4,4</span>
                                            <p className="note">
                                                &lt;span data-sparkline-type="discrete" data-sparkline-height="18px" data-sparkline-width="30" data-sparkline-threshold="4"&gt;4,6,7,...&lt;/span&gt;
                                            </p>
                                        </li>
                                    </ul>


                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li>
                                            Nifty Bar Charts &nbsp;&nbsp;
                                            <span className="sparkline txt-color-blue" data-sparkline-type="bar" data-sparkline-width="50px" data-sparkline-barwidth="3" data-sparkline-height="15px">50,40,70,60,90,50</span> &nbsp;
                                            with negatives and thicker bars &nbsp;
                                            <span className="sparkline txt-color-blue" data-sparkline-type="bar" data-sparkline-width="50px" data-sparkline-barwidth="5" data-sparkline-height="18px">5,6,7,2,0,-4,-2,4</span> and stacked bars &nbsp;
                                            <span className="sparkline txt-color-blue" data-sparkline-type="bar" data-sparkline-width="50px" data-sparkline-barwidth="5" data-sparkline-height="15px">1:3, 5:3, 2:7,9:1,5:6</span>
                                            <p className="note">
                                                &lt;span data-sparkline-type="bar" data-sparkline-width="50px" data-sparkline-bar data-sparkline-height="15px"&gt;50,40,70,...&lt;/span&gt;
                                            </p>
                                        </li>
                                        <li>
                                            Box plots&nbsp;
                                            <span className="sparkline display-inline" data-sparkline-type="bullet" data-sparkline-height="14px" data-sparkline-bulletrange-color="['#CCD7DB', '#92A2A8', '#57889C']" data-sparkline-performance-color="#A4CBDB" data-sparkline-bullet-color="#143644">10,12,12,9,7</span>
                                            &nbsp; and bullet plots &nbsp;
                                            <span className="sparkline display-inline" data-sparkline-type="box" data-sparkline-height="14px">4,27,34,52,54,59,61,68,78,82,85,87,91,93,100</span>



                                            <p className="note">
                                                &lt;span data-sparkline-type="compositebar" data-sparkline-line-width="1.5" data-sparkline-line-val="[6,4,7...]" data-sparkline-bar-val="[4,1,5...]"&gt;&lt;/span&gt;
                                            </p>
                                        </li>
                                        <li>
                                            Pie Charts &nbsp; <span className="sparkline display-inline" data-sparkline-type="pie" data-sparkline-offset="90" data-sparkline-piesize="18px">3,5,2</span>
                                            <p className="note">
                                                &lt;span data-sparkline-type="pie" data-sparkline-offset="90" data-sparkline-piesize="18px"&gt;3,5,2&lt;/span&gt;
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row">
                                <h2 className="row-seperator-header"><small>Examples below are done <strong>without</strong> any javascript!</small></h2>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className="well well-sm well-light">
                                        <h4 className="txt-color-blue">Pie <span className="semi-bold">Chart</span> <a href="javascript:void(0);" className="pull-right"><i className="fa fa-refresh"/></a></h4>
                                        <br/>
                                        <div className="text-center">
                                            <div className="sparkline txt-color-blue display-inline" data-sparkline-type="pie" data-sparkline-offset="90" data-sparkline-piesize="75px">3,5,2</div>
                                            <div className="sparkline txt-color-blue display-inline" data-sparkline-type="pie" data-sparkline-offset="90" data-sparkline-piesize="75px">30,20,15,35</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className="well well-sm well-light padding-10">
                                        <h4 className="txt-color-green">Composite <span className="semi-bold">Chart</span> <a href="javascript:void(0);" className="pull-right txt-color-green"><i className="fa fa-refresh"/></a></h4>
                                        <br/>
                                        <div className="sparkline" data-sparkline-type="compositeline" data-sparkline-spotradius-top="5" data-sparkline-color-top="#3a6965" data-sparkline-line-width-top="3" data-sparkline-color-bottom="#2b5c59" data-sparkline-spot-color="#2b5c59" data-sparkline-minspot-color-top="#97bfbf" data-sparkline-maxspot-color-top="#c2cccc" data-sparkline-highlightline-color-top="#cce8e4" data-sparkline-highlightspot-color-top="#9dbdb9" data-sparkline-width="96%" data-sparkline-height="78px" data-sparkline-line-val="[6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6]" data-sparkline-bar-val="[4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7]">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className="well well-sm well-light">
                                        <h4 className="txt-color-blueLight">Bar <span className="semi-bold">Chart</span> <a href="javascript:void(0);" className="pull-right txt-color-blueLight"><i className="fa fa-refresh"/></a></h4>
                                        <br/>
                                        <div className="sparkline txt-color-blueLight text-center" data-sparkline-type="bar" data-sparkline-width="96%" data-sparkline-barwidth="11" data-sparkline-barspacing="5" data-sparkline-height="80px">
                                            4,3,5,7,9,9,8,7,6,6,4,7,8,4
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                    <div className="well well-sm well-light">
                                        <h4 className="txt-color-blueLight">Bar <span className="semi-bold">Stacked Chart</span> <a href="javascript:void(0);" className="pull-right txt-color-blueLight"><i className="fa fa-refresh"/></a></h4>
                                        <br/>
                                        <div className="sparkline txt-color-blue text-center" data-sparkline-type="bar" data-sparkline-width="96%" data-sparkline-barwidth="11" data-sparkline-barspacing="5" data-sparkline-barstacked-color="['#92A2A8', '#4493B1']" data-sparkline-height="80px">4:5,3:4,5:7,6:3,4:6,6:5,8:2,4:3,6:4,6:2,4:4,7:2,8:5,4:2</div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="well padding-10">
                                        <h4 className="txt-color-blue">Composite Line with fills <a href="javascript:void(0);" className="pull-right txt-color-white"><i className="fa fa-refresh"/></a></h4>
                                        <br/>
                                        <div className="sparkline txt-color-darken" data-sparkline-line-val="[3,2,3,4,3,2,4,2,3]" data-sparkline-bar-val="[5,3,3,1,5,3,2,2,3]" data-sparkline-type="compositeline" data-sparkline-line-width="1" data-sparkline-width="100%" data-sparkline-height="180px" data-sparkline-fillcolor-top="rgba(87, 136, 156, 0.30)" data-sparkline-fillcolor-bottom="rgba(0, 141, 214, 0.10)" data-sparkline-color-top="#fff" data-sparkline-color-bottom="#fff" data-sparkline-spotradius-top="4" data-data-sparkline-bar-val-spots-top="[5,3,3,1,4,3,2,2,3]" data-sparkline-bar-val-spots-bottom="[3,2,3,4,3,2,4,1,3]" data-sparkline-minspot-color-top="#d1dade" data-sparkline-minspot-color-bottom="#167db2" data-sparkline-maxspot-color-top="#d1dade" data-sparkline-maxspot-color-bottom="#167db2" data-sparkline-highlightspot-color-top="#d1dade" data-sparkline-highlightspot-color-bottom="#8fcded" data-sparkline-highlightline-color-top="#bec6ca" data-sparkline-highlightline-color-bottom="#bec6ca">
                                            4,3,3,1,4,3,2,2,3
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                    <div className="well padding-10">
                                        <h4 className="txt-color-teal">Line chart variation <a href="javascript:void(0);" className="pull-right txt-color-white"><i className="fa fa-refresh"/></a></h4>
                                        <br/>
                                        <div className="sparkline" data-sparkline-type="line" data-fill-color="#e6f6f5" data-sparkline-line-color="#0aa699" data-sparkline-spotradius="5" data-sparkline-width="100%" data-sparkline-height="180px">6,4,3,5,2,4,6,4,3,3,4,5,4,3,2,4,5,</div>
                                        <h4 className="air air-top-right padding-10 font-xl txt-color-teal">+ 39.<small className="ultra-light txt-color-teal">57 <i className="fa fa-caret-up fa-lg"/></small></h4>
                                        <h5 className="air air-bottom-left padding-10 font-md text-danger">-12.<small className="ultra-light text-danger">45 <i className="fa fa-caret-down fa-lg"/></small></h5>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </SparklineContainer>

                </div>


            </div>
        )