import React from 'react'

import {OverlayTrigger, Tooltip, Popover} from 'react-bootstrap'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import TreeView from '../../../components/ui/TreeView.jsx'


let TreeViews = React.createClass({
    getInitialState: function(){
        return {
            demo1: [],
            demo2: []
        }
    },
    componentWillMount: function(){
        $.getJSON('api/ui/treeview.json').then(function(data){
            this.setState(data)
        }.bind(this))
    },
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['UI Elements', 'Tree View']} icon="desktop" className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>
                {/* widget grid */}
                <WidgetGrid>
                    {/* row */}
                    <div className="row">
                        {/* NEW WIDGET START */}
                        <article className="col-sm-12 col-md-12 col-lg-6">
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget editbutton={false} color="orange">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-lg fa-calendar"/> </span>
                                    <h2>Organizing view </h2>
                                </header>
                                {/* widget div*/}
                                <div>            {/* widget content */}
                                    <div className="widget-body">
                                        <div className="widget-body-toolbar bg-color-white">
                                            <form className="form-inline" role="form">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-10">
                                                        <div className="form-group">
                                                            <label className="sr-only">Task title</label>
                                                            <input type="email" className="form-control input-sm" placeholder="My Task"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="sr-only">Pick Week</label>
                                                            <select className="form-control input-sm">
                                                                <option>Week 1</option>
                                                                <option>Week 2</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="sr-only">Days</label>
                                                            <select className="form-control input-sm">
                                                                <option>Monday</option>
                                                                <option>Tuesday</option>
                                                                <option>Wednesday</option>
                                                                <option>Thursday</option>
                                                                <option>Friday</option>
                                                                <option>Saturday</option>
                                                                <option>Sunday</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-2 text-align-right">
                                                        <button type="submit" className="btn btn-warning btn-xs">
                                                            <i className="fa fa-plus"/> Add
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tree">

                                            <TreeView items={this.state.demo1} role="tree" />

                                        </div>
                                    </div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                            {/* end widget */}
                        </article>
                        {/* WIDGET END */}
                        {/* NEW WIDGET START */}
                        <article className="col-sm-12 col-md-12 col-lg-6">
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget editbutton={false} color="blue">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-sitemap"/> </span>
                                    <h2>Simple View </h2>
                                </header>
                                {/* widget div*/}
                                <div>            {/* widget content */}
                                    <div className="widget-body">
                                        <div className="tree smart-form">

                                            <TreeView items={this.state.demo2} role="tree" />
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
                    </div>
                    {/* end row */}
                </WidgetGrid>
                {/* end widget grid */}
            </div>
        )
    }
});

export default TreeViews