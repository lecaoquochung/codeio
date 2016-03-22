import React from 'react'

import {OverlayTrigger, Tooltip, Popover} from 'react-bootstrap'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import UiProgressbar from '../../../components/ui/UiProgressbar.jsx'

let UiGeneral = React.createClass({
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['UI Elements', 'General Elemants']} icon="table"
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                <WidgetGrid>
                    <div className="row">
                        <article className="col-sm-12">

                            <div className="alert alert-warning fade in">
                                <button className="close" data-dismiss="alert">
                                    ×
                                </button>
                                <i className="fa-fw fa fa-warning"/>
                                <strong>Warning</strong> Your monthly traffic is reaching limit.
                            </div>

                            <div className="alert alert-success fade in">
                                <button className="close" data-dismiss="alert">
                                    ×
                                </button>
                                <i className="fa-fw fa fa-check"/>
                                <strong>Success</strong> The page has been added.
                            </div>

                            <div className="alert alert-info fade in">
                                <button className="close" data-dismiss="alert">
                                    ×
                                </button>
                                <i className="fa-fw fa fa-info"/>
                                <strong>Info!</strong> You have 198 unread messages.
                            </div>

                            <div className="alert alert-danger fade in">
                                <button className="close" data-dismiss="alert">
                                    ×
                                </button>
                                <i className="fa-fw fa fa-times"/>
                                <strong>Error!</strong> The daily cronjob has failed.
                            </div>
                        </article>
                    </div>
                    <div className="row">

                        {/* NEW WIDGET START */}
                        <article className="col-sm-12">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} data-widget-togglebutton="false"
                                          data-widget-deletebutton="false" data-widget-fullscreenbutton="false"
                                          custombutton={false} data-widget-sortable="false" color="blueDark">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-align-justify"/> </span>
                                    <h2>Standard Progress Bars </h2>

                                </header>

                                {/* widget div*/}
                                <div>


                                    {/* widget content */}
                                    <div className="widget-body">
                                        <p className="alert alert-info no-margin">
                                            All progress bars contain a base class of
                                            <code>
                                                .progress
                                            </code>
                                            . Control the size of the progress bar with
                                            <code>
                                                .progress-xs
                                            </code>
                                            ,
                                            <code>
                                                .progress-sm
                                            </code>
                                            ,
                                            <code>
                                                .progress-lg
                                            </code>
                                            or leave as is for the default size.
                                        </p>

                                        <div className="row">

                                            <div className="col-sm-12">
                                                <h3>Transitional Progress Bars</h3>
                                                <p>
                                                    This nifty animated progress bars run on CSS combined with
                                                    javascript
                                                </p>
                                                <p>
                                                    You will simply need to add in the value
                                                    <code>
                                                        data-transitiongoal="25"
                                                    </code>
                                                    after the <strong>.progress-bar</strong> class
                                                </p>
                                                <div className="row">

                                                    <div className="col-sm-6">

                                                        <p>
                                                            For right alignment add class
                                                            <code>
                                                                .progress .right
                                                            </code>
                                                        </p>
                                                        <div className="well no-padding">

                                                            <div className="bar-holder">
                                                                <div className="progress right" rel="tooltip"
                                                                     title="25%" data-placement="top">
                                                                    <UiProgressbar className="progress-bar bg-color-teal"
                                                                         data-smart-progressbar=""
                                                                         data-transitiongoal="25"/>
                                                                </div>
                                                            </div>
                                                            <div className="bar-holder">
                                                                <div className="progress right">
                                                                    <UiProgressbar className="progress-bar bg-color-blueLight"

                                                                         data-transitiongoal="50"/>
                                                                </div>
                                                            </div>
                                                            <div className="bar-holder">
                                                                <div className="progress right">
                                                                    <UiProgressbar className="progress-bar bg-color-blue"

                                                                         data-transitiongoal="75"/>
                                                                </div>
                                                            </div>
                                                            <div className="bar-holder">
                                                                <div className="progress right">
                                                                    <UiProgressbar className="progress-bar bg-color-redLight"

                                                                         data-transitiongoal="100"/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <p>
                                                            The default is left aligned.
                                                        </p>
                                                        <div className="well no-padding">

                                                            <div className="bar-holder">
                                                                <div className="progress">
                                                                    <UiProgressbar className="progress-bar bg-color-teal"
                                                                         data-transitiongoal="25"/>
                                                                </div>
                                                            </div>
                                                            <div className="bar-holder">
                                                                <div className="progress">
                                                                    <UiProgressbar className="progress-bar bg-color-blueLight"
                                                                         data-transitiongoal="50"/>
                                                                </div>
                                                            </div>
                                                            <div className="bar-holder">
                                                                <div className="progress">
                                                                    <UiProgressbar className="progress-bar bg-color-blue"
                                                                         data-transitiongoal="75"/>
                                                                </div>
                                                            </div>
                                                            <div className="bar-holder">
                                                                <div className="progress">
                                                                    <UiProgressbar className="progress-bar bg-color-redLight"
                                                                         data-transitiongoal="100"/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        <hr className="simple"/>

                                        <div className="row">

                                            <div className="col-sm-12">
                                                <h3>
                                                    <small>Transitional Progress Bars continued...</small>
                                                </h3>
                                                <div className="row">

                                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                                        <p>
                                                            Add an overlapping div to progress-bar with the base css of
                                                            <code>
                                                                .progress .vertical
                                                            </code>
                                                        </p>

                                                        <div className="well no-padding">

                                                            <ul className="vertical-bars">
                                                                <li>
                                                                    <div className="progress vertical">
                                                                        <UiProgressbar className="progress-bar bg-color-teal"
                                                                             data-transitiongoal="25"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical">
                                                                        <UiProgressbar className="progress-bar bg-color-blueLight"
                                                                             data-transitiongoal="50"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical">
                                                                        <UiProgressbar className="progress-bar bg-color-blue"
                                                                             data-transitiongoal="75"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical">
                                                                        <UiProgressbar className="progress-bar bg-color-redLight"
                                                                             data-transitiongoal="100"/>
                                                                    </div>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                                        <p>
                                                            Add an overlapping div to progress-bar with the base css of
                                                            <code>
                                                                .progress .vertical .bottom
                                                            </code>
                                                        </p>

                                                        <div className="well no-padding">
                                                            <ul className="vertical-bars">
                                                                <li>
                                                                    <div className="progress vertical bottom">
                                                                        <UiProgressbar className="progress-bar bg-color-teal"
                                                                             data-transitiongoal="25"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical bottom">
                                                                        <UiProgressbar className="progress-bar bg-color-blueLight"
                                                                             data-transitiongoal="50"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical bottom">
                                                                        <UiProgressbar className="progress-bar bg-color-blue"
                                                                             data-transitiongoal="75"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical bottom">
                                                                        <UiProgressbar className="progress-bar bg-color-redLight"
                                                                             data-transitiongoal="100"/>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-6 col-lg-3">
                                                        <p>
                                                            Add an overlapping div to progress-bar with the base css of
                                                            <code>
                                                                .progress .vertical .wide-bar
                                                            </code>
                                                        </p>

                                                        <div className="well no-padding">

                                                            <ul className="vertical-bars">
                                                                <li>
                                                                    <div className="progress vertical wide-bar">
                                                                        <UiProgressbar className="progress-bar bg-color-teal"
                                                                             data-transitiongoal="25"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical wide-bar">
                                                                        <UiProgressbar className="progress-bar bg-color-blueLight"
                                                                             data-transitiongoal="50"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical wide-bar">
                                                                        <UiProgressbar className="progress-bar bg-color-blue"
                                                                             data-transitiongoal="75"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical wide-bar">
                                                                        <UiProgressbar className="progress-bar bg-color-redLight"
                                                                             data-transitiongoal="100"/>
                                                                    </div>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6 col-md-6 col-lg-3">

                                                        <p>
                                                            Add an overlapping div to progress-bar with the base css of
                                                            <code>
                                                                .bottom .wide-bar
                                                            </code>
                                                        </p>

                                                        <div className="well no-padding">
                                                            <ul className="vertical-bars">
                                                                <li>
                                                                    <div className="progress vertical bottom wide-bar">
                                                                        <UiProgressbar className="progress-bar bg-color-teal"
                                                                             data-transitiongoal="25"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical bottom wide-bar">
                                                                        <UiProgressbar className="progress-bar bg-color-blueLight"
                                                                             data-transitiongoal="50"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical bottom wide-bar">
                                                                        <UiProgressbar className="progress-bar bg-color-blue"
                                                                             data-transitiongoal="75"/>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="progress vertical bottom wide-bar">
                                                                        <UiProgressbar className="progress-bar bg-color-redLight"
                                                                             data-transitiongoal="100"/>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <hr className="simple"/>
                                                <h3>Default Progress Bars</h3>

                                                <p>
                                                    Micro progress bar <code>
                                                    .progress-micro</code>
                                                    with
                                                    <code>
                                                        .progress-bar-primary
                                                    </code>

                                                </p>
                                                <div className="progress progress-micro">
                                                    <div className="progress-bar progress-bar-primary"
                                                         role="progressbar" style={{width:'44%',}}/>
                                                </div>

                                                <p>
                                                    Extra small progress bar <code>
                                                    .progress-xs</code>
                                                    with
                                                    <code>
                                                        .bg-color-blue
                                                    </code>
                                                    <span className="txt-color-blue pull-right"><i
                                                        className="fa fa-lg fa-check"/></span>
                                                </p>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-color-blue" role="progressbar"
                                                         style={{width:'60%',}}/>
                                                </div>

                                                <p>
                                                    Small progress bar <code>
                                                    .progress-sm</code>
                                                    with
                                                    <code>
                                                        .bg-color-greenLight
                                                    </code>
                                                    <span className="txt-color-green pull-right"><i
                                                        className="fa fa-save"/></span>
                                                </p>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar bg-color-greenLight" role="progressbar"
                                                         style={{width:'40%'}}/>
                                                </div>

                                                <p>
                                                    Default progress bar with
                                                    <code>
                                                        .bg-color-redLight
                                                    </code>
                                                    <span className="txt-color-red pull-right"><i
                                                        className="fa fa-lg fa-times"/></span>
                                                </p>
                                                <div className="progress">
                                                    <div className="progress-bar bg-color-redLight" role="progressbar"
                                                         style={{width:'60%'}}/>
                                                </div>

                                                <p>
                                                    Large progress bars <code>
                                                    .progress-lg</code>
                                                    with
                                                    <code>
                                                        .bg-color-blueLight
                                                    </code>
                                                    <span className="txt-color-blueLight pull-right"><i
                                                        className="fa fa-2x fa-check"/></span>
                                                </p>
                                                <div className="progress progress-lg">
                                                    <div className="progress-bar bg-color-blueLight" role="progressbar"
                                                         style={{width:'80%'}}/>
                                                </div>
                                                <hr className="simple"/>

                                                <h3>Stripped Progress Bars</h3>
                                                <p>
                                                    Sriped Progress bars made with CSS3 gradients, by adding the
                                                    <code>
                                                        .progress-striped
                                                    </code> class to the base class

                                                </p>
                                                <p>
                                                    <span className="label label-info">Info!</span> Please be aware that
                                                    this will not work in archaic browsers such as IE9 <span
                                                    className="txt-color-purple pull-right"><i
                                                    className="fa fa-warning"/> 80% Complete</span>
                                                </p>
                                                <div className="progress">

                                                    <div className="progress progress-striped">
                                                        <div className="progress-bar bg-color-purple" role="progressbar"
                                                             style={{width:'77%'}}/>
                                                    </div>

                                                </div>

                                                <p>
                                                    Activate and animate a progress bar by adding the class
                                                    <code>
                                                        .progress-striped .active
                                                    </code>
                                                </p>
                                                <p>
                                                    Dark progress bar with class
                                                    <code>
                                                        .bg-color-darken
                                                    </code>
                                                    <span className="txt-color-orange pull-right"><i
                                                        className="fa fa-lg fa-times"/></span>
                                                </p>
                                                <div className="progress progress-sm progress-striped active">
                                                    <div className="progress-bar bg-color-darken" role="progressbar"
                                                         style={{width:'45%'}}/>
                                                </div>
                                                <hr className="simple"/>
                                                <h3>Stacking Progress Bars</h3>
                                                <p>
                                                    Stack one progressbar on top of another by including all in one
                                                    <code>
                                                        div.progress
                                                    </code>

                                                    <span className="sparkline inline-block pull-right"
                                                          data-sparkline-type="pie"
                                                          data-sparkline-piecolor="['#71843F','#C79121','#A90329','#ccc']"
                                                          data-sparkline-offset="90" data-sparkline-piesize="23px"> 35,20,10,35 </span>

                                                </p>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar bg-color-greenLight"
                                                         style={{width:'35%'}}/>
                                                    <div className="progress-bar bg-color-yellow"
                                                         style={{width:'20%'}}/>
                                                    <div className="progress-bar bg-color-redLight"
                                                         style={{width:'10%'}}/>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    {/* end widget body*/}

                                </div>
                                {/* end widget content */}

                                {/* end widget */}

                            </JarvisWidget></article>
                        {/* WIDGET END */}

                    </div>


                    <div className="row">

                        <h2 className="row-seperator-header"><i className="fa fa-plus"/> Customized Tabs </h2>


                        <article className="col-sm-12 col-md-12 col-lg-6">

                            <JarvisWidget className="well" colorbutton={false} editbutton={false}
                                          data-widget-togglebutton="false" data-widget-deletebutton="false"
                                          data-widget-fullscreenbutton="false" custombutton={false}
                                          data-widget-sortable="false">
                                {/* widget options:
                                 usage: <div jarvis-widget="" id="wid-id-0" editbutton={false}>

                                 colorbutton={false}
                                 editbutton={false}
                                 data-widget-togglebutton="false"
                                 data-widget-deletebutton="false"
                                 data-widget-fullscreenbutton="false"
                                 custombutton={false}
                                 data-widget-collapsed="true"
                                 data-widget-sortable="false"

                                 */}
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-comments"/> </span>
                                    <h2>Default Tabs with border </h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget edit box */}
                                    <div className="jarviswidget-editbox">
                                        {/* This area used as dropdown edit box */}

                                    </div>
                                    {/* end widget edit box */}

                                    {/* widget content */}
                                    <div className="widget-body">

                                        <p>
                                            Tabs inside
                                            <code>
                                                .jarviswidget .well
                                            </code>
                                            (Bordered Tabs)
                                        </p>
                                        <hr className="simple"/>
                                        <ul id="myTab1" className="nav nav-tabs bordered">
                                            <li className="active">
                                                <a href="#s1" data-toggle="tab">Left Tab <span
                                                    className="badge bg-color-blue txt-color-white">12</span></a>
                                            </li>
                                            <li>
                                                <a href="#s2" data-toggle="tab"><i className="fa fa-fw fa-lg fa-gear"/>
                                                    Tab Item 2</a>
                                            </li>
                                            <li className="dropdown">
                                                <a href-void className="dropdown-toggle">Dropdown <b className="caret"/></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="#s3" data-toggle="tab">@fat</a>
                                                    </li>
                                                    <li>
                                                        <a href="#s4" data-toggle="tab">@mdo</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="pull-right">
                                                <a href-void>
                                                    <div className="sparkline txt-color-pinkDark text-align-right"
                                                         data-sparkline-height="18px" data-sparkline-width="90px"
                                                         data-sparkline-barwidth="7">
                                                        5,10,6,7,4,3
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>

                                        <div id="myTabContent1" className="tab-content padding-10">
                                            <div className="tab-pane fade in active" id="s1">
                                                <p>
                                                    I have six locks on my door all in a row. When I go out, I lock
                                                    every other one. I figure no matter how long somebody stands there
                                                    picking the locks, they are always locking three.
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="s2">
                                                <p>
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee.
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="s3">
                                                <p>
                                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they sold
                                                    out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
                                                    readymade. Messenger bag gentrify pitchfork tattooed craft beer,
                                                    iphone skateboard locavore carles etsy salvia banksy hoodie
                                                    helvetica. DIY synth PBR banksy irony.
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="s4">
                                                <p>
                                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art
                                                    party before they sold out master cleanse gluten-free squid
                                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY, art
                                                    party locavore wolf cliche high life echo park Austin. Cred vinyl
                                                    keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>


                            <JarvisWidget colorbutton={false} editbutton={false} data-widget-fullscreenbutton="false"
                                          custombutton={false} data-widget-sortable="false">
                                {/* widget options:
                                 usage: <div jarvis-widget="" id="wid-id-0" editbutton={false}>

                                 colorbutton={false}
                                 editbutton={false}
                                 data-widget-togglebutton="false"
                                 data-widget-deletebutton="false"
                                 data-widget-fullscreenbutton="false"
                                 custombutton={false}
                                 data-widget-collapsed="true"
                                 data-widget-sortable="false"

                                 */}
                                <header>
                                    <h2>Tabs left </h2>
                                    <div className="widget-toolbar hidden-phone">
                                        <div className="smart-form">
                                            <label className="toggle">
                                                <input type="checkbox" id="demo-switch-to-pills"
                                                       name="checkbox-toggle"/>
                                                <i data-swchon-text="TRUE" data-swchoff-text="FALSE"/>Switch Navs /
                                                Pills</label>
                                        </div>
                                    </div>
                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget edit box */}
                                    <div className="jarviswidget-editbox">
                                        {/* This area used as dropdown edit box */}

                                    </div>
                                    {/* end widget edit box */}

                                    {/* widget content */}
                                    <div className="widget-body">

                                        <div className="tabs-left">
                                            <ul className="nav nav-tabs tabs-left" id="demo-pill-nav">
                                                <li className="active">
                                                    <a href="#tab-r1" data-toggle="tab"><span
                                                        className="badge bg-color-blue txt-color-white">12</span> Item 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#tab-r2" data-toggle="tab"><span
                                                        className="badge bg-color-blueDark txt-color-white">3</span>
                                                        Item 2</a>
                                                </li>
                                                <li>
                                                    <a href="#tab-r3" data-toggle="tab"><span
                                                        className="badge bg-color-greenLight txt-color-white">0</span>
                                                        Item 3</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab-r1">
                                                    <p>
                                                        Dear Math, please grow up and solve your own problems, I'm tired
                                                        of solving them for you.
                                                    </p>

                                                    <p>
                                                        They say that love is more important than money, but have you
                                                        ever tried to pay your bills with a hug?
                                                    </p>
                                                </div>
                                                <div className="tab-pane" id="tab-r2">
                                                    <p>
                                                        Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                        sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                        farm-to-table readymade. Messenger bag gentrify pitchfork
                                                        tattooed craft beer, iphone skateboard locavore carles etsy
                                                        salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                    </p>
                                                </div>
                                                <div className="tab-pane" id="tab-r3">
                                                    <p>
                                                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                                                        art party before they sold out master cleanse gluten-free squid
                                                        scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                                                        art party locavore wolf cliche high life echo park Austin. Cred
                                                        vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                                                        farm-to-table.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}
                            </JarvisWidget>

                            <JarvisWidget editbutton={false} data-widget-fullscreenbutton="false" custombutton={false}
                                          data-widget-sortable="false">
                                {/* widget options:
                                 usage: <div jarvis-widget="" id="wid-id-0" editbutton={false}>

                                 colorbutton={false}
                                 editbutton={false}
                                 data-widget-togglebutton="false"
                                 data-widget-deletebutton="false"
                                 data-widget-fullscreenbutton="false"
                                 custombutton={false}
                                 data-widget-collapsed="true"
                                 data-widget-sortable="false"

                                 */}
                                <header>
                                    <ul className="nav nav-tabs pull-left in">

                                        <li className="active">

                                            <a data-toggle="tab" href="#hr1"> <i
                                                className="fa fa-lg fa-arrow-circle-o-down"/> <span
                                                className="hidden-mobile hidden-tablet"> Bottom Tabs </span> </a>

                                        </li>

                                        <li>
                                            <a data-toggle="tab" href="#hr2"> <i
                                                className="fa fa-lg fa-arrow-circle-o-up"/> <span
                                                className="hidden-mobile hidden-tablet"> Top Tabs <span
                                                className="label bg-color-blue txt-color-white"> label <i
                                                className="fa fa-exclamation"/> </span> </span> </a>
                                        </li>

                                    </ul>
                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget edit box */}
                                    <div className="jarviswidget-editbox">
                                        {/* This area used as dropdown edit box */}

                                    </div>
                                    {/* end widget edit box */}

                                    {/* widget content */}
                                    <div className="widget-body">

                                        <div className="tab-content">
                                            <div className="tab-pane active" id="hr1">

                                                <div className="tabbable tabs-below">
                                                    <div className="tab-content padding-10">
                                                        <div className="tab-pane active" id="AA">
                                                            <p>
                                                                The broccoli says 'I look like a small tree', the
                                                                mushroom says 'I look like an umbrella', the walnut says
                                                                'I look like a brain', and the banana says 'Can we
                                                                please change the subject?'
                                                            </p>
                                                        </div>
                                                        <div className="tab-pane" id="BB">
                                                            <p>
                                                                Food truck fixie locavore, accusamus mcsweeney's marfa
                                                                nulla single-origin coffee squid. Exercitation +1 labore
                                                                velit, blog sartorial PBR leggings next level wes
                                                                anderson artisan four loko farm-to-table craft beer
                                                                twee.
                                                            </p>
                                                        </div>
                                                        <div className="tab-pane" id="CC">
                                                            <p>
                                                                Trust fund seitan letterpress, keytar raw denim keffiyeh
                                                                etsy art party before they sold out master cleanse
                                                                gluten-free squid scenester freegan cosby sweater. Fanny
                                                                pack portland seitan DIY, art party locavore wolf cliche
                                                                high life echo park Austin. Cred vinyl keffiyeh DIY
                                                                salvia PBR, banh mi before they sold out farm-to-table.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ul className="nav nav-tabs">
                                                        <li className="active">
                                                            <a data-toggle="tab" href="#AA">Tab 1</a>
                                                        </li>
                                                        <li>
                                                            <a data-toggle="tab" href="#BB">Tab 2</a>
                                                        </li>
                                                        <li>
                                                            <a data-toggle="tab" href="#CC">Tab 3</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="tab-pane" id="hr2">

                                                <ul className="nav nav-tabs">
                                                    <li className="active">
                                                        <a href="#iss1" data-toggle="tab">Item 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="#iss2" data-toggle="tab">Item 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="#iss3" data-toggle="tab">Item 3</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content padding-10">
                                                    <div className="tab-pane active" id="iss1">
                                                        <p>
                                                            Three monkeys escaped from the zoo, one was caught watching
                                                            TV, the other playing hockey, and the third one was caught
                                                            reading this quote!
                                                        </p>
                                                    </div>
                                                    <div className="tab-pane fade" id="iss2">
                                                        <p>
                                                            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                            single-origin coffee squid. Exercitation +1 labore velit,
                                                            blog sartorial PBR leggings next level wes anderson artisan
                                                            four loko farm-to-table craft beer twee.
                                                        </p>
                                                    </div>
                                                    <div className="tab-pane fade" id="iss3">
                                                        <p>
                                                            Trust fund seitan letterpress, keytar raw denim keffiyeh
                                                            etsy art party before they sold out master cleanse
                                                            gluten-free squid scenester freegan cosby sweater. Fanny
                                                            pack portland seitan DIY, art party locavore wolf cliche
                                                            high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                                                            PBR, banh mi before they sold out farm-to-table.
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                        </article>


                        <article className="col-sm-12 col-md-12 col-lg-6">
                            <JarvisWidget className="well" colorbutton={false} editbutton={false}
                                          data-widget-togglebutton="false" data-widget-deletebutton="false"
                                          data-widget-fullscreenbutton="false" custombutton={false}
                                          data-widget-sortable="false">
                                {/* widget options:
                                 usage: <div jarvis-widget="" id="wid-id-0" editbutton={false}>

                                 colorbutton={false}
                                 editbutton={false}
                                 data-widget-togglebutton="false"
                                 data-widget-deletebutton="false"
                                 data-widget-fullscreenbutton="false"
                                 custombutton={false}
                                 data-widget-collapsed="true"
                                 data-widget-sortable="false"

                                 */}
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-comments"/> </span>
                                    <h2>My Data </h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget edit box */}
                                    <div className="jarviswidget-editbox">
                                        {/* This area used as dropdown edit box */}

                                    </div>
                                    {/* end widget edit box */}

                                    {/* widget content */}
                                    <div className="widget-body">
                                        <p>
                                            Tabs inside well and pulled right
                                            <code>
                                                .tabs-pull-right
                                            </code>
                                            (Bordered Tabs)
                                        </p>
                                        <hr className="simple"/>

                                        <ul id="myTab3" className="nav nav-tabs tabs-pull-right bordered">
                                            <li className="active">
                                                <a href="#l1" data-toggle="tab">Tab Item 1 <span
                                                    className="badge bg-color-pinkDark txt-color-white">99</span></a>
                                            </li>
                                            <li className="pull-right">
                                                <a href="#l2" data-toggle="tab">Tab Item 2</a>
                                            </li>
                                            <li className="dropdown pull-left">
                                                <a href-void className="dropdown-toggle"><i
                                                    className="fa fa-lg fa-gear"/> <b className="caret"/></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="#l3" data-toggle="tab">@fat</a>
                                                    </li>
                                                    <li>
                                                        <a href="#l4" data-toggle="tab">@mdo</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <div id="myTabContent3" className="tab-content padding-10">
                                            <div className="tab-pane fade in active" id="l1">
                                                <p>
                                                    My therapist told me the way to achieve true inner peace is to
                                                    finish what I start. So far I’ve finished two bags of M&Ms and a
                                                    chocolate cake. I feel better already.
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="l2">
                                                <p>
                                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                    single-origin coffee squid. Exercitation +1 labore velit, blog
                                                    sartorial PBR leggings next level wes anderson artisan four loko
                                                    farm-to-table craft beer twee.
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="l3">
                                                <p>
                                                    Etsy mixtape wayfarers, ethical wes anderson tofu before they sold
                                                    out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table
                                                    readymade. Messenger bag gentrify pitchfork tattooed craft beer,
                                                    iphone skateboard locavore carles etsy salvia banksy hoodie
                                                    helvetica. DIY synth PBR banksy irony.
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="l4">
                                                <p>
                                                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art
                                                    party before they sold out master cleanse gluten-free squid
                                                    scenester freegan cosby sweater. Fanny pack portland seitan DIY, art
                                                    party locavore wolf cliche high life echo park Austin. Cred vinyl
                                                    keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>


                            <JarvisWidget colorbutton={false} editbutton={false} data-widget-fullscreenbutton="false"
                                          custombutton={false} data-widget-sortable="false">
                                {/* widget options:
                                 usage: <div jarvis-widget="" id="wid-id-0" editbutton={false}>

                                 colorbutton={false}
                                 editbutton={false}
                                 data-widget-togglebutton="false"
                                 data-widget-deletebutton="false"
                                 data-widget-fullscreenbutton="false"
                                 custombutton={false}
                                 data-widget-collapsed="true"
                                 data-widget-sortable="false"

                                 */}
                                <header>
                                    <h2>Tabs right </h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget edit box */}
                                    <div className="jarviswidget-editbox">
                                        {/* This area used as dropdown edit box */}

                                    </div>
                                    {/* end widget edit box */}

                                    {/* widget content */}
                                    <div className="widget-body">

                                        <div className="tabs-right">
                                            <ul className="nav nav-tabs">
                                                <li className="active">
                                                    <a href="#tab1" data-toggle="tab">Item 1 <span
                                                        className="badge bg-color-blue txt-color-white">12</span></a>
                                                </li>
                                                <li>
                                                    <a href="#tab2" data-toggle="tab">Item 2 <span
                                                        className="badge bg-color-blueDark txt-color-white">3</span></a>
                                                </li>
                                                <li>
                                                    <a href="#tab3" data-toggle="tab">Item 3 <span
                                                        className="badge bg-color-greenLight txt-color-white">3</span></a>
                                                </li>
                                            </ul>
                                            <div className="tab-content">
                                                <div className="tab-pane active" id="tab1">
                                                    <p>
                                                        TEAM WORK: Having somebody else you can blame it on.
                                                        <br/>
                                                        HARDWARE: The part of a computer you can kick when there are
                                                        software problems.
                                                        <br/>
                                                        IMPATIENT: Somebody who is waiting in a hurry.
                                                        <br/>
                                                    </p>
                                                </div>
                                                <div className="tab-pane" id="tab2">
                                                    <p>
                                                        Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                        single-origin coffee squid. Exercitation +1 labore velit, blog
                                                        sartorial PBR leggings next level wes anderson artisan four loko
                                                        farm-to-table craft beer twee. Qui photo booth letterpress,
                                                        commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                                                        vinyl cillum PBR. Homo nostrud organic, assumenda labore
                                                        aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr,
                                                        vero magna velit sapiente labore stumptown. Vegan fanny pack
                                                        odio cillum wes anderson 8-bit, sustainable jean shorts beard ut
                                                        DIY ethical culpa terry richardson biodiesel. Art party
                                                        scenester stumptown, tumblr butcher vero sint qui sapiente
                                                        accusamus tattooed echo park.
                                                    </p>
                                                </div>
                                                <div className="tab-pane" id="tab3">
                                                    <p>
                                                        Etsy mixtape wayfarers, ethical wes anderson tofu before they
                                                        sold out mcsweeney's organic lomo retro fanny pack lo-fi
                                                        farm-to-table readymade. Messenger bag gentrify pitchfork
                                                        tattooed craft beer, iphone skateboard locavore carles etsy
                                                        salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                                                        Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                                                        mi whatever gluten-free, carles pitchfork biodiesel fixie etsy
                                                        retro mlkshk vice blog. Scenester cred you probably haven't
                                                        heard of them, vinyl craft beer blog stumptown. Pitchfork
                                                        sustainable tofu synth chambray yr.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>


                            <JarvisWidget colorbutton={false} editbutton={false} togglebutton={false}
                                          deletebutton={false} fullscreenbutton={false}
                                          custombutton={false} sortable={false}>
                                {/* widget options:
                                 usage: <div jarvis-widget="" id="wid-id-0" editbutton={false}>

                                 colorbutton={false}
                                 editbutton={false}
                                 data-widget-togglebutton="false"
                                 data-widget-deletebutton="false"
                                 data-widget-fullscreenbutton="false"
                                 custombutton={false}
                                 data-widget-collapsed="true"
                                 data-widget-sortable="false"

                                 */}
                                <header>
                                    <h2>Header Tabs Right</h2>
                                    <ul className="nav nav-tabs pull-right in">

                                        <li className="active">

                                            <a data-toggle="tab" href="#hb1"> <i
                                                className="fa fa-lg fa-arrow-circle-o-down"/> <span
                                                className="hidden-mobile hidden-tablet"> Bottom Tabs right </span> </a>

                                        </li>

                                        <li>
                                            <a data-toggle="tab" href="#hb2"> <i
                                                className="fa fa-lg fa-arrow-circle-o-up"/> <span
                                                className="hidden-mobile hidden-tablet"> Top Tabs right <span
                                                className="label bg-color-blue txt-color-white"> label <i
                                                className="fa fa-exclamation"/> </span> </span> </a>
                                        </li>

                                    </ul>
                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget edit box */}
                                    <div className="jarviswidget-editbox">
                                        {/* This area used as dropdown edit box */}

                                    </div>
                                    {/* end widget edit box */}

                                    {/* widget content */}
                                    <div className="widget-body">

                                        <div className="tab-content">
                                            <div className="tab-pane active" id="hb1">

                                                <div className="tabbable tabs-below">
                                                    <div className="tab-content padding-10">
                                                        <div className="tab-pane active" id="A1">
                                                            <p>
                                                                When I stare at the sky, I see you. When I stare out
                                                                into the ocean, I see you. When I'm looking at the moon,
                                                                I see you. Geez! Would you move aside, you're constantly
                                                                getting in my way!
                                                            </p>
                                                        </div>
                                                        <div className="tab-pane" id="B1">
                                                            <p>
                                                                Food truck fixie locavore, accusamus mcsweeney's marfa
                                                                nulla single-origin coffee squid. Exercitation +1 labore
                                                                velit, blog sartorial PBR leggings next level wes
                                                                anderson artisan four loko farm-to-table craft beer
                                                                twee.
                                                            </p>
                                                        </div>
                                                        <div className="tab-pane" id="C1">
                                                            <p>
                                                                Trust fund seitan letterpress, keytar raw denim keffiyeh
                                                                etsy art party before they sold out master cleanse
                                                                gluten-free squid scenester freegan cosby sweater. Fanny
                                                                pack portland seitan DIY, art party locavore wolf cliche
                                                                high life echo park Austin. Cred vinyl keffiyeh DIY
                                                                salvia PBR, banh mi before they sold out farm-to-table.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ul className="nav nav-tabs">
                                                        <li className="active pull-right">
                                                            <a data-toggle="tab" href="#A1">Tab 1</a>
                                                        </li>
                                                        <li className="pull-right">
                                                            <a data-toggle="tab" href="#B1">Tab 2</a>
                                                        </li>
                                                        <li className="pull-right">
                                                            <a data-toggle="tab" href="#C1">Tab 3</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="tab-pane" id="hb2">

                                                <ul id="internal-tab-1" className="nav nav-tabs tabs-pull-right">
                                                    <li className="active">
                                                        <a href="#is1" data-toggle="tab">Item 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="#is2" data-toggle="tab">Item 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="#is3" data-toggle="tab">Item 3</a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content padding-10">
                                                    <div className="tab-pane active" id="is1">
                                                        <p>
                                                            I love everyone! I love to be around some people, I love to
                                                            stay away from others, and some I'd just love to punch right
                                                            in the face!

                                                        </p>
                                                    </div>
                                                    <div className="tab-pane fade" id="is2">
                                                        <p>
                                                            Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                                                            single-origin coffee squid. Exercitation +1 labore velit,
                                                            blog sartorial PBR leggings next level wes anderson artisan
                                                            four loko farm-to-table craft beer twee.
                                                        </p>
                                                    </div>
                                                    <div className="tab-pane fade" id="is3">
                                                        <p>
                                                            Trust fund seitan letterpress, keytar raw denim keffiyeh
                                                            etsy art party before they sold out master cleanse
                                                            gluten-free squid scenester freegan cosby sweater. Fanny
                                                            pack portland seitan DIY, art party locavore wolf cliche
                                                            high life echo park Austin. Cred vinyl keffiyeh DIY salvia
                                                            PBR, banh mi before they sold out farm-to-table.
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>


                        </article>


                    </div>


                    <div className="row">

                        <h2 className="row-seperator-header"><i className="fa fa-th-list"/> Accordions </h2>

                        {/* NEW WIDGET START */}
                        <article className="col-sm-12 col-md-12 col-lg-6">


                            <JarvisWidget className=" well transparent" colorbutton={false} editbutton={false}
                                          togglebutton={false} deletebutton={false} fullscreenbutton={false}
                                          custombutton={false} sortable={false}>
                                {/* widget options:
                                 usage: <div jarvis-widget="" id="wid-id-0" editbutton={false}>

                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 data-widget-collapsed="true"
                                 sortable={false}

                                 */}
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-comments"/> </span>
                                    <h2>Accordions </h2>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget edit box */}
                                    <div className="jarviswidget-editbox">
                                        {/* This area used as dropdown edit box */}

                                    </div>
                                    {/* end widget edit box */}

                                    {/* widget content */}
                                    <div className="widget-body">

                                        <div className="panel-group smart-accordion-default" id="accordion">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title"><a data-toggle="collapse"
                                                                                   data-parent="#accordion"
                                                                                   href="#collapseOne"> <i
                                                        className="fa fa-lg fa-angle-down pull-right"/> <i
                                                        className="fa fa-lg fa-angle-up pull-right"/> Collapsible Group
                                                        Item #1 </a></h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse in">
                                                    <div className="panel-body no-padding">
                                                        <table className="table table-bordered table-condensed">
                                                            <thead>
                                                            <tr>
                                                                <th>Column name</th>
                                                                <th>Column name</th>
                                                                <th>Column name</th>
                                                                <th>Column name</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>Row 1</td>
                                                                <td>Row 2</td>
                                                                <td>Row 3</td>
                                                                <td>Row 4</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Row 1</td>
                                                                <td>Row 2</td>
                                                                <td>Row 3</td>
                                                                <td>Row 4</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Row 1</td>
                                                                <td>Row 2</td>
                                                                <td>Row 3</td>
                                                                <td>Row 4</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title"><a data-toggle="collapse"
                                                                                   data-parent="#accordion"
                                                                                   href="#collapseTwo"
                                                                                   className="collapsed"> <i
                                                        className="fa fa-lg fa-angle-down pull-right"/> <i
                                                        className="fa fa-lg fa-angle-up pull-right"/> Collapsible Group
                                                        Item #2 </a></h4>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                        put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                                        excepteur butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                        haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title"><a data-toggle="collapse"
                                                                                   data-parent="#accordion"
                                                                                   href="#collapseThree"
                                                                                   className="collapsed"> <i
                                                        className="fa fa-lg fa-angle-down pull-right"/> <i
                                                        className="fa fa-lg fa-angle-up pull-right"/> Collapsible Group
                                                        Item #3 </a></h4>
                                                </div>
                                                <div id="collapseThree" className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                        put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                                        excepteur butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably
                                                        haven't heard of them accusamus labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}

                            </JarvisWidget>
                        </article>


                        <article className="col-sm-12 col-md-12 col-lg-6">

                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false} togglebutton={false}
                                          deletebutton={false} fullscreenbutton={false} custombutton={false}
                                          sortable={false} color="blueLight">
                                {/* widget options:
                                 usage: <div jarvis-widget="" id="wid-id-0" editbutton={false}>

                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 data-widget-collapsed="true"
                                 sortable={false}

                                 */}
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-list-alt"/> </span>
                                    <h2>Inside a widget </h2>

                                    <div className="widget-toolbar hidden-phone">
                                        <div className="smart-form">
                                            <label className="checkbox">
                                                <input type="checkbox" name="checkbox"/>
                                                <i/>Add Padding</label>
                                        </div>
                                    </div>

                                </header>

                                {/* widget div*/}
                                <div>

                                    {/* widget edit box */}
                                    <div className="jarviswidget-editbox">
                                        {/* This area used as dropdown edit box */}

                                    </div>
                                    {/* end widget edit box */}

                                    {/* widget content */}
                                    <div className="widget-body no-padding">

                                        <div className="panel-group smart-accordion-default" id="accordion-2">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title"><a data-toggle="collapse"
                                                                                   data-parent="#accordion-2"
                                                                                   href="#collapseOne-1"> <i
                                                        className="fa fa-fw fa-plus-circle txt-color-green"/> <i
                                                        className="fa fa-fw fa-minus-circle txt-color-red"/> Collapsible
                                                        Group Item #1 </a></h4>
                                                </div>
                                                <div id="collapseOne-1" className="panel-collapse collapse in">
                                                    <div className="panel-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                        put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title"><a data-toggle="collapse"
                                                                                   data-parent="#accordion-2"
                                                                                   href="#collapseTwo-1"
                                                                                   className="collapsed"> <i
                                                        className="fa fa-fw fa-plus-circle txt-color-green"/> <i
                                                        className="fa fa-fw fa-minus-circle txt-color-red"/> Collapsible
                                                        Group Item #2 </a></h4>
                                                </div>
                                                <div id="collapseTwo-1" className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                        put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title"><a data-toggle="collapse"
                                                                                   data-parent="#accordion-2"
                                                                                   href="#collapseThree-1"
                                                                                   className="collapsed"> <i
                                                        className="fa fa-fw fa-plus-circle txt-color-green"/> <i
                                                        className="fa fa-fw fa-minus-circle txt-color-red"/> Collapsible
                                                        Group Item #3 </a></h4>
                                                </div>
                                                <div id="collapseThree-1" className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                        accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                        non cupidatat skateboard dolor brunch. Food truck quinoa
                                                        nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                                        put a bird on it squid single-origin coffee nulla assumenda
                                                        shoreditch et.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* end widget content */}

                                </div>
                                {/* end widget div */}


                                {/* end widget */}

                            </JarvisWidget>
                        </article>


                    </div>


                    <div className="row">

                        <h2 className="row-seperator-header"><i className="fa fa-reorder"/> Default Nav Bars </h2>

                        <article className="col-sm-12">

                            <div className="navbar navbar-default">

                                {/* Brand and toggle get grouped for better mobile display */}
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                                            data-target="#bs-example-navbar-collapse-1">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"/>
                                        <span className="icon-bar"/>
                                        <span className="icon-bar"/>
                                    </button>
                                    <a className="navbar-brand" href-void>Brand</a>
                                </div>

                                {/* Collect the nav links, forms, and other content for toggling */}
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="active">
                                            <a href-void>Link</a>
                                        </li>
                                        <li>
                                            <a href-void>Link</a>
                                        </li>
                                        <li className="dropdown dropdown-large">
                                            <a href-void className="dropdown-toggle">Large Dropdown <b
                                                className="caret"/></a>

                                            <ul className="dropdown-menu dropdown-menu-large row">
                                                <li className="col-sm-3">
                                                    <ul>
                                                        <li className="dropdown-header">
                                                            Glyphicons
                                                        </li>
                                                        <li>
                                                            <a href-void>Available glyphs</a>
                                                        </li>
                                                        <li className="disabled">
                                                            <a href-void>How to use</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Examples</a>
                                                        </li>
                                                        <li className="divider"/>
                                                        <li className="dropdown-header">
                                                            Dropdowns
                                                        </li>
                                                        <li>
                                                            <a href-void>Example</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Aligninment options</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Headers</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Disabled menu items</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-sm-3">
                                                    <ul>
                                                        <li className="dropdown-header">
                                                            Button groups
                                                        </li>
                                                        <li>
                                                            <a href-void>Basic example</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Button toolbar</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Sizing</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Nesting</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Vertical variation</a>
                                                        </li>
                                                        <li className="divider"/>
                                                        <li className="dropdown-header">
                                                            Button dropdowns
                                                        </li>
                                                        <li>
                                                            <a href-void>Single button dropdowns</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-sm-3">
                                                    <ul>
                                                        <li className="dropdown-header">
                                                            Input groups
                                                        </li>
                                                        <li>
                                                            <a href-void>Basic example</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Sizing</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Checkboxes and radio addons</a>
                                                        </li>
                                                        <li className="divider"/>
                                                        <li className="dropdown-header">
                                                            Navs
                                                        </li>
                                                        <li>
                                                            <a href-void>Tabs</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Pills</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Justified</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-sm-3">
                                                    <ul>
                                                        <li className="dropdown-header">
                                                            Navbar
                                                        </li>
                                                        <li>
                                                            <a href-void>Default navbar</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Buttons</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Text</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Non-nav links</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Component alignment</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Fixed to top</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Fixed to bottom</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Static top</a>
                                                        </li>
                                                        <li>
                                                            <a href-void>Inverted navbar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>

                                        </li>
                                    </ul>
                                    <form className="navbar-form navbar-left" role="search">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Search"/>
                                        </div>
                                        <button type="submit" className="btn btn-default">
                                            Submit
                                        </button>
                                    </form>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <a href-void>Link</a>
                                        </li>
                                        <li className="dropdown">
                                            <a href-void className="dropdown-toggle">Dropdown <span
                                                className="caret"/></a>
                                            <ul className="dropdown-menu" role="menu">
                                                <li>
                                                    <a href-void>Action</a>
                                                </li>
                                                <li>
                                                    <a href-void>Another action</a>
                                                </li>
                                                <li>
                                                    <a href-void>Something else here</a>
                                                </li>
                                                <li className="divider"/>
                                                <li>
                                                    <a href-void>Separated link</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* /.navbar-collapse */}

                            </div>

                            <div className="navbar navbar-inverse">

                                {/* Brand and toggle get grouped for better mobile display */}
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                                            data-target="#bs-example-navbar-collapse-2">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"/>
                                        <span className="icon-bar"/>
                                        <span className="icon-bar"/>
                                    </button>
                                    <a className="navbar-brand" href-void>Brand</a>
                                </div>

                                {/* Collect the nav links, forms, and other content for toggling */}
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                                    <ul className="nav navbar-nav">
                                        <li className="active">
                                            <a href-void>Link</a>
                                        </li>

                                        <li>
                                            <a href-void>Link</a>
                                        </li>
                                    </ul>

                                    <form className="navbar-form navbar-right" role="search">
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Search" type="text"/>
                                        </div>
                                        <button className="btn btn-primary" type="submit">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                                {/* /.navbar-collapse */}

                            </div>

                        </article>

                    </div>


                    <div className="row">
                        <br/>
                        <br/>
                        <h2 className="row-seperator-header"><i className="fa fa-tag"/> Labels and Badges </h2>

                        <div className="col-sm-12">

                            {/* well */}
                            <div className="well">
                                {/* row */}
                                <div className="row">
                                    {/* col */}
                                    <div className="col-sm-12">
                                        <p className="alert alert-info">
                                            <i className="fa fa-info"/> Did you know you can add more than just the
                                            basic colors to customize your badge? <strong>Learn more about color options
                                            modifiers on the <a href="typography.html">Typography page</a>! </strong>
                                        </p>
                                        {/* row */}
                                        <div className="row">

                                            <div className="col-md-6">
                                                <p>
                                                    Add any of the below mentioned modifier classes to change the
                                                    appearance of a label.
                                                </p>

                                                <table className="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th style={{width:'50%'}}>Classes</th>
                                                        <th style={{width:'50%'}}>Labels</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .label-default
                                                            </code></td>
                                                        <td><span className="label label-default">Default</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .label-primary
                                                            </code></td>
                                                        <td><span className="label label-primary">Primary</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .label-success
                                                            </code></td>
                                                        <td><span className="label label-success">Success</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .label-info
                                                            </code></td>
                                                        <td><span className="label label-info">Info</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .label-warning
                                                            </code></td>
                                                        <td><span className="label label-warning">Warning</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .label-danger
                                                            </code></td>
                                                        <td><span className="label label-danger">Danger</span></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="col-md-6">
                                                <p>
                                                    Add any of the below mentioned modifier classes to change the
                                                    appearance of a badge.
                                                </p>
                                                <table className="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th style={{width:'50%'}}>Classes</th>
                                                        <th style={{width:'50%'}}>Badges</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>No modifiers</td>
                                                        <td><span className="badge">42</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .bg-color-darken
                                                            </code></td>
                                                        <td><span className="badge bg-color-darken">1</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .bg-color-greenLight
                                                            </code></td>
                                                        <td><span className="badge bg-color-greenLight">22</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .bg-color-blueLight
                                                            </code></td>
                                                        <td><span className="badge bg-color-blueLight">30</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .bg-color-orange
                                                            </code></td>
                                                        <td><span className="badge bg-color-orange">412</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <code>
                                                                .bg-color-red
                                                            </code></td>
                                                        <td><span className="badge bg-color-red">999</span></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                        {/* end row */}
                                    </div>
                                    {/* end col */}
                                </div>
                                {/* end row */}
                            </div>
                            {/* end well */}

                        </div>

                    </div>


                    <div className="row">

                        <h2 className="row-seperator-header"><i className="fa fa-comments"/> Block Messages </h2>

                        <div className="col-sm-12">

                            <div className="alert alert-block alert-warning">
                                <a className="close" data-dismiss="alert" href-void>×</a>
                                <h4 className="alert-heading">Warning!</h4>
                                Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra
                                augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            </div>

                            <div className="alert alert-success alert-block">
                                <a className="close" data-dismiss="alert" href-void>×</a>
                                <h4 className="alert-heading">Success!</h4>
                                Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra
                                augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            </div>

                            <div className="alert alert-info alert-block">
                                <a className="close" data-dismiss="alert" href-void>×</a>
                                <h4 className="alert-heading">Info!</h4>
                                Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra
                                augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            </div>

                            <div className="alert alert-danger alert-block">
                                <a className="close" data-dismiss="alert" href-void>×</a>
                                <h4 className="alert-heading">Error!</h4>
                                Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra
                                augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                <p className="text-align-left">
                                    <br/>
                                    <a href-void className="btn btn-sm btn-default"><strong>Action Button</strong></a>
                                </p>
                            </div>

                        </div>

                    </div>


                    <div className="row">

                        <h2 className="row-seperator-header"><i className="glyphicon glyphicon-picture"/> Carousel Slide
                            / Fade </h2>

                        <div className="col-sm-12">

                            <div className="row">

                                <div className="col-sm-12 col-md-12 col-lg-6">

                                    {/* well */}
                                    <div className="well">
                                        <h3>Carousel <code>
                                            .slide</code></h3>
                                        <p>
                                            Default sliding carousel with base class of <code>
                                            .carousel .slide</code>
                                        </p>
                                        <div id="myCarousel-2" className="carousel slide" data-smart-ride-carousel=""
                                             data-interval="3000">
                                            <ol className="carousel-indicators">
                                                <li data-target="#myCarousel-2" data-slide-to="0" className="active"/>
                                                <li data-target="#myCarousel-2" data-slide-to="1" className=""/>
                                                <li data-target="#myCarousel-2" data-slide-to="2" className=""/>
                                            </ol>
                                            <div className="carousel-inner">
                                                {/* Slide 1 */}
                                                <div className="item active">
                                                    <img src="styles/img/demo/m3.jpg" alt=""/>
                                                    <div className="carousel-caption caption-right">
                                                        <h4>Title 1</h4>
                                                        <p>
                                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                                            Donec id elit non mi porta gravida at eget metus. Nullam id
                                                            dolor id nibh ultricies vehicula ut id elit.
                                                        </p>
                                                        <br/>
                                                        <a href-void className="btn btn-info btn-sm">Read more</a>
                                                    </div>
                                                </div>
                                                {/* Slide 2 */}
                                                <div className="item">
                                                    <img src="styles/img/demo/m1.jpg" alt=""/>
                                                    <div className="carousel-caption caption-left">
                                                        <h4>Title 2</h4>
                                                        <p>
                                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                                            Donec id elit non mi porta gravida at eget metus. Nullam id
                                                            dolor id nibh ultricies vehicula ut id elit.
                                                        </p>
                                                        <br/>
                                                        <a href-void className="btn btn-danger btn-sm">Read more</a>
                                                    </div>
                                                </div>
                                                {/* Slide 3 */}
                                                <div className="item">
                                                    <img src="styles/img/demo/m2.jpg" alt=""/>
                                                    <div className="carousel-caption">
                                                        <h4>A very long thumbnail title here to fill the space</h4>
                                                        <br/>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="left carousel-control" href="#myCarousel-2" ng-non-bindable=""
                                               data-slide="prev"> <span className="glyphicon glyphicon-chevron-left"/>
                                            </a>
                                            <a className="right carousel-control" href="#myCarousel-2"
                                               ng-non-bindable="" data-slide="next"> <span
                                                className="glyphicon glyphicon-chevron-right"/> </a>
                                        </div>

                                    </div>
                                    {/* end well*/}

                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6">

                                    {/* well */}
                                    <div className="well">
                                        <h3>Carousel <code>
                                            .fade</code></h3>
                                        <p>
                                            To make the carasoul fade, you can use the class <code>
                                            .carousel .fade</code>
                                        </p>
                                        <div id="myCarousel" className="carousel fade" data-smart-ride-carousel=""
                                             data-interval="3000">
                                            <ol className="carousel-indicators">
                                                <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                                                <li data-target="#myCarousel" data-slide-to="1" className=""/>
                                                <li data-target="#myCarousel" data-slide-to="2" className=""/>
                                            </ol>
                                            <div className="carousel-inner">
                                                {/* Slide 1 */}
                                                <div className="item active">
                                                    <img src="styles/img/demo/m1.jpg" alt=""/>
                                                    <div className="carousel-caption caption-right">
                                                        <h4>Title 1</h4>
                                                        <p>
                                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                                            Donec id elit non mi porta gravida at eget metus. Nullam id
                                                            dolor id nibh ultricies vehicula ut id elit.
                                                        </p>
                                                        <br/>
                                                        <a href-void className="btn btn-info btn-sm">Read more</a>
                                                    </div>
                                                </div>
                                                {/* Slide 2 */}
                                                <div className="item">
                                                    <img src="styles/img/demo/m2.jpg" alt=""/>
                                                    <div className="carousel-caption caption-left">
                                                        <h4>Title 2</h4>
                                                        <p>
                                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                                            Donec id elit non mi porta gravida at eget metus. Nullam id
                                                            dolor id nibh ultricies vehicula ut id elit.
                                                        </p>
                                                        <br/>
                                                        <a href-void className="btn btn-danger btn-sm">Read more</a>
                                                    </div>
                                                </div>
                                                {/* Slide 3 */}
                                                <div className="item">
                                                    <img src="styles/img/demo/m3.jpg" alt=""/>
                                                    <div className="carousel-caption">
                                                        <h4>A very long thumbnail title here to fill the space</h4>
                                                        <br/>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="left carousel-control" href="#myCarousel" ng-non-bindable=""
                                               data-slide="prev"> <span className="glyphicon glyphicon-chevron-left"/>
                                            </a>
                                            <a className="right carousel-control" href="#myCarousel" ng-non-bindable=""
                                               data-slide="next"> <span className="glyphicon glyphicon-chevron-right"/>
                                            </a>
                                        </div>

                                    </div>
                                    {/* end well */}

                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="row">

                        <h2 className="row-seperator-header"><i className="fa fa-warning"/> Alerts and Notifications
                        </h2>

                        <div className="col-sm-12">
                            <div className="row">

                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    {/* well */}
                                    <div className="well">
                                        <h3>Bootstrap Modal</h3>
                                        <h5>Static Example</h5>
                                        <p>
                                            A rendered modal with header, body, and set of actions in the footer.
                                        </p>

                                        <div className="modal-dialog demo-modal">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal"
                                                            aria-hidden="true">
                                                        ×
                                                    </button>
                                                    <h4 className="modal-title">Modal title</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <p>
                                                        One fine body…
                                                    </p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default"
                                                            data-dismiss="modal">
                                                        Close
                                                    </button>
                                                    <button type="button" className="btn btn-primary">
                                                        Save changes
                                                    </button>
                                                </div>
                                            </div>
                                            {/* /.modal-content */}
                                        </div>
                                        {/* /.modal-dialog */}

                                        <h5>Live Demo</h5>
                                        <p>
                                            Toggle a modal via JavaScript by clicking the button below. It will slide
                                            down and fade in from the top of the page.
                                        </p>

                                        <button className="btn btn-primary btn-lg" data-toggle="modal"
                                                data-target="#myModal">
                                            Launch demo modal
                                        </button>
                                        <h3 className="hidden-mobile">Options</h3>

                                        <div className="table-responsive">

                                            <table className="table table-bordered table-striped hidden-mobile">
                                                <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>type</th>
                                                    <th>default</th>
                                                    <th>description</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>backdrop</td>
                                                    <td>boolean or the string
                                                        <code>
                                                            'static'
                                                        </code></td>
                                                    <td>true</td>
                                                    <td>Includes a modal-backdrop element. Alternatively, specify
                                                        <code>
                                                            static
                                                        </code> for a backdrop which doesn't close the modal on click.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>keyboard</td>
                                                    <td>boolean</td>
                                                    <td>true</td>
                                                    <td>Closes the modal when escape key is pressed</td>
                                                </tr>
                                                <tr>
                                                    <td>show</td>
                                                    <td>boolean</td>
                                                    <td>true</td>
                                                    <td>Shows the modal when initialized.</td>
                                                </tr>
                                                <tr>
                                                    <td>remote</td>
                                                    <td>path</td>
                                                    <td>false</td>
                                                    <td>
                                                        <p>
                                                            If a remote URL is provided, content will be loaded via
                                                            jQuery's
                                                            <code>
                                                                load
                                                            </code>
                                                            method and injected into the root of the modal element. If
                                                            you're using the data-api, you may alternatively use the
                                                            <code>
                                                                href
                                                            </code>
                                                            attribute to specify the remote source. An example of this
                                                            is shown below:
                                                        </p></td>

                                                </tr>
                                                <tr>
                                                    <td colSpan="4">									<pre>
						<code className="html"><span className="nt">&lt;a</span> <span
                            className="na">data-toggle=</span><span className="s">"modal"</span> <span className="na">href=</span><span
                            className="s">"remote.html"</span> <span className="na">data-target=</span><span
                            className="s">"#modal"</span><span className="nt">&gt;</span>
                            Click me<span className="nt">&lt;/a&gt;</span></code>
																	</pre>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                    {/* end well*/}

                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6">

                                    {/* well */}
                                    <div className="well">
                                        <h3>Smart Notifications
                                            <small>with sound</small>
                                        </h3>
                                        <h5>Big box
                                            <small>(Static Example)</small>
                                        </h5>
                                        <p>
                                            Clutter free dynamic alert box, easy to configure and setup!
                                        </p>
                                        <p>
                                            <span className="label label-info"><i className="fa fa-music"/> Sound Enabled</span>
                                        </p>

                                        <div className="text-center">
                                            <img src="styles/img/demo/demo-smartbig-alert.png" alt="demo"
                                                 className="styles/img-responsive"/>
                                        </div>

                                        <h5>Live Demo</h5>
                                        <p className="note">
                                            <span className="label bg-color-darken txt-color-white">INFO!</span>
                                            Messages are tabbale and does not overpopulate the user screen. Sounds can
                                            also be disabled if not needed
                                        </p>

                                        <ul className="demo-btns">
                                            <li>
                                                <a onClick={this._eg1} className="btn btn-primary"> <i
                                                    className="fa fa-warning"/> Example 1 </a>
                                            </li>
                                            <li>
                                                <a onClick={this._eg2} className="btn btn-primary"> <i
                                                    className="fa fa-bell"/> Example 2 </a>
                                            </li>
                                            <li>
                                                <a onClick={this._eg3} className="btn btn-primary"> <i
                                                    className="fa fa-shield"/> Example 3 </a>
                                            </li>
                                            <li>
                                                <a onClick={this._eg4} className="btn btn-primary"> <i
                                                    className="fa fa-check"/> Example 4 </a>
                                            </li>
                                        </ul>

                                        <h5>Small box alert</h5>

                                        <ul className="demo-btns">
                                            <li>
                                                <button type="button" onClick={this._eg5} className="btn btn-default">
                                                    With button
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" onClick={this._eg6} className="btn btn-default">
                                                    With Icon
                                                </button>
                                            </li>
                                        </ul>
                                        <p className="note">
                                            Easily customize the alerts to any colors of your choice, and add any icons
                                            from the theme library with animation!
                                        </p>

                                        <h5>
                                            <small>Extra Small Box</small>
                                        </h5>
                                        <ul className="demo-btns">
                                            <li>
                                                <button type="button" onClick={this._eg7} className="btn btn-default">
                                                    <i className="fa fa-thumbs-up"/> Extra Small Alert
                                                </button>
                                            </li>
                                        </ul>
                                        <p className="note">
                                            Go even tinier with smaller attention messages!
                                        </p>

                                    </div>
                                    {/* end well */}

                                    {/* well */}
                                    <div className="well">

                                        <h3>Smart Alert
                                            <small>with sound</small>
                                        </h3>

                                        <h5 className="text-success">With Callback and Buttons
                                            <small>(Dynamic Example)</small>
                                        </h5>
                                        <ul className="demo-btns">
                                            <li>
                                                <a onClick={this._smartModEg1} className="btn btn-success"> Callback ()</a>
                                            </li>
                                            <li>
                                                <a onClick={this._smartModEg3} className="btn btn-success"> Many
                                                    Buttons </a>
                                            </li>
                                        </ul>
                                        <h5 className="text-primary">With Input and Select</h5>
                                        <ul className="demo-btns">
                                            <li>
                                                <a onClick={this._smartModEg2} className="btn btn-primary"> With Input </a>
                                            </li>
                                            <li>
                                                <a onClick={this._smartModEg4} className="btn btn-primary"> With
                                                    Select </a>
                                            </li>
                                        </ul>
                                        <h5>Log me in example</h5>
                                        <ul className="demo-btns">
                                            <li>
                                                <a onClick={this._smartModEg5} className="btn btn-danger"> Login me in </a>
                                            </li>
                                        </ul>

                                    </div>
                                    {/* end well */}

                                </div>

                            </div>
                        </div>

                    </div>






                    <div className="row">

                        <h2 className="row-seperator-header"><i className="fa fa-question"/> Tooltips and Popovers </h2>

                        <div className="col-sm-12">

                            <div className="row">

                                <div className="col-sm-12 col-md-12 col-lg-6">

                                    <div className="well">
                                        <h3>Tooltips</h3>
                                        <p>
                                            Tip your users with a small tooltip. Nifty helpful information can be disaplayed using this very simple and yet effictive component. Display pure <strong>HTML Content</strong>, <strong> Images</strong> and <strong>Icons</strong>
                                        </p>
                                        <br/>

                                        <ul className="demo-btns text-center">
                                            <li>
                                                <OverlayTrigger placement="top" overlay={<Tooltip id="h-1-b-one-b-em-really-em-big-tip-h-1-tooltip"><h1><b>One</b> <em>Really</em> big tip!</h1></Tooltip>}><a href-void className="btn btn-default btn-lg">Big Tip</a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={<Tooltip id="i-class-fa-fa-check-fa-3-x-text-success-i-i-class-fa-fa-times-fa-3-x-text-danger-i-tooltip"><i className="fa fa-check fa-3x text-success"/> <i className="fa fa-times fa-3x text-danger"/></Tooltip>}><a href-void className="btn btn-default btn-lg">has Icon</a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={<Tooltip id="img-src-styles-img-avatars-sunny-png-alt-me-class-online-tooltip"><img src="styles/img/avatars/sunny.png" alt="me" className="online"/></Tooltip>}><a href-void className="btn btn-default btn-lg">also Image</a></OverlayTrigger>
                                            </li>
                                        </ul>

                                        <ul className="demo-btns text-center">
                                            <li>
                                                <OverlayTrigger placement="left" overlay={<Tooltip id="tooltip-left-tooltip">Tooltip Left</Tooltip>}><a href-void className="btn btn-default"><i className="fa fa-arrow-left"/> Tooltip Left</a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top-tooltip">Tooltip Top</Tooltip>}><a href-void className="btn btn-default"><i className="fa fa-arrow-up"/> Tooltip Top</a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-bottom-tooltip">Tooltip Bottom</Tooltip>}><a href-void className="btn btn-default"><i className="fa fa-arrow-down"/> Tooltip Bottom</a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="right" overlay={<Tooltip id="i-class-fa-fa-check-text-success-i-tooltip-right-tooltip"><i className="fa fa-check text-success"/> Tooltip Right</Tooltip>}><a href-void className="btn btn-default"><i className="fa fa-arrow-right"/> Tooltip Right</a></OverlayTrigger>
                                            </li>
                                        </ul>

                                    </div>

                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6">

                                    <div className="well">
                                        <h3>Popovers</h3>
                                        <p>
                                            Popovers are a cool way to express compressed information to the user, neatly and quickly. You can generate all kinds of content within the popover component. Including <strong>Forms</strong>, <strong>Tabs</strong>, <strong>Images</strong> and even <strong>Google map</strong>!
                                        </p>
                                        <br/>
                                        <ul className="demo-btns text-center">
                                            <li>
                                                <OverlayTrigger placement="top" overlay={<Popover id="popover-activated-on-hover-popover">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Popover>}><a href-void className="btn btn-default btn-lg" data-trigger="mouseenter"><strong>On</strong> <i>Hover</i></a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="h-4-tabs-inside-popover-h-4-popover"><ul id="popup-tab" className="nav nav-tabs bordered"><li className="active"><a href="#pop-1" data-toggle="tab">Active Tab </a></li><li><a href="#pop-2" data-toggle="tab">Tab 2</a></li></ul><div id="popup-tab-content" className="tab-content padding-10"><div className="tab-pane fade in active" id="pop-1"><p>I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.</p></div><div className="tab-pane fade" id="pop-2"><p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. wes anderson artisan four loko farm-to-table craft beer twee.</p></div></div></Popover>}><a className="btn btn-default btn-lg"><strong>Active</strong> <i>Content</i></a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="i-class-fa-fa-fw-fa-pencil-i-form-inside-popover-popover"><form action="/api/plug" style={{minWidth:'170px'}}><div className="checkbox"><label><input type="checkbox" className="checkbox style-0" defaultChecked/><span>Read</span></label></div><div className="checkbox"><label><input type="checkbox" className="checkbox style-0"/><span>Write</span></label></div><div className="checkbox"><label><input type="checkbox" className="checkbox style-0"/><span>Execute</span></label></div><div className="form-actions"><div className="row"><div className="col-md-12"><button className="btn btn-primary btn-sm" type="submit">SAVE</button></div></div></div></form></Popover>}><a className="btn btn-default btn-lg"><strong>File</strong> <i>Access</i></a></OverlayTrigger>
                                            </li>
                                        </ul>

                                        <ul className="demo-btns text-center">
                                            <li>
                                                <OverlayTrigger placement="left" overlay={<Popover id="popover-left-popover">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Popover>} ><a href-void className="btn btn-default"><i className="fa fa-arrow-left"/> <strong>Popover</strong> <i>Left</i></a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="top" overlay={<Popover id="popover-up-popover">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Popover>} ><a href-void className="btn btn-default"><i className="fa fa-arrow-up"/> <strong>Popover</strong> <i>Up</i></a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="bottom" overlay={<Popover id="popover-down-popover">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Popover>} ><a href-void className="btn btn-default"><i className="fa fa-arrow-down"/> <strong>Popover</strong> <i>Down</i></a></OverlayTrigger>
                                            </li>
                                            <li>
                                                <OverlayTrigger placement="right" overlay={<Popover id="popover-right-popover">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</Popover>}><a href-void className="btn btn-default"><i className="fa fa-arrow-right"/> <strong>Popover</strong> <i>Right</i></a></OverlayTrigger>
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>







                    <div className="row">
                        <h2 className="row-seperator-header"><i className="fa fa-square-o"/> Containers, Media and Pagination</h2>
                        <div className="col-sm-12 col-md-12 col-lg-6">

                            <div className="well">

                                <h3>Jumbotron <small>Gets your user attention!</small></h3>

                                <div className="jumbotron">
                                    <h1>Hello, world!</h1>
                                    <p>
                                        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                                    </p>
                                    <p>
                                        <a className="btn btn-primary btn-lg" role="button">Learn more</a>
                                    </p>
                                </div>

                                <h3>Wells <small>Notice the well sizes</small></h3>

                                <div className="well well-lg">
                                    Large well
                                    <br/>
                                    <code>
                                        .well .well-lg</code>
                                </div>

                                <div className="well ">
                                    Default well
                                    <br/>
                                    <code>
                                        .well</code>
                                </div>

                                <div className="well well-sm well-light">
                                    Small well with light background
                                    <br/>
                                    <code>
                                        .well .well-sm .well-light</code>
                                </div>

                                <div className="row">

                                    <div className="col-sm-4">

                                        <div className="well well-sm bg-color-darken txt-color-white text-center">
                                            <h5>Well with background</h5>
                                            <code>
                                                .bg-color-darken</code>
                                        </div>

                                    </div>

                                    <div className="col-sm-4">

                                        <div className="well well-sm bg-color-teal txt-color-white text-center">
                                            <h5>Well with background</h5>
                                            <code>
                                                .bg-color-teal</code>
                                        </div>

                                    </div>

                                    <div className="col-sm-4">

                                        <div className="well well-sm bg-color-pinkDark txt-color-white text-center">
                                            <h5>Well with background</h5>
                                            <code>
                                                .bg-color-pinkDark</code>
                                        </div>

                                    </div>

                                </div>
                                <p>
                                    Learn more about other colors that you can use for .well by going to <a href="typography.html"> typography page</a>
                                </p>

                            </div>

                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">

                            <div className="well">

                                <h3>Media</h3>

                                <ul className="media-list">
                                    <li className="media">
                                        <a className="pull-left" href-void> <img className="media-object" alt="64x64" src="styles/img/demo/64x64.png"/> </a>
                                        <div className="media-body">
                                            <h4 className="media-heading">Media heading</h4>
                                            <p>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                            </p>
                                            {/* Nested media object */}
                                            <div className="media">
                                                <a className="pull-left" href-void> <img className="media-object" alt="64x64" src="styles/img/demo/64x64.png"/> </a>
                                                <div className="media-body">
                                                    <h4 className="media-heading">Nested media heading</h4>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                    {/* Nested media object */}
                                                    <div className="media">
                                                        <a className="pull-left" href-void> <img className="media-object" alt="64x64" src="styles/img/demo/64x64.png"/> </a>
                                                        <div className="media-body">
                                                            <h4 className="media-heading">Nested media heading</h4>
                                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Nested media object */}
                                            <div className="media">
                                                <a className="pull-left" href-void> <img className="media-object" alt="64x64" src="styles/img/demo/64x64.png"/> </a>
                                                <div className="media-body">
                                                    <h4 className="media-heading">Nested media heading</h4>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="media">
                                        <a className="pull-left" href-void> <img className="media-object" alt="64x64" src="styles/img/demo/64x64.png"/> </a>
                                        <div className="media-body">
                                            <h4 className="media-heading">Media heading</h4>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                                        </div>
                                    </li>
                                </ul>

                            </div>

                            <div className="well well-light">
                                <h3>Pagination <small>two different styles</small></h3>
                                <div className="text-center">
                                    <ul className="pagination pagination-lg">
                                        <li>
                                            <a href-void><i className="fa fa-chevron-left"/></a>
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
                                        <li>
                                            <a href-void>4</a>
                                        </li>
                                        <li>
                                            <a href-void>5</a>
                                        </li>
                                        <li>
                                            <a href-void><i className="fa fa-chevron-right"/></a>
                                        </li>
                                    </ul>
                                    &nbsp; &nbsp;
                                    <ul className="pagination pagination-alt pagination-lg">
                                        <li>
                                            <a href-void><i className="fa fa-angle-left"/></a>
                                        </li>
                                        <li>
                                            <a href-void>1</a>
                                        </li>
                                        <li>
                                            <a href-void>2</a>
                                        </li>
                                        <li>
                                            <a href-void>3</a>
                                        </li>
                                        <li className="active">
                                            <a href-void>4</a>
                                        </li>
                                        <li>
                                            <a href-void>5</a>
                                        </li>
                                        <li>
                                            <a href-void><i className="fa fa-angle-right"/></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <ul className="pagination">
                                        <li>
                                            <a href-void><i className="fa fa-arrow-left"/></a>
                                        </li>
                                        <li>
                                            <a href-void>1</a>
                                        </li>
                                        <li className="active">
                                            <a href-void>2</a>
                                        </li>
                                        <li>
                                            <a href-void>3</a>
                                        </li>
                                        <li>
                                            <a href-void>4</a>
                                        </li>
                                        <li>
                                            <a href-void>5</a>
                                        </li>
                                        <li>
                                            <a href-void><i className="fa fa-arrow-right"/></a>
                                        </li>
                                    </ul>
                                    &nbsp; &nbsp;
                                    <ul className="pagination pagination-alt">
                                        <li>
                                            <a href-void><i className="fa fa-angle-left"/></a>
                                        </li>
                                        <li>
                                            <a href-void>1</a>
                                        </li>
                                        <li>
                                            <a href-void>2</a>
                                        </li>
                                        <li>
                                            <a href-void>3</a>
                                        </li>
                                        <li className="active">
                                            <a href-void>4</a>
                                        </li>
                                        <li>
                                            <a href-void>5</a>
                                        </li>
                                        <li>
                                            <a href-void><i className="fa fa-angle-right"/></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <ul className="pagination pagination-sm">
                                        <li>
                                            <a href-void><i className="fa fa-angle-left"/></a>
                                        </li>
                                        <li>
                                            <a href-void>1</a>
                                        </li>
                                        <li>
                                            <a href-void>2</a>
                                        </li>
                                        <li className="active">
                                            <a href-void>3</a>
                                        </li>
                                        <li>
                                            <a href-void>4</a>
                                        </li>
                                        <li>
                                            <a href-void>5</a>
                                        </li>
                                        <li>
                                            <a href-void><i className="fa fa-angle-right"/></a>
                                        </li>
                                    </ul>
                                    &nbsp; &nbsp;
                                    <ul className="pagination pagination-sm pagination-alt">
                                        <li>
                                            <a href-void>«</a>
                                        </li>
                                        <li>
                                            <a href-void>1</a>
                                        </li>
                                        <li>
                                            <a href-void>2</a>
                                        </li>
                                        <li className="active">
                                            <a href-void>3</a>
                                        </li>
                                        <li>
                                            <a href-void>4</a>
                                        </li>
                                        <li>
                                            <a href-void>5</a>
                                        </li>
                                        <li>
                                            <a href-void>»</a>
                                        </li>
                                    </ul>
                                </div>
                                <div style={{width:'200px',margin:'0 auto'}}>
                                    <ul className="pager">
                                        <li className="previous disabled">
                                            <a href-void>&larr; Older</a>
                                        </li>
                                        <li className="next">
                                            <a href-void>Newer &rarr;</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>

                </WidgetGrid>

                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                    &times;
                                </button>
                                <h4 className="modal-title" id="myModalLabel">Article Post</h4>
                            </div>
                            <div className="modal-body">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Title" required/>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Content" rows="5" required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="category"> Category</label>
                                            <select className="form-control" id="category">
                                                <option>Articles</option>
                                                <option>Tutorials</option>
                                                <option>Freebies</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="tags"> Tags</label>
                                            <input type="text" className="form-control" id="tags" placeholder="Tags"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="well well-sm well-primary">
                                            <form className="form form-inline " role="form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" value="" placeholder="Date" required/>
                                                </div>
                                                <div className="form-group">
                                                    <select className="form-control">
                                                        <option>Draft</option>
                                                        <option>Published</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-success btn-sm">
                                                        <span className="glyphicon glyphicon-floppy-disk"/> Save
                                                    </button>
                                                    <button type="button" className="btn btn-default btn-sm">
                                                        <span className="glyphicon glyphicon-eye-open"/> Preview
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Post Article
                                </button>
                            </div>
                        </div>{/* /.modal-content */}
                    </div>{/* /.modal-dialog */}
                </div>{/* /.modal */}

            </div>
        )
    },
    _eg1: function () {

        $.bigBox({
            title: "Big Information box",
            content: "This message will dissapear in 6 seconds!",
            color: "#C46A69",
            //timeout: 6000,
            icon: "fa fa-warning shake animated",
            number: "1",
            timeout: 6000
        });
    },

    _eg2: function () {

        $.bigBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#3276B1",
            //timeout: 8000,
            icon: "fa fa-bell swing animated",
            number: "2"
        });

    },

    _eg3: function () {

        $.bigBox({
            title: "Shield is up and running!",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#C79121",
            //timeout: 8000,
            icon: "fa fa-shield fadeInLeft animated",
            number: "3"
        });

    },

    _eg4: function () {

        $.bigBox({
            title: "Success Message Example",
            content: "Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#739E73",
            //timeout: 8000,
            icon: "fa fa-check",
            number: "4"
        }, function () {
            this._closedthis();
        }.bind(this));

    },


    _eg5: function () {

        $.smallBox({
            title: "Ding Dong!",
            content: "Someone's at the door...shall one get it sir? <p class='text-align-right'><a href-void class='btn btn-primary btn-sm'>Yes</a> <a href-void class='btn btn-danger btn-sm'>No</a></p>",
            color: "#296191",
            //timeout: 8000,
            icon: "fa fa-bell swing animated"
        });
    },


    _eg6: function () {

        $.smallBox({
            title: "Big Information box",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            color: "#5384AF",
            //timeout: 8000,
            icon: "fa fa-bell"
        });

    },

    _eg7: function () {

        $.smallBox({
            title: "James Simmons liked your comment",
            content: "<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",
            color: "#296191",
            iconSmall: "fa fa-thumbs-up bounce animated",
            timeout: 4000
        });

    },

    _closedthis: function () {
        $.smallBox({
            title: "Great! You just closed that last alert!",
            content: "This message will be gone in 5 seconds!",
            color: "#739E73",
            iconSmall: "fa fa-cloud",
            timeout: 5000
        });
    },

    _smartModEg1: function () {
        $.SmartMessageBox({
            title: "Smart Alert!",
            content: "This is a confirmation box. Can be programmed for button callback",
            buttons: '[No][Yes]'
        }, function (ButtonPressed) {
            if (ButtonPressed === "Yes") {

                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed Yes...</i>",
                    color: "#659265",
                    iconSmall: "fa fa-check fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }
            if (ButtonPressed === "No") {
                $.smallBox({
                    title: "Callback function",
                    content: "<i class='fa fa-clock-o'></i> <i>You pressed No...</i>",
                    color: "#C46A69",
                    iconSmall: "fa fa-times fa-2x fadeInRight animated",
                    timeout: 4000
                });
            }

        });
    },
    _smartModEg2: function () {
        $.SmartMessageBox({
            title: "Smart Alert: Input",
            content: "Please enter your user name",
            buttons: "[Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });
    },

    _smartModEg3: function () {
        $.SmartMessageBox({
            title: "Smart Notification: Buttons",
            content: "Lots of buttons to go...",
            buttons: '[Need?][You][Do][Buttons][Many][How]'
        });

    },

    _smartModEg4: function () {
        $.SmartMessageBox({
            title: "Smart Alert: Select",
            content: "You can even create a group of options.",
            buttons: "[Done]",
            input: "select",
            options: "[Costa Rica][United States][Autralia][Spain]"
        }, function (ButtonPress, Value) {
            alert(ButtonPress + " " + Value);
        });

    },

    _smartModEg5: function () {

        $.SmartMessageBox({
            title: "Login form",
            content: "Please enter your user name",
            buttons: "[Cancel][Accept]",
            input: "text",
            placeholder: "Enter your user name"
        }, function (ButtonPress, Value) {
            if (ButtonPress == "Cancel") {
                alert("Why did you cancel that? :(");
                return 0;
            }

            var Value1 = Value.toUpperCase();
            var ValueOriginal = Value;
            $.SmartMessageBox({
                title: "Hey! <strong>" + Value1 + ",</strong>",
                content: "And now please provide your password:",
                buttons: "[Login]",
                input: "password",
                placeholder: "Password"
            }, function (ButtonPress, Value) {
                alert("Username: " + ValueOriginal + " and your password is: " + Value);
            });
        });

    }
});

export default UiGeneral