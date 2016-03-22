import React from 'react'
import Reflux from 'reflux'
import {Dropdown, MenuItem, OverlayTrigger, Tooltip, ProgressBar} from 'react-bootstrap'
import {Link} from 'react-router'
import _ from 'lodash'

import InboxActions from './../actions/InboxActions'
import InboxStore from './../stores/InboxStore'


let Inbox = React.createClass({
    mixins: [Reflux.connect(InboxStore)],
    getInitialState: function () {
        return InboxStore.getData()
    },
    componentWillMount: function () {
        InboxActions.init();
    },

    render: function () {
        let folder =  InboxStore.getFolder(this.props.params.folder)
        return (
            <div id="content">
                <div className="inbox-nav-bar no-content-padding">

                    <h1 className="page-title txt-color-blueDark hidden-tablet"><i className="fa fa-fw fa-inbox"/> Inbox
                    </h1>

                    <Dropdown className="btn-group visible-tablet" id="inbox-select-folder-dropdown">
                        <Dropdown.Toggle className="btn btn-default dropdown-toggle">
                            {folder.name }
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu pull-left">
                            {
                                _.map(this.state.folders, function (_folder) {
                                    let check = _folder.key == this.props.params.folder ?
                                        <i className="fa fa-check"/> : null;
                                    return (
                                        <MenuItem key={_folder.key} href={'#/inbox/folder/' + _folder.key}>
                                            {_folder.name} {check}
                                        </MenuItem>
                                    )
                                }.bind(this))
                            }
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="inbox-checkbox-triggered">
                        <div className="btn-group">
                            <OverlayTrigger placement="bottom"
                                            overlay={<Tooltip id="mark0important-tooltip">Mark Important</Tooltip>}>
                                <a className="btn btn-default"><strong><i
                                    className="fa fa-exclamation fa-lg text-danger"/></strong></a>
                            </OverlayTrigger>

                            <OverlayTrigger placement="bottom"
                                            overlay={<Tooltip id="move-to-folder-tooltip">Move to folder</Tooltip>}>
                                <a className="btn btn-default"><strong><i className="fa fa-folder-open fa-lg"/></strong></a>
                            </OverlayTrigger>

                            <OverlayTrigger placement="bottom"
                                            overlay={<Tooltip id="delete-message-tooltip">Delete</Tooltip>}>
                                <a ng-click="deleteSelected()" className="deletebutton btn btn-default"><strong><i
                                    className="fa fa-trash-o fa-lg"/></strong></a>
                            </OverlayTrigger>
                        </div>
                    </div>

                    <a id="compose-mail-mini" className="btn btn-primary pull-right hidden-desktop visible-tablet">
                        <strong><i className="fa fa-file fa-lg"/></strong> </a>

                    <div className="btn-group pull-right inbox-paging">
                        <a className="btn btn-default btn-sm"><strong><i className="fa fa-chevron-left"/></strong></a>
                        <a className="btn btn-default btn-sm"><strong><i className="fa fa-chevron-right"/></strong></a>
                    </div>
                    <span
                        className="pull-right"><strong>1-30</strong> of <strong>{folder.total}</strong></span>

                </div>

                <div id="inbox-content" className="inbox-body no-content-padding">

                    <div className="inbox-side-bar">
                        <Link to="/inbox/compose" id="compose-mail" className="btn btn-primary btn-block"><strong>Compose</strong></Link>
                        <h6> Folder
                            <OverlayTrigger placement="right"
                                            overlay={<Tooltip id="inbox-refresh-tooltip">Refresh</Tooltip>}>
                                <a className="pull-right txt-color-darken"><i className="fa fa-refresh"/></a>
                            </OverlayTrigger>
                        </h6>

                        <ul className="inbox-menu-lg">
                            {_.map(this.state.folders, function (_folder, idx) {
                                let unread = _folder.unread ? <span>({_folder.unread})</span>: null;
                                return (
                                    <li key={'inbox-sidebar-folder-'+idx} >
                                        <Link to={'/inbox/folder/' + _folder.key} > {_folder.name} {unread}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <h6> Quick Access
                            <OverlayTrigger placement="right"
                                            overlay={<Tooltip id="add-label-tooltip">Add Another</Tooltip>}>
                                <a className="pull-right txt-color-darken"><i className="fa fa-plus"/></a>
                            </OverlayTrigger>
                        </h6>

                        <ul className="inbox-menu-sm">
                            { _.map(folder.labels, function (label, idx) {
                                return (
                                    <li key={'folder-label'+idx}>
                                        <a>{label.label} ({label.count})</a>
                                    </li>
                                )
                            }) }
                        </ul>

                        <div className="air air-bottom inbox-space">
                            {this.state.space.free} of <strong>{this.state.space.total}</strong>

                            <OverlayTrigger placement="top"
                                            overlay={<Tooltip id="empty-spam-tooltip">Empty Spam</Tooltip>}>
                                <a className="pull-right txt-color-darken"><i className="fa fa-trash-o fa-lg"/></a>
                            </OverlayTrigger>

                            <ProgressBar bsStyle="success" className="progress-micro"
                                         now={this.state.space.ratio}/>

                        </div>
                    </div>

                    {this.props.children}

                    <div className="inbox-footer">
                        <div className="row">
                            <div className="col-xs-6 col-sm-1">
                                <div className="txt-color-white hidden-desktop visible-mobile">
                                    {this.state.space.free} of <strong>{this.state.space.total}</strong>
                                    <ProgressBar bsStyle="success" className="progress-micro"
                                                 now={this.state.space.ratio}/>
                                </div>
                            </div>

                            <div className="col-xs-6 col-sm-11 text-right">
                                <div className="txt-color-white inline-block">
                                    <i className="txt-color-blueLight hidden-mobile">Last account activity <i
                                        className="fa fa-clock-o"/> 52 mins ago |</i> Displaying <strong>44 of
                                    259</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default Inbox