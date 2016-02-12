import React from 'react'

import _ from 'lodash'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import Datatable from '../../../components/tables/Datatable.jsx'


let Datatables = React.createClass({
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Table', 'Data Tables']} icon="table"
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                <WidgetGrid>


                    <div className="row">
                        <article className="col-sm-12">


                            <JarvisWidget editbutton={false} color="darken">
                                <header><span className="widget-icon"> <i className="fa fa-table"/> </span> <h2>Standard
                                    Data Tables</h2></header>
                                <div>
                                    <div className="widget-body no-padding"><Datatable
                                        options={{
                                        ajax: 'api/tables/datatables.standard.json',
                                        columns: [ {data: "id"}, {data: "name"}, {data: "phone"}, {data: "company"}, {data: "zip"}, {data: "city"}, {data: "date"} ] }}
                                        paginationLength={true} className="table table-striped table-bordered table-hover"
                                        width="100%">
                                        <thead>
                                        <tr>
                                            <th data-hide="phone">ID</th>
                                            <th data-class="expand"><i
                                                className="fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs"/>
                                                Name
                                            </th>
                                            <th data-hide="phone"><i
                                                className="fa fa-fw fa-phone text-muted hidden-md hidden-sm hidden-xs"/>
                                                Phone
                                            </th>
                                            <th>Company</th>
                                            <th data-hide="phone,tablet"><i
                                                className="fa fa-fw fa-map-marker txt-color-blue hidden-md hidden-sm hidden-xs"/>
                                                Zip
                                            </th>
                                            <th data-hide="phone,tablet">City</th>
                                            <th data-hide="phone,tablet"><i
                                                className="fa fa-fw fa-calendar txt-color-blue hidden-md hidden-sm hidden-xs"/>
                                                Date
                                            </th>
                                        </tr>
                                        </thead>
                                    </Datatable></div>
                                </div>
                            </JarvisWidget> <JarvisWidget editbutton={false} color="blueDark">
                            <header><span className="widget-icon"> <i className="fa fa-table"/> </span> <h2>Column
                                Filters </h2></header>
                            <div>
                                <div className="widget-body no-padding"><Datatable
                                    options={{
                                    ajax: 'api/tables/datatables.filters.json', columns: [ {data: "name"}, {data: "position"}, {data: "office"}, {data: "age"}, {data: "date"}, {data: "salary"} ] }}
                                    filter={true} className="table table-striped table-bordered" width="100%">
                                    <thead>
                                    <tr>
                                        <th className="hasinput" style={{width:"17%"}}><input type="text"
                                                                                              className="form-control"
                                                                                              placeholder="Filter Name"/>
                                        </th>
                                        <th className="hasinput" style={{width:'18%'}}>
                                            <div className="input-group"><input className="form-control"
                                                                                placeholder="Filter Position"
                                                                                type="text"/> <span
                                                className="input-group-addon"> <span className="onoffswitch"> <input
                                                type="checkbox" name="start_interval" className="onoffswitch-checkbox"
                                                id="st3"/> <label className="onoffswitch-label" htmlFor="st3"> <span
                                                className="onoffswitch-inner" data-swchon-text="YES"
                                                data-swchoff-text="NO"/> <span className="onoffswitch-switch"/> </label> </span> </span>
                                            </div>
                                        </th>
                                        <th className="hasinput" style={{width:'16%'}}><input type="text"
                                                                                              className="form-control"
                                                                                              placeholder="Filter Office"/>
                                        </th>
                                        <th className="hasinput" style={{width:'17%'}}><input type="text"
                                                                                              className="form-control"
                                                                                              placeholder="Filter Age"/>
                                        </th>
                                        <th className="hasinput icon-addon"><input id="dateselect_filter" type="text"
                                                                                   placeholder="Filter Date"
                                                                                   className="form-control datepicker"
                                                                                   data-dateformat="yy/mm/dd"/> <label
                                            htmlFor="dateselect_filter"
                                            className="glyphicon glyphicon-calendar no-margin padding-top-15"
                                            rel="tooltip" title="" data-original-title="Filter Date"/>
                                        </th>
                                        <th className="hasinput" style={{width:'16%'}}>
                                            <input type="text" className="form-control"
                                                   placeholder="Filter Salary"/>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th data-class="expand">Name</th>
                                        <th>Position</th>
                                        <th data-hide="phone">Office</th>
                                        <th data-hide="phone">Age</th>
                                        <th data-hide="phone,tablet">Start date</th>
                                        <th data-hide="phone,tablet">Salary</th>
                                    </tr>
                                    </thead>
                                </Datatable>
                                </div>
                            </div>
                        </JarvisWidget>


                            <JarvisWidget editbutton={false} color="blueDark">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-table"/> </span>
                                    <h2>Hide / Show Columns </h2>
                                </header>
                                <div>
                                    <div className="widget-body no-padding">

                                        <Datatable options={{
                                                    ajax: 'api/tables/datatables.standard.json',
                                                    columns: [
                                                            {data: "id"},
                                                            {data: "name"},
                                                            {data: "phone"},
                                                            {data: "company"},
                                                            {data: "zip"},
                                                            {data: "city"},
                                                            {data: "date"}
                                                    ],
                                                    buttons: [
                                                    'colvis'
                                                    ]
                                                }}
                                                   className="table table-striped table-bordered table-hover"
                                                   width="100%">
                                            <thead>
                                            <tr>
                                                <th data-hide="phone">ID</th>
                                                <th data-class="expand">Name</th>
                                                <th>Phone</th>
                                                <th data-hide="phone">Company</th>
                                                <th data-hide="phone,tablet">Zip</th>
                                                <th data-hide="phone,tablet">City</th>
                                                <th data-hide="phone,tablet">Date</th>
                                            </tr>
                                            </thead>
                                        </Datatable>

                                    </div>
                                </div>
                            </JarvisWidget>


                            <JarvisWidget editbutton={false} color="blueDark">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-table"/> </span>
                                    <h2>Export to PDF / Excel</h2>
                                </header>
                                <div>
                                    <div className="widget-body no-padding">

                                        <Datatable
                                            options={{
                                                ajax: 'api/tables/datatables.standard.json',
                                                columns: [
                                                        {data: "id"},
                                                        {data: "name"},
                                                        {data: "phone"},
                                                        {data: "company"},
                                                        {data: "zip"},
                                                        {data: "city"},
                                                        {data: "date"}
                                                ],
                                                buttons: [
                                                    'copy', 'excel', 'pdf'
                                                ]
                                            }}
                                            className="table table-striped table-bordered table-hover"
                                            width="100%">
                                            <thead>
                                            <tr>
                                                <th data-hide="mobile-p">ID</th>
                                                <th data-class="expand">Name</th>
                                                <th>Phone</th>
                                                <th data-hide="mobile-p">Company</th>
                                                <th data-hide="mobile-p,tablet-p">Zip</th>
                                                <th data-hide="mobile-p,tablet-p">City</th>
                                                <th data-hide="mobile-p,tablet-p">Date</th>
                                            </tr>
                                            </thead>
                                        </Datatable>

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

export default Datatables