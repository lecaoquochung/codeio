import React from 'react'

import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'
import VectorMap from '../../../components/graphs/vectormap/VectorMap.jsx'
import SparklineContainer from '../../../components/graphs/inline/SparklineContainer.jsx'

let BirdEyeWidget = React.createClass({
    render: function () {
        return (
            <JarvisWidget colorbutton={false} editbutton={false}>

                <header>
                    <span className="widget-icon"> <i className="fa fa-map-marker"/> </span>

                    <h2>Birds Eye</h2>

                    <div className="widget-toolbar hidden-mobile">
                        <span className="onoffswitch-title"><i className="fa fa-location-arrow"/> Realtime</span>
                                    <span className="onoffswitch">
                                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox"
                                               defaultChecked id="myonoffswitch"/>
                                            <label className="onoffswitch-label" htmlFor="myonoffswitch"> <span
                                                className="onoffswitch-inner" data-swchon-text="YES"
                                                data-swchoff-text="NO"/> <span
                                                className="onoffswitch-switch"/> </label> </span>
                    </div>
                </header>

                <div>
                    <div className="widget-body no-padding">
                        <VectorMap data={{
                            "US": 4977,
                            "AU": 4873,
                            "IN": 3671,
                            "BR": 2476,
                            "TR": 1476,
                            "CN": 146,
                            "CA": 134,
                            "BD": 100
                        }}/>

                        <div id="heat-fill">
                            <span className="fill-a">0</span>

                            <span className="fill-b">5,000</span>
                        </div>
                        <SparklineContainer>
                            <table className="table table-striped table-hover table-condensed">
                                <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Visits</th>
                                    <th className="text-align-center">User Activity</th>
                                    <th className="text-align-center">Online</th>
                                    <th className="text-align-center">Demographic</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><a href-void>USA</a></td>
                                    <td>4,977</td>
                                    <td className="text-align-center">
                                        <div className="sparkline txt-color-blue text-align-center"
                                             data-sparkline-height="22px" data-sparkline-width="90px"
                                             data-sparkline-barwidth="2">
                                            2700, 3631, 2471, 1300, 1877, 2500, 2577, 2700, 3631, 2471,
                                            2000, 2100, 3000
                                        </div>
                                    </td>
                                    <td className="text-align-center">143</td>
                                    <td className="text-align-center">
                                        <div className="sparkline display-inline" data-sparkline-type='pie'
                                             data-sparkline-piecolor='["#E979BB", "#57889C"]'
                                             data-sparkline-offset="90" data-sparkline-piesize="23px">
                                            17,83
                                        </div>
                                        <div
                                            className="btn-group display-inline pull-right text-align-left hidden-tablet"
                                            data-dropdown>
                                            <button className="btn btn-xs btn-default dropdown-toggle">
                                                <i className="fa fa-cog fa-lg"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-xs pull-right">
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                                                        <u>P</u>DF</a>
                                                </li>
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                                                        <u>D</u>elete</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li className="text-align-center">
                                                    <a href-void>Cancel</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href-void>Australia</a></td>
                                    <td>4,873</td>
                                    <td className="text-align-center">
                                        <div className="sparkline txt-color-blue text-align-center"
                                             data-sparkline-height="22px" data-sparkline-width="90px"
                                             data-sparkline-barwidth="2">
                                            1000, 1100, 3030, 1300, -1877, -2500, -2577, -2700, 3631, 2471,
                                            4700, 1631, 2471
                                        </div>
                                    </td>
                                    <td className="text-align-center">247</td>
                                    <td className="text-align-center">
                                        <div className="sparkline display-inline" data-sparkline-type='pie'
                                             data-sparkline-piecolor='["#E979BB", "#57889C"]'
                                             data-sparkline-offset="90" data-sparkline-piesize="23px">
                                            22,88
                                        </div>
                                        <div
                                            className="btn-group display-inline pull-right text-align-left hidden-tablet">
                                            <button className="btn btn-xs btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                <i className="fa fa-cog fa-lg"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-xs pull-right">
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                                                        <u>P</u>DF</a>
                                                </li>
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                                                        <u>D</u>elete</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li className="text-align-center">
                                                    <a href-void>Cancel</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href-void>India</a></td>
                                    <td>3,671</td>
                                    <td className="text-align-center">
                                        <div className="sparkline txt-color-blue text-align-center"
                                             data-sparkline-height="22px" data-sparkline-width="90px"
                                             data-sparkline-barwidth="2">
                                            3631, 1471, 2400, 3631, 471, 1300, 1177, 2500, 2577, 3000, 4100,
                                            3000, 7700
                                        </div>
                                    </td>
                                    <td className="text-align-center">373</td>
                                    <td className="text-align-center">
                                        <div className="sparkline display-inline" data-sparkline-type='pie'
                                             data-sparkline-piecolor='["#E979BB", "#57889C"]'
                                             data-sparkline-offset="90" data-sparkline-piesize="23px">
                                            10,90
                                        </div>
                                        <div
                                            className="btn-group display-inline pull-right text-align-left hidden-tablet">
                                            <button className="btn btn-xs btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                <i className="fa fa-cog fa-lg"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-xs pull-right">
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                                                        <u>P</u>DF</a>
                                                </li>
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                                                        <u>D</u>elete</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li className="text-align-center">
                                                    <a href-void>Cancel</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href-void>Brazil</a></td>
                                    <td>2,476</td>
                                    <td className="text-align-center">
                                        <div className="sparkline txt-color-blue text-align-center"
                                             data-sparkline-height="22px" data-sparkline-width="90px"
                                             data-sparkline-barwidth="2">
                                            2700, 1877, 2500, 2577, 2000, 3631, 2471, -2700, -3631, 2471,
                                            1300, 2100, 3000,
                                        </div>
                                    </td>
                                    <td className="text-align-center">741</td>
                                    <td className="text-align-center">
                                        <div className="sparkline display-inline" data-sparkline-type='pie'
                                             data-sparkline-piecolor='["#E979BB", "#57889C"]'
                                             data-sparkline-offset="90" data-sparkline-piesize="23px">
                                            34,66
                                        </div>
                                        <div
                                            className="btn-group display-inline pull-right text-align-left hidden-tablet">
                                            <button className="btn btn-xs btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                <i className="fa fa-cog fa-lg"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-xs pull-right">
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                                                        <u>P</u>DF</a>
                                                </li>
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                                                        <u>D</u>elete</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li className="text-align-center">
                                                    <a href-void>Cancel</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href-void>Turkey</a></td>
                                    <td>1,476</td>
                                    <td className="text-align-center">
                                        <div className="sparkline txt-color-blue text-align-center"
                                             data-sparkline-height="22px" data-sparkline-width="90px"
                                             data-sparkline-barwidth="2">
                                            1300, 1877, 2500, 2577, 2000, 2100, 3000, -2471, -2700, -3631,
                                            -2471, 2700, 3631
                                        </div>
                                    </td>
                                    <td className="text-align-center">123</td>
                                    <td className="text-align-center">
                                        <div className="sparkline display-inline" data-sparkline-type='pie'
                                             data-sparkline-piecolor='["#E979BB", "#57889C"]'
                                             data-sparkline-offset="90" data-sparkline-piesize="23px">
                                            75,25
                                        </div>
                                        <div
                                            className="btn-group display-inline pull-right text-align-left hidden-tablet">
                                            <button className="btn btn-xs btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                <i className="fa fa-cog fa-lg"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-xs pull-right">
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                                                        <u>P</u>DF</a>
                                                </li>
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                                                        <u>D</u>elete</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li className="text-align-center">
                                                    <a href-void>Cancel</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href-void>Canada</a></td>
                                    <td>146</td>
                                    <td className="text-align-center">
                                        <div className="sparkline txt-color-orange text-align-center"
                                             data-sparkline-height="22px"
                                             data-sparkline-width="90px" data-sparkline-barwidth="2">
                                            5, 34, 10, 1, 4, 6, -9, -1, 0, 0, 5, 6, 7
                                        </div>
                                    </td>
                                    <td className="text-align-center">23</td>
                                    <td className="text-align-center">
                                        <div className="sparkline display-inline" data-sparkline-type='pie'
                                             data-sparkline-piecolor='["#E979BB", "#57889C"]'
                                             data-sparkline-offset="90" data-sparkline-piesize="23px">
                                            50,50
                                        </div>
                                        <div
                                            className="btn-group display-inline pull-right text-align-left hidden-tablet">
                                            <button className="btn btn-xs btn-default dropdown-toggle"
                                                    data-toggle="dropdown">
                                                <i className="fa fa-cog fa-lg"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-xs pull-right">
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-file fa-lg fa-fw txt-color-greenLight"></i>
                                                        <u>P</u>DF</a>
                                                </li>
                                                <li>
                                                    <a href-void><i
                                                        className="fa fa-times fa-lg fa-fw txt-color-red"></i>
                                                        <u>D</u>elete</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li className="text-align-center">
                                                    <a href-void>Cancel</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <td colSpan={5}>
                                        <ul className="pagination pagination-xs no-margin">
                                            <li className="prev disabled">
                                                <a href-void>Previous</a>
                                            </li>
                                            <li className="active">
                                                <a href-void>1</a>
                                            </li>
                                            <li>
                                                <a href-void>2</a>
                                            </li>
                                            <li>
                                                <a href-void>3</a>
                                            </li>
                                            <li className="next">
                                                <a href-void>Next</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </SparklineContainer>
                        {/* end content */}

                    </div>

                </div>
                {/* end widget div */}
            </JarvisWidget>

        )
    }
});

export default BirdEyeWidget