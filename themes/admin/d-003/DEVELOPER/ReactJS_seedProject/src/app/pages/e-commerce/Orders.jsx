import React from 'react'

import _ from 'lodash'

import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

import Datatable from '../../../components/tables/Datatable.jsx'


export default ()=>(
    <div id="content">
        <div className="row">
            <BigBreadcrumbs items={['E-Commerce', 'Orders']} icon="fa fa-fw fa-shopping-cart"
                            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
            <SubHeader />
        </div>

        <WidgetGrid>


            <div className="row">
                <article className="col-sm-12">

                    <JarvisWidget editbutton={false} color="blueDark">
                        <header><span className="widget-icon"> <i className="fa fa-table"/> </span> <h2>Column
                            Filters </h2></header>
                        <div>
                            <div className="widget-body no-padding"><Datatable
                                options={{
                                    ajax: 'api/e-commerce/orders.json',
                                     columns: [
                                     {data: "orderId"},
                                     {data: "customerId"},
                                     {data: "purchase"},
                                     {data: "delivery"},
                                     {data: "basePrice"},
                                     {data: "postalZip"},
                                     {data: "status"}
                                      ]
                                  }}
                                filter={true} className="table table-striped table-bordered" width="100%">

                                <thead>
                                <tr>
                                    <th className="hasinput" style={{width:'10%'}}>
                                        <input type="text" className="form-control" placeholder="Find ID"/>
                                    </th>
                                    <th className="hasinput" style={{width:'12%'}}>
                                        <input type="text" className="form-control" placeholder="Filter Cust ID"/>
                                    </th>
                                    <th className="hasinput icon-addon">
                                        <input id="dateselect_filter" type="text" placeholder="Purchase Date" className="form-control datepicker" data-dateformat="yy/mm/dd"/>
                                        <label htmlFor="dateselect_filter" className="glyphicon glyphicon-calendar no-margin padding-top-15" rel="tooltip" title="" data-original-title="Purchase Date"/>
                                    </th>
                                    <th className="hasinput">
                                        <input type="text" className="form-control" placeholder="Delivery Date"/>
                                    </th>
                                    <th className="hasinput" style={{width:'12%'}}>
                                        <input type="text" className="form-control" placeholder="Base Price Filter"/>
                                    </th>
                                    <th className="hasinput" style={{width:'10%'}}>
                                        <input type="text" className="form-control" placeholder="ZipCode Filter"/>
                                    </th>
                                    <th className="hasinput" style={{width:'10%'}}>
                                        <input type="text" className="form-control" placeholder="Status Filter"/>
                                    </th>

                                </tr>
                                <tr>
                                    <th data-class="expand">Order ID</th>
                                    <th>Cust ID / Phn</th>
                                    <th data-hide="phone, tablet">Purchase</th>
                                    <th data-hide="phone, tablet">Delivery</th>
                                    <th data-hide="phone,tablet">Base Price</th>
                                    <th data-hide="phone,tablet">Postal/Zip</th>
                                    <th>Status</th>
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