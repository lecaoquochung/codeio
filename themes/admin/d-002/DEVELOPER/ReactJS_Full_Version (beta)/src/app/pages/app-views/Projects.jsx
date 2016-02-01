import React from 'react'

import SubHeader from '../layout/SubHeader.jsx'
import WidgetGrid from '../../../components/layout/widgets/WidgetGrid.jsx'
import JarvisWidget from '../../../components/layout/widgets/JarvisWidget.jsx'
import BigBreadcrumbs from '../../../components/layout/navigation/components/BigBreadcrumbs.jsx'

import SparklineContainer from '../../../components/graphs/inline/SparklineContainer.jsx'

import Datatable from '../../../components/tables/Datatable.jsx'

let Projects = React.createClass({

    render: function () {
        let options = {
            "ajax": 'api/projects/project-list.json',
            "iDisplayLength": 15,
            "columns": [
                {
                    "class": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ''
                },
                {"data": "name"},
                {"data": "est"},
                {"data": "contacts"},
                {"data": "status"},
                {"data": "target-actual"},
                {"data": "starts"},
                {"data": "ends"},
                {"data": "tracker"}
            ],
            "order": [[1, 'asc']]
        }
        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Projects', 'Overview']} icon="file-text-o"
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <SubHeader />
                </div>

                <WidgetGrid>
                    {/* row */}
                    <div className="row">
                        <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="alert alert-info">
                                <strong>NOTE:</strong> All the data is loaded from a seperate JSON file
                            </div>
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget className="well">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-comments"/> </span>

                                    <h2>Widget Title </h2>
                                </header>
                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body no-padding">
                                        <SparklineContainer>

                                            <Datatable options={options}
                                                       detailsFormat={detailsFormat}
                                                       className="display projects-table table table-striped table-bordered table-hover"
                                                       cellSpacing="0" width="100%">
                                                <thead>
                                                <tr>
                                                    <th/>
                                                    <th>Projects</th>
                                                    <th><i
                                                        className="fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs"/>
                                                        EST
                                                    </th>
                                                    <th>Contacts</th>
                                                    <th>Status</th>
                                                    <th><i className="fa fa-circle txt-color-darken font-xs"/> Target/
                                                        <i className="fa fa-circle text-danger font-xs"/> Actual
                                                    </th>
                                                    <th><i
                                                        className="fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs"/>
                                                        Starts
                                                    </th>
                                                    <th><i
                                                        className="fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs"/>
                                                        Ends
                                                    </th>
                                                    <th>Tracker</th>
                                                </tr>
                                                </thead>
                                                {/*

                                                 */}
                                            </Datatable>
                                        </SparklineContainer></div>
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                        </article>
                    </div>
                    {/* end row */}
                </WidgetGrid>
            </div>
        )
    }
});


function detailsFormat(d){

        return `<table cellPadding="5" cellSpacing="0" border="0" class="table table-hover table-condensed">
            <tbody><tr>
                <td style="width:100px">Project Title:</td>
                <td>${d.name}</td>
            </tr>
            <tr>
                <td>Deadline:</td>
                <td>${d.ends}</td>
            </tr>
            <tr>
                <td>Extra info:</td>
                <td>And any further details here (images etc)...</td>
            </tr>
            <tr>
                <td>Comments:</td>
                <td>${d.comments}</td>
            </tr>
            <tr>
                <td>Action:</td>
                <td>${d.action}</td>
            </tr></tbody>
        </table>`
}

export default Projects