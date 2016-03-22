import React from 'react'

import {Alert} from 'react-bootstrap'


import SubHeader from '../layout/SubHeader.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'

let NormalTables = React.createClass({
    render: function () {
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Table', 'Normal Tables']} icon="table" className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                <WidgetGrid>
                    <div className="row">
                        <article className="col-sm-12">

                            <JarvisWidget editbutton={false} color="blueDark">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-table"/> </span>

                                    <h2>Normal Table</h2>
                                </header>
                                <div>
                                    <div className="widget-body">
                                        <p>Adds borders to any table row within <code>&lt;table&gt;</code> by adding the
                                            <code>.table-bordered</code>
                                            with the base class</p>

                                        <div className="table-responsive">

                                            <table className="table table-bordered">
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
                            </JarvisWidget>

                            <JarvisWidget editbutton={false} color="darken">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-table"/> </span>

                                    <h2>No Padding</h2>
                                </header>
                                <div>
                                    <div className="widget-body no-padding">
                                        <Alert bsStyle="info" className="no-margin fade in" dismisser="">
                                            <i className="fa-fw fa fa-info"/>
                                            Adds zebra-striping to table row within <code>&lt;table&gt;</code> by adding the <code>.table-striped</code>
                                            with the base class
                                        </Alert>
                                        <div className="table-responsive">

                                            <table className="table table-bordered table-striped">
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
                            </JarvisWidget>

                        </article>

                        <article className="col-sm-12 col-md-12 col-lg-6">
                            <JarvisWidget editbutton={false} color="greenDark">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-table"/> </span>

                                    <h2>Table hover states</h2>
                                </header>
                                <div>
                                    <div className="widget-body no-padding">
                                        <Alert bsStyle="info" className="no-margin" dismisser="">
                                            <i className="fa-fw fa fa-info"/>
                                            Enables hover effect <code>&lt;table&gt;</code> by adding the <code>.table-hover</code> with the
                                            base class
                                        </Alert>
                                        <div className="table-responsive">

                                            <table className="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>Wise</td>
                                                    <td>Man</td>
                                                    <td>@myorange</td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>
                            </JarvisWidget>
                        </article>

                        <article className="col-sm-12 col-md-12 col-lg-6">
                            <JarvisWidget editbutton={false} color="greenLight">
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-table"/> </span>

                                    <h2>Table TR with colors</h2>
                                </header>
                                <div>
                                    <div className="widget-body no-padding">
                                        <Alert bsStyle="info" className="no-margin" dismisser="">
                                            <i className="fa-fw fa fa-info"/>
                                            Add custom colors to your TR and TD <code>&lt;tr&gt;</code> by adding <code>.success</code>, <code>.danger</code>,
                                            <code>.warning</code> and <code>.info</code> respectively
                                        </Alert>
                                        <div className="table-responsive">

                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th><i className="fa fa-building"/> Product</th>
                                                    <th><i className="fa fa-calendar"/> Payment Taken</th>
                                                    <th><i className="glyphicon glyphicon-send"/> Status</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="success">
                                                    <td>1</td>
                                                    <td>TB - Monthly</td>
                                                    <td>01/04/2012</td>
                                                    <td>Approved</td>
                                                </tr>
                                                <tr className="danger">
                                                    <td>2</td>
                                                    <td>TB - Monthly</td>
                                                    <td>02/04/2012</td>
                                                    <td>Declined</td>
                                                </tr>
                                                <tr className="warning">
                                                    <td>3</td>
                                                    <td>TB - Monthly</td>
                                                    <td>03/04/2012</td>
                                                    <td>Pending</td>
                                                </tr>
                                                <tr className="info">
                                                    <td>4</td>
                                                    <td>TB - Monthly</td>
                                                    <td>04/04/2012</td>
                                                    <td>Call in to confirm</td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>
                            </JarvisWidget>

                        </article>
                    </div>
                    <div className="row">
                        <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <JarvisWidget editbutton={false}>
                                <header>
                                    <span className="widget-icon"> <i className="fa fa-table"/> </span>

                                    <h2>Condenced table + combined prev. classes</h2>
                                </header>
                                <div>
                                    <div className="widget-body no-padding">
                                        <Alert bsStyle="warning" className="no-margin" dismisser="">
                                            <i className="fa-fw fa fa-info"/>
                                            A combined table effect with all classes mentioned above added to <code>&lt;table&gt;</code>.
                                            <code> .table-bordered .table-striped .table-condensed .table-hover .smart-form
                                                .has-tickbox </code>
                                        </Alert>

                                        <div className="table-responsive">

                                            <table className="table table-bordered table-striped table-condensed table-hover smart-form has-tickbox">
                                                <thead>
                                                <tr>
                                                    <th>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>
                                                        </label>
                                                    </th>
                                                    <th>Column name <a href-void className="btn btn-xs btn-default pull-right"><i className="fa fa-filter"/></a></th>
                                                    <th>Column name <a href-void className="btn btn-xs btn-default pull-right"><i className="fa fa-filter"/></a></th>
                                                    <th>Column name <a href-void className="btn btn-xs btn-default pull-right"><i className="fa fa-filter"/></a></th>
                                                    <th>Column name <a href-void className="btn btn-xs btn-default pull-right"><i className="fa fa-filter"/></a></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>
                                                        </label>
                                                    </td>
                                                    <td>Row 1</td>
                                                    <td>Row 2</td>
                                                    <td>Row 3</td>
                                                    <td>Row 4</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>
                                                        </label>
                                                    </td>
                                                    <td>Row 1</td>
                                                    <td>Row 2</td>
                                                    <td>Row 3</td>
                                                    <td>Row 4</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>
                                                        </label>
                                                    </td>
                                                    <td>Row 1</td>
                                                    <td>Row 2</td>
                                                    <td>Row 3</td>
                                                    <td>Row 4</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>
                                                        </label>
                                                    </td>
                                                    <td>Row 1</td>
                                                    <td>Row 2</td>
                                                    <td>Row 3</td>
                                                    <td>Row 4</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>
                                                        </label>
                                                    </td>
                                                    <td>Row 1</td>
                                                    <td>Row 2</td>
                                                    <td>Row 3</td>
                                                    <td>Row 4</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" name="checkbox-inline"/>
                                                            <i/>
                                                        </label>
                                                    </td>
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
                            </JarvisWidget>
                        </article>
                    </div>
                </WidgetGrid>
            </div>
        )
    }
});

export default NormalTables