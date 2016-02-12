/**
 * Created by griga on 11/30/15.
 */

import React from 'react'

import {Alert ,
    OverlayTrigger ,
    Popover ,
    Dropdown ,
    MenuItem} from 'react-bootstrap'

import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import TabbedWidgetDemo from './TabbedWidgetDemo.jsx'
import SwitchWidgetDemo from './SwitchWidgetDemo.jsx'

let Widgets = React.createClass({
    render: function () {
        return (

            <div id="content">
                <div className="row">
                    <big-breadcrumbs items="['Widgets']" icon="list-alt"
                                     className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <div smart-include="app/layout/partials/sub-header.tpl.html"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12">

                        <Alert bsStyle="info" className="fade in">
                            <button className="close" data-dismiss="alert">
                                ×
                            </button>
                            <i className="fa-fw fa fa-info"/>
                            <strong>Heads up!</strong> If the widgets are not reacting to your drag and drop events on
                            chrome, try to turn off chrome touch events by going to, <a
                            href="chrome://flags/#touch-events">chrome:\/\/flags/#touch-events</a> if you do not have a
                            touch screen.
                        </Alert>

                        <Alert className="well">
                            <button className="close" data-dismiss="alert">
                                &#xD7;
                            </button>
                            <h1><span className="semi-bold">Smart</span> <i className="ultra-light">Widgets</i> (aka
                                JarvisWidgets) <sup className="badge bg-color-red bounceIn animated">v 2.0</sup> <br />
                                <small className="text-danger slideInRight fast animated"><strong>Exclusive to
                                    SmartAdmin!</strong></small>
                            </h1>
                            <p>The all new and revolutionary JarvisWidgets v2.0 (<strong>$35 value</strong>) is now only
                                exclusive to SmartAdmin.
                                JarvisWidgets allows you to do more than your normal widgets. You can now use realtime
                                <OverlayTrigger placement="bottom" overlay={
                                    <Popover id="ajax-loading-popover">
                                        <span className=''>You can load content with ajax. You can even set a 'last updated' timestamp (customizable) a refresh button and set an auto refresh timer.</span>
                                    </Popover>
                                }>
                                    <a className="semi-bold"> AJAX loading </a>
                                </OverlayTrigger>
                                in a snap with auto refresh.
                                Add
                                <OverlayTrigger placement="bottom" overlay={
                                    <Popover id="action-buttons-popover">
                                        You can use 5 types of action buttons, toggle, edit, fullscreen, delete and custom button(s) which you can set for a custom action(s). You can even change the order of the action buttons. You can set a custom icon for every button. You can also add your own custom buttons, tabs, progress bars and more.
                                    </Popover>
                                }>
                                    <a className="semi-bold"> Infinite </a>
                                </OverlayTrigger>
                                buttons and controls to widget header. All widgets are
                                <OverlayTrigger placement="bottom" overlay={
                                    <Popover id="jarvis-sortable-popover">
                                        The Jarvis Widgets are sortable, on tablet and some phones. Dont want sortable widgets on tables/phones, no problem you can remove this.
                                    </Popover>
                                }>
                                    <a className="semi-bold"> Sortable </a>
                                </OverlayTrigger>
                                across all bootstrap col-spans and uses
                                <OverlayTrigger placement="bottom" overlay={
                                    <Popover id="jarvis-localStorage-popover">
                                        This plugin gives you the option to let you save a couple of settings for example the position, color and title of the widget.
                                    </Popover>
                                }>
                                    <a className="semi-bold"> HTML5 localStorage </a>
                                </OverlayTrigger>
                                . Also now supports
                                <OverlayTrigger placement="bottom" overlay={
                                    <Popover id="jarvis-RTL-popover">
                                        This plugin is by default ltr, but it has a rtl option.
                                    </Popover>
                                }>
                                    <a className="semi-bold"> RTL Support </a>
                                </OverlayTrigger>
                                ,
                                <OverlayTrigger placement="bottom" overlay={
                                    <Popover id="jarvis-Crosbrowser-popover">
                                        The Jarvis Widget works in every modern browser on windows, ios, osx, android, blackberry and windows phone.
                                    </Popover>
                                }>
                                    <a className="semi-bold"> Crosbrowser Support </a>
                                </OverlayTrigger>
                                ,
                                <OverlayTrigger placement="bottom" overlay={
                                    <Popover id="jarvis-Callback-popover">
                                        The Jarvis Widget plugin has a couple of callback function wich you can use for several things, for example, use AJAX to store the data into a database.
                                    </Popover>
                                }>
                                    <a className="semi-bold"> Callback functions </a>
                                </OverlayTrigger>
                                and
                                <OverlayTrigger placement="bottom" overlay={
                                    <Popover id="jarvis-More-popover">
                                        To give you more control you can set a lot of options per widget by using a dataset tag which will override the main plugin settings.
                                    </Popover>
                                }>
                                    <a className="semi-bold"> More </a>
                                </OverlayTrigger>
                                ..</p>
                        </Alert>
                    </div>
                </div>
                {/* widget grid */}
                <WidgetGrid>
                    {/* row */}
                    <div className="row">
                        {/* NEW WIDGET START */}
                        <article className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            <JarvisWidget >
                                <header>
                                    <h2><strong>Default</strong> <i>Widget</i></h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <p> Widget comes with a default 10 padding to the body which can be removed by
                                            adding the class <code>.no-padding</code>
                                            to the <code>.widget-body</code> class. The default widget also comes with 5
                                            widget buttons as displayed on top right
                                            corner of the widget header. </p>
                                        <a href-void className="btn btn-default btn-lg"> <strong>Big</strong>
                                            <i>Button</i> </a>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}

                            <JarvisWidget
                                colorbutton={false}
                                togglebutton={false}
                                deletebutton={false}
                                fullscreenbutton={false}
                                color="blue">
                                <header>
                                    <h2><strong>Title</strong> <i>Change</i></h2>
                                </header>
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <h3 className="alert alert-info"> Activate Options Button </h3>
                                        <code>data-widget-editbutton</code>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false}
                                          togglebutton={false} deletebutton={false}
                                          color="greenLight">
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <h2><strong>Full</strong> <i>Screen</i></h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <h2 className="alert alert-success"> Make any widget full screen</h2>
                                        <code>data-widget-fullscreenbutton</code>
                                        <br /><br />
                                        <p>Usefull when viewing images, gallery, tables with large data and maps. There
                                            are much useful applications to this method</p>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false}
                                          togglebutton={false} editbutton={false}
                                          fullscreenbutton={false} color="red">
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <h2><strong>Delete</strong> <i>Widget </i></h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <h6 className="alert alert-warning semi-bold">
                                            <i className="fa fa-times"/> By deleting a widget you will
                                            <strong>remove</strong> the widget from the page and will need to connect
                                            the backend with the onevent handler to delete it from database.
                                        </h6>
                                        <code>data-widget-deletebutton</code>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget togglebutton={false}
                                          editbutton={false} deletebutton={false}
                                          fullscreenbutton={false}>
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <h2><strong>Widget</strong> <i>Colors</i></h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-8">
                                                <h5><strong>Change</strong> and <i>save</i> widget <u>color</u></h5>
                                                <code>colorbutton</code>
                                                <br />
                                                <br />
                                                <p>Change widget color at will and SmartAdmin will permanently remember
                                                    the color of your chosen widget.
                                                    Do this to any widget in any page and SmartAdmin will keep track of
                                                    all your widgets!</p>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <img src="styles/img/demo/widget-colorpicker.png"
                                                     alt="widget colorpicker"
                                                     className="pull-right hover-transparent img-responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false}
                                          togglebutton={false} deletebutton={false}
                                          fullscreenbutton={false} custombutton={false}
                                          color="pink">
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-comments"/> </span>
                                    <h2><strong>Label &amp; Badges</strong></h2>
                                    <div className="widget-toolbar">
                                        <div className="label label-success">
                                            <i className="fa fa-arrow-up"/> 2.35%
                                        </div>
                                    </div>
                                    <div className="widget-toolbar">
                                        <div className="badge bg-color-blue">
                                            99
                                        </div>
                                    </div>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        {/* widget toolbar */}
                                        <div className="widget-body-toolbar text-center">
                                            <div className="badge bg-color-purple">
                                                small badge
                                            </div>
                                            <div className="label label-warning">
                                                <i className="fa fa-check"/> I am a big label
                                            </div>
                                        </div>
                                        {/* end widget toolbar */}
                                        {/* widget body text*/}
                                        <p className="alert alert-info">
                                            Add label inside widget footer / toolbar
                                        </p>
                                        {/* end widget body text*/}
                                        {/* widget footer */}
                                        <div className="widget-footer">
                                            <div className="badge bg-color-greenLight pull-left">
                                                13
                                            </div>
                                            <div className="label label-danger">
                                                <i className="fa fa-arrow-down"/> -1.75%
                                            </div>
                                        </div>
                                        {/* end widget footer */}
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}

                            <TabbedWidgetDemo />


                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget
                                load="api/html/widget-demo.html"
                                colorbutton={false} editbutton={false}
                                togglebutton={false} deletebutton={false}
                                fullscreenbutton={false} custombutton={false}>

                                <header>
                                    <h2><strong>Refresh</strong> <i>Widget</i></h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        {/* widget body text*/}
                                        <p>This content will be replaced via ajax loader...</p>
                                        {/* end widget body text*/}
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                        </article>
                        {/* WIDGET END */}
                        {/* NEW WIDGET START */}
                        <article className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget editbutton={false}
                                          colorbutton={false} deletebutton={false}
                                          fullscreenbutton={false} color="darken">
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-arrows-v"/> </span>
                                    <h2 className="font-md"><strong>Collapsable</strong> <i>Widget</i></h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <h2 className="alert alert-warning"> This widget is opened by default </h2>
                                        <code>data-widget-togglebutton</code>
                                        <br /><br />
                                        <p>Notice the header text size slightly larger than other widget headers</p>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget editbutton={false}
                                          colorbutton={false} deletebutton={false}
                                          fullscreenbutton={false} collapsed={true}>
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-arrows-v"/> </span>
                                    <h2><strong><i>Collapsed </i></strong>
                                        <small>Widget</small>
                                    </h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <h2 className="alert alert-warning"> This widget is collapsed by default </h2>
                                        <code>data-widget-collapsed</code>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false}
                                          togglebutton={false} editbutton={false}
                                          fullscreenbutton={false} deletebutton={false}
                                          color="purple">
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <h2><strong>Progress</strong> <i>bars</i></h2>
                                    <div className="widget-toolbar">
                                        <div className="progress progress-striped active" data-tooltip="55%"
                                             data-tooltip-placement="bottom">
                                            <div className="progress-bar progress-bar-success" role="progressbar"
                                                 style={{width: '55%'}}>55 %
                                            </div>
                                        </div>
                                    </div>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body no-padding">
                                        <div className="widget-body-toolbar">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default">
                                                    <i className="fa fa-bold"/>
                                                </button>
                                                <button type="button" className="btn btn-default">
                                                    <i className="fa fa-italic"/>
                                                </button>
                                                <button type="button" className="btn btn-default">
                                                    <i className="fa fa-underline"/>
                                                </button>
                                            </div>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-default">
                                                    <i className="fa fa-align-left"/>
                                                </button>
                                                <button type="button" className="btn btn-default">
                                                    <i className="fa fa-align-center"/>
                                                </button>
                                                <button type="button" className="btn btn-default">
                                                    <i className="fa fa-align-right"/>
                                                </button>
                                                <button type="button" className="btn btn-default">
                                                    <i className="fa fa-align-justify"/>
                                                </button>
                                            </div>
                                        </div>
                                        <textarea className="form-control no-border" placeholder="Textarea" rows="4"
                                                  defaultValue={' This is a textarea - below me is widget footer and above is the widget toolbar!'}/>
                                        <div className="widget-footer">
                                            <button className="btn btn-sm btn-primary" type="button">
                                                Save
                                            </button>
                                            <button className="btn btn-sm btn-danger disabled pull-left" type="button">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget editbutton={false}
                                          colorbutton={false} togglebutton={false}
                                          deletebutton={false} fullscreenbutton={false}
                                          color="blueLight">
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-hand-o-up"/> </span>
                                    <h2><strong>Widget</strong> <i>buttons</i></h2>
                                    <div className="widget-toolbar">
                                        <a href-void className="btn btn-primary">Btn</a>
                                    </div>
                                    <div className="widget-toolbar">
                                        <div className="btn-group" data-toggle="buttons">
                                            <label className="btn btn-default btn-xs active">
                                                <input type="radio" name="style-a1" id="style-a1"/> <i
                                                className="fa fa-play"></i>
                                            </label>
                                            <label className="btn btn-default btn-xs">
                                                <input type="radio" name="style-a2" id="style-a2"/> <i
                                                className="fa fa-pause"></i>
                                            </label>
                                            <label className="btn btn-default btn-xs">
                                                <input type="radio" name="style-a2" id="style-a3"/> <i
                                                className="fa fa-stop"></i>
                                            </label>
                                        </div>
                                    </div>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <h4 className="alert alert-info"> Insert buttons to header manually or
                                            dynamically </h4>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false}
                                          togglebutton={false} editbutton={false}
                                          fullscreenbutton={false} deletebutton={false}
                                          color="orange">
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <h2><strong>With</strong> <i>Paging</i></h2>
                                    <div className="widget-toolbar">
                                        <ul className="pagination pagination-xs">
                                            <li className="disabled">
                                                <a href-void>Prev</a>
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
                                                <a href-void>Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body no-padding">
                                        <p className="alert alert-success"><strong><i className="fa fa-check"/>
                                            Alert</strong>
                                            without body padding... </p>
                                        <p className="padding-10"> Notice this widget body has no padding!</p>
                                        <div className="widget-footer">
                                            <button className="btn btn-sm btn-success disabled" type="button">
                                                Previous
                                            </button>
                                            <button className="btn btn-sm btn-success" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}


                            <JarvisWidget colorbutton={false}
                                          togglebutton={false} editbutton={false}
                                          fullscreenbutton={false} deletebutton={false}
                                          color="blueDark">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-arrow-down"/> </span>
                                    <h2><strong>Widget</strong> <i><u>with</u> Dropdown</i></h2>
                                    <div className="widget-toolbar">
                                        <Dropdown className="btn-group" id="widget-demo-dropdown">
                                            <Dropdown.Toggle className="btn btn-xs dropdown-toggle btn-warning">
                                                Dropdown
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu pull-right">
                                                <MenuItem>
                                                    Option 1
                                                </MenuItem>
                                                <MenuItem>
                                                    Option 2
                                                </MenuItem>
                                                <MenuItem>
                                                    Option 3
                                                </MenuItem>
                                                <MenuItem divider/>
                                                <MenuItem>
                                                    Option 4
                                                </MenuItem>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        Add dropdowns to header with ease. Making sure to add btn-xs class when using
                                        dropdowns on the widget header.
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>


                            <SwitchWidgetDemo />


                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget sortable={false} colorbutton={false}
                                          togglebutton={false} editbutton={false}
                                          fullscreenbutton={false} deletebutton={false}
                                          color="darken">
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-lock"/> </span>
                                    <h2><strong>Locked</strong> <i>Widget</i></h2>
                                    <div className="widget-toolbar smart-form">
                                        <label className="input"> <i className="icon-append fa fa-question-circle"/>
                                            <input type="text" placeholder="Focus to view the tooltip"/>
                                            <b className="tooltip tooltip-top-right">
                                                <i className="fa fa-warning txt-color-teal"/>
                                                Some helpful information</b>
                                        </label>
                                    </div>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body">
                                        <p className="alert alert-success"><i className="fa fa-lock"/> Locked widgets
                                            lock the widget to the base grid (<i>you will not be able to drag this
                                                widget</i> ). This also allows you to append and use input text elmenets
                                            on the widget header. </p>
                                        <code>data-widget-sortable=&quot;<strong>false</strong>&quot;</code>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget colorbutton={false} editbutton={false}
                                          color="greenDark">
                                {/* widget options:
                                 usage: <div id="wid-id-0" editbutton={false}>
                                 colorbutton={false}
                                 editbutton={false}
                                 togglebutton={false}
                                 deletebutton={false}
                                 fullscreenbutton={false}
                                 custombutton={false}
                                 collapsed={true}
                                 sortable={false}
                                 */}
                                <header>
                                    <h2><strong>Fixed</strong> <i>Height</i></h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body no-padding">
                                        <div className="widget-body-toolbar">
                                            <div className="row">
                                                <div className="col-xs-9 col-sm-5 col-md-5 col-lg-5">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i
                                                            className="fa fa-search"></i></span>
                                                        <input className="form-control" id="prepend"
                                                               placeholder="Filter" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="col-xs-3 col-sm-7 col-md-7 col-lg-7 text-right">
                                                    <button className="btn btn-success">
                                                        <i className="fa fa-plus"/> <span className="hidden-mobile">Add New Row</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom-scroll table-responsive"
                                             style={{height:'290px', overflowY: 'scroll'}}>
                                            <table className="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th><i className="fa fa-key text-warning"/> License Key</th>
                                                    <th>Username <i className="text-danger">!</i></th>
                                                    <th>Date</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>C87E48EF-605A-B4FF</td>
                                                    <td>erat@montesnasceturridiculus.org</td>
                                                    <td>10/03/13</td>
                                                </tr>
                                                <tr>
                                                    <td>5DDA79E7-890F-064D</td>
                                                    <td>Nunc.lectus@ipsum.co.uk</td>
                                                    <td>28/12/13</td>
                                                </tr>
                                                <tr>
                                                    <td>468459AA-7933-C017</td>
                                                    <td>vitae.mauris.sit@tempordiamdictum.net</td>
                                                    <td>25/02/14</td>
                                                </tr>
                                                <tr>
                                                    <td>C3006C18-4677-D2CE</td>
                                                    <td>nec.urna.suscipit@acrisusMorbi.edu</td>
                                                    <td>06/07/14</td>
                                                </tr>
                                                <tr>
                                                    <td>E535C188-FDF4-90CB</td>
                                                    <td>lobortis@pedeacurna.com</td>
                                                    <td>28/12/12</td>
                                                </tr>
                                                <tr>
                                                    <td>95489E95-9602-18B7</td>
                                                    <td>egestas.lacinia.Sed@In.ca</td>
                                                    <td>17/07/14</td>
                                                </tr>
                                                <tr>
                                                    <td>D34E6661-D81A-9328</td>
                                                    <td>arcu@lectus.ca</td>
                                                    <td>14/10/14</td>
                                                </tr>
                                                <tr>
                                                    <td>C72D2C04-458F-EBD0</td>
                                                    <td>ut.pharetra.sed@vulputatevelit.net</td>
                                                    <td>30/04/14</td>
                                                </tr>
                                                <tr>
                                                    <td>10CAFA5C-AB4B-8B45</td>
                                                    <td>arcu.eu.odio@Duis.co.uk</td>
                                                    <td>14/02/13</td>
                                                </tr>
                                                <tr>
                                                    <td>AA4F5CBA-1CE8-85B7</td>
                                                    <td>nec@rutrum.net</td>
                                                    <td>06/02/14</td>
                                                </tr>
                                                <tr>
                                                    <td>2D816071-8F99-B315</td>
                                                    <td>Praesent.luctus.Curabitur@elementum.ca</td>
                                                    <td>27/09/13</td>
                                                </tr>
                                                <tr>
                                                    <td>41BDB60C-C6EA-54EB</td>
                                                    <td>Nunc.sed.orci@sitamet.org</td>
                                                    <td>18/11/13</td>
                                                </tr>
                                                <tr>
                                                    <td>43F3D48B-FEF3-776E</td>
                                                    <td>eu.erat@nequevitaesemper.com</td>
                                                    <td>23/04/13</td>
                                                </tr>
                                                <tr>
                                                    <td>2521899F-79B9-B309</td>
                                                    <td>mattis.velit@risusQuisque.ca</td>
                                                    <td>04/07/13</td>
                                                </tr>
                                                <tr>
                                                    <td>D08994C9-DCB1-948B</td>
                                                    <td>Proin@metusAliquam.net</td>
                                                    <td>27/07/13</td>
                                                </tr>
                                                <tr>
                                                    <td>7AD2C774-36BA-0B2B</td>
                                                    <td>tincidunt@Lorem.com</td>
                                                    <td>01/07/14</td>
                                                </tr>
                                                <tr>
                                                    <td>162C0373-FF3B-2469</td>
                                                    <td>ante.dictum.cursus@ultrices.org</td>
                                                    <td>10/02/13</td>
                                                </tr>
                                                <tr>
                                                    <td>05641987-3D48-DD72</td>
                                                    <td>lorem.ut.aliquam@Sednecmetus.org</td>
                                                    <td>16/08/14</td>
                                                </tr>
                                                <tr>
                                                    <td>3A173E5A-192A-0D5D</td>
                                                    <td>nunc.risus@vitae.org</td>
                                                    <td>04/04/13</td>
                                                </tr>
                                                <tr>
                                                    <td>67081066-E0B5-9E37</td>
                                                    <td>lectus@sed.org</td>
                                                    <td>10/12/14</td>
                                                </tr>
                                                <tr>
                                                    <td>C677C05F-7D98-C3E9</td>
                                                    <td>auctor.quis@Morbi.org</td>
                                                    <td>30/03/13</td>
                                                </tr>
                                                </tbody>
                                            </table>
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
                            <div className="well">
                                <h1>Basic Usage</h1>
                                <div className="alert alert-info">
                                    Note: You must delete the data-attribute* associated in order to act as true. For
                                    example <code> data-widget-togglebutton=&quot;true&quot;</code> will still act as
                                    <code>false</code>, you must remove the <strong>data-attribute</strong> for the
                                    statement to be true.
                                </div>
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th style={{width:'25%'}}>HTML5 data attributes / CSS / HTML</th>
                                        <th style={{width:'15%'}}>Place after</th>
                                        <th style={{width:'15%'}}>Example value(s)</th>
                                        <th style={{width:'45%'}}>Desctription</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>data-widget-sortable</td>
                                        <td><code>header</code></td>
                                        <td>false</td>
                                        <td>Prevent a widget from being sortable <i>(can only be used with the value
                                            'false')</i>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-icon</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>fa fa-trash</td>
                                        <td>Use a icon in the widgets header <i>(see icons section for all list of
                                            icons)</i>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-togglebutton</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>false</td>
                                        <td>Prevent a widget from having a toggle button <i>(can only be used with the
                                            value 'false')</i>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-deletebutton</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>false</td>
                                        <td>Prevent a widget from having a delete button <i>(can only be used with the
                                            value 'false')</i>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-editbutton</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>false</td>
                                        <td>Prevent a widget from having a edit button <i>(can only be used with the
                                            value 'false')</i>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-fullscreenbutton</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>false</td>
                                        <td>Prevent a widget from having a fullscreen button <i>(can only be used with
                                            the value 'false')</i>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-load</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>widget-ajax.php</td>
                                        <td>The file that is loaded with ajax.</td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-refresh</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>10</td>
                                        <td>Seconds to refresh a ajax file <i>(see 'data-widget-load')</i>.</td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-refreshbutton</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>false</td>
                                        <td>Prevent a ajax widget from showing a refresh button <i>(can only be used
                                            with the value 'false')</i>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-hidden</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>true</td>
                                        <td>Hide a widget at load <i>(can only be used with the value 'true')</i>.</td>
                                    </tr>
                                    <tr>
                                        <td> colorbutton</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>false</td>
                                        <td>This is active by default, set it to false to hide.</td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-collapsed</td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>false</td>
                                        <td>Collapse a widget upon load <i>(can only be used with the value 'true')</i>.
                                            This will allways be collapsed every page load.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>data-widget-grid</td>
                                        <td><code>article</code></td>
                                        <td>false</td>
                                        <td>You can exclude grids from being a sortable/droppable area, this means that
                                            all widgets in this area will work, but cant be sortable/droppable and that
                                            all other
                                            widgets cant be dropped in this area. Add this attribute <i>(can only be
                                                used with the value 'false')</i> to a grid element.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><code>.no-padding</code></td>
                                        <td><code>.widget-body</code></td>
                                        <td>n/a</td>
                                        <td>Removes all padding inside widget body</td>
                                    </tr>
                                    <tr>
                                        <td><code>.well</code></td>
                                        <td><code>.jarviswidget</code></td>
                                        <td>n/a</td>
                                        <td>Converts a widget to a well</td>
                                    </tr>
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td colSpan="4">These HTML5 attributes are used as individual widget options.
                                            Main options can be changed in the widgets plugin it self.
                                            Notice: data attributes can only have 1 boolan value(see above)!
                                        </td>
                                    </tr>
                                    </tfoot>
                                </table>
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

export default Widgets