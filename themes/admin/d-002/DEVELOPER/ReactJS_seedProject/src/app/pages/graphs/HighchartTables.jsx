import React from 'react'
import Reflux from 'reflux'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import HighchartTable from '../../../components/graphs/highchart/HighchartTable.jsx'

import config from '../../config/config'






export default () => (
    (
        <div id="content">
            <div className="row">
                <BigBreadcrumbs className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                <SubHeader />
            </div>

            <WidgetGrid>

                {/* row */}

                <div className="row">

                    <div className="col-sm-12">

                        <div className="alert alert-info">



                            <h3 className="no-margin">jQuery HighchartTable</h3>
                            <h5>Convert your HTML data tables into fancy Highcharts graphs without any coding!</h5>
                            <ul>
                                <li>The HighchartTable plugin takes data and attributes from a table and parses them to simply create an Hightcharts chart</li>
                                <li>Control the graph dynamically and easily without any javascript</li>
                                <li>Builds automatically during page load, all you need to do is load the plugin</li>
                                <li>See the full documentation <a href="http://highcharttable.org/#documentation" target="_blank"><strong>here <i className="fa fa-link"/> </strong> </a></li>
                            </ul>



                        </div>

                        <div className="col-sm-12 well">
                            <div className="col-sm-6">
                                <HighchartTable className="highchart table table-hover table-bordered" data-graph-container=".. .. .highchart-container2" data-graph-type="column">
                                    <caption>Column example</caption>
                                    <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th className="">Sales</th>
                                        <th className="">Benefits</th>
                                        <th className="">Expenses</th>
                                        <th className="">Prediction</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>January</td>
                                        <td className="">8000</td>
                                        <td className="">2000</td>
                                        <td className="">1000</td>
                                        <td className="">9000</td>
                                    </tr>
                                    <tr>
                                        <td>February</td>
                                        <td className="">12000</td>
                                        <td className="">3000</td>
                                        <td className="">1300</td>
                                        <td className="">10000</td>
                                    </tr>
                                    <tr>
                                        <td>March</td>
                                        <td className="">18000</td>
                                        <td className="">4000</td>
                                        <td className="">1240</td>
                                        <td className="">11000</td>
                                    </tr>
                                    <tr>
                                        <td>April</td>
                                        <td className="">2000</td>
                                        <td className="">-1000</td>
                                        <td className="">-150</td>
                                        <td className="">13000</td>
                                    </tr>
                                    <tr>
                                        <td>May</td>
                                        <td className="">500</td>
                                        <td className="">-2500</td>
                                        <td className="">1000</td>
                                        <td className="">14000</td>
                                    </tr>
                                    <tr>
                                        <td>June</td>
                                        <td className="">600</td>
                                        <td className="">-500</td>
                                        <td className="">-500</td>
                                        <td className="">15000</td>
                                    </tr>
                                    </tbody>
                                </HighchartTable>
                            </div>
                            <div className="col-sm-6">
                                <div className="highchart-container2"/>
                            </div>
                        </div>

                        <div className="col-sm-12 well">
                            <div className="col-sm-6">
                                <HighchartTable className="highchart table table-hover table-bordered" data-graph-container=".. .. .highchart-container" data-graph-type="line">
                                    <caption>Line example</caption>
                                    <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Sales</th>
                                        <th>Benefits</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>January</td>
                                        <td>8000</td>
                                        <td>2000</td>
                                    </tr>
                                    <tr>
                                        <td>February</td>
                                        <td>12000</td>
                                        <td>3000</td>
                                    </tr>
                                    <tr>
                                        <td>March</td>
                                        <td>18000</td>
                                        <td>4000</td>
                                    </tr>
                                    <tr>
                                        <td>April</td>
                                        <td>2000</td>
                                        <td>-1000</td>
                                    </tr>
                                    <tr>
                                        <td>May</td>
                                        <td>500</td>
                                        <td>-2500</td>
                                    </tr>
                                    </tbody>
                                </HighchartTable>
                            </div>
                            <div className="col-sm-6">
                                <div className="highchart-container"/>
                            </div>
                        </div>

                        <div className="col-sm-12 well">
                            <div className="col-sm-6">
                                <HighchartTable className="highchart table table-hover table-bordered" data-graph-container=".. .. .highchart-container3" data-graph-type="column">
                                    <caption>Column + area example</caption>
                                    <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Sales</th>
                                        <th data-graph-type="area">Benefits</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>January</td>
                                        <td>8000</td>
                                        <td>2000</td>
                                    </tr>
                                    <tr>
                                        <td>February</td>
                                        <td>12000</td>
                                        <td>3000</td>
                                    </tr>
                                    <tr>
                                        <td>March</td>
                                        <td>18000</td>
                                        <td>4000</td>
                                    </tr>
                                    <tr>
                                        <td>April</td>
                                        <td>2000</td>
                                        <td>-1000</td>
                                    </tr>
                                    <tr>
                                        <td>May</td>
                                        <td>500</td>
                                        <td>-2500</td>
                                    </tr>
                                    </tbody>
                                </HighchartTable>
                            </div>
                            <div className="col-sm-6 ">
                                <div className="highchart-container3"/>
                            </div>
                        </div>

                    </div>

                    {/* end row */}

                </div>

                {/* end row */}

            </WidgetGrid>
        </div>
    )
)