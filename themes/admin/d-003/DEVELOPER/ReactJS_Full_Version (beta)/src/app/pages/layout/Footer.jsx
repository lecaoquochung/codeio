/**
 * Created by griga on 11/24/15.
 */

import React from 'react'

import {Dropdown, MenuItem} from 'react-bootstrap'

let Footer = React.createClass({
    render: function(){
        return (
            <div className="page-footer">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <span className="txt-color-white">SmartAdmin WebApp © 2013-2015</span>
                    </div>

                    <div className="col-xs-6 col-sm-6 text-right hidden-xs">
                        <div className="txt-color-white inline-block">
                            <i className="txt-color-blueLight hidden-mobile">Last account activity <i className="fa fa-clock-o" /> &nbsp; <strong>52 mins ago &nbsp;</strong> </i>

                            <Dropdown className="btn-group dropup" id="footer-progress-dropdown">
                                <Dropdown.Toggle className="btn btn-xs dropdown-toggle bg-color-blue txt-color-white">
                                    <i className="fa fa-link" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu pull-right text-left">
                                    <MenuItem>
                                        <div className="padding-5">
                                            <p className="txt-color-darken font-sm no-margin">Download Progress</p>

                                            <div className="progress progress-micro no-margin">
                                                <div className="progress-bar progress-bar-success" style={{width: 50 + '%'}}></div>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem divider />
                                    <MenuItem>
                                        <div className="padding-5">
                                            <p className="txt-color-darken font-sm no-margin">Server Load</p>

                                            <div className="progress progress-micro no-margin">
                                                <div className="progress-bar progress-bar-success" style={{width: 20 + '%'}}></div>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem divider />
                                    <MenuItem>
                                        <div className="padding-5">
                                            <p className="txt-color-darken font-sm no-margin">Memory Load <span className="text-danger">*critical*</span>
                                            </p>

                                            <div className="progress progress-micro no-margin">
                                                <div className="progress-bar progress-bar-danger" style={{width: 70 + '%'}}></div>
                                            </div>
                                        </div>
                                    </MenuItem>
                                    <MenuItem divider />
                                    <MenuItem>
                                        <div className="padding-5">
                                            <button className="btn btn-block btn-default">refresh</button>
                                        </div>
                                    </MenuItem>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});


export default Footer