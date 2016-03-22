import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'

import EasyPieChartContainer from '../../../components/graphs/inline/EasyPieChartContainer.jsx'

export default () => (
    <div id="content">

        <div className="row">
            <BigBreadcrumbs className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
            <SubHeader />
        </div>

        <div className="row">

            <EasyPieChartContainer className="col-sm-12">

                <div className="well">
                    <h1>Easy <span className="semi-bold">Pie Charts</span>
                        <small>Simplified for faster production</small>
                    </h1>
                    <p>Easy Pie Charts gives you a nice animation twist to your pie charts - they are also dynamic,
                        which will make it a really nice ajax based live charts for your project</p>
                    <p className="note">&lt;div class=&quot;easy-pie-chart txt-color-blue easyPieChart&quot;
                        data-percent=&quot;36&quot; data-size=&quot;180&quot;&gt; data-pie-size=&quot;50&quot;&gt;
                        &lt;span class=&quot;percent percent-sign txt-color-blue font-xl semi-bold&quot;&gt;36&lt;
                        /span&gt;
                        &lt;/div&gt;</p>
                    <ul className="list-inline">
                        <li>&nbsp;&nbsp;&nbsp;
                            <div className="easy-pie-chart txt-color-red easyPieChart" data-percent="50" data-size="180"
                                 data-pie-size="50">
                                <span className="percent percent-sign txt-color-red font-xl semi-bold">49</span>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                        </li>
                        <li>&nbsp;&nbsp;&nbsp;
                            <div className="easy-pie-chart txt-color-blue easyPieChart" data-percent="36"
                                 data-pie-size="180">
                                <span className="percent percent-sign txt-color-blue font-xl semi-bold">36</span>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                        </li>
                        <li>&nbsp;&nbsp;&nbsp;
                            <div className="easy-pie-chart txt-color-pinkDark easyPieChart" data-percent="46"
                                 data-pie-size="160">
                                <span className="percent percent-sign txt-color-pinkDark font-lg semi-bold">46</span>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                        </li>
                        <li>&nbsp;&nbsp;&nbsp;
                            <div className="easy-pie-chart txt-color-greenLight easyPieChart" data-percent="56"
                                 data-pie-size="110">
                                <span className="percent percent-sign txt-color-greenLight font-md">56</span>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                        </li>
                        <li>&nbsp;&nbsp;&nbsp;
                            <div className="easy-pie-chart txt-color-orange easyPieChart" data-percent="66"
                                 data-pie-size="60">
                                <span className="percent percent-sign txt-color-orange">66</span>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                        </li>
                        <li>&nbsp;&nbsp;&nbsp;
                            <div className="easy-pie-chart txt-color-darken easyPieChart" data-percent="76"
                                 data-pie-size="45">
                                <span className="percent percent-sign font-sm">76</span>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                        </li>
                        <li>&nbsp;&nbsp;&nbsp;
                            <div className="easy-pie-chart txt-color-blue easyPieChart" data-percent="86"
                                 data-pie-size="35">
                                <span className="percent percent-sign font-xs">86</span>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                        </li>
                    </ul>

                </div>

            </EasyPieChartContainer>

        </div>


    </div>
)