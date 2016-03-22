import React from 'react'
import Reflux from 'reflux'
import {OverlayTrigger, Tooltip, Dropdown, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router'
import _ from 'lodash'

import Moment from '../../../../components/utils/Moment.jsx'
import HtmlRender from '../../../../components/utils/HtmlRender.jsx'

import InboxActions from './../actions/InboxActions'
import InboxStore from './../stores/InboxStore'

let InboxDetail = React.createClass({
    mixins: [Reflux.connect(InboxStore)],
    getInitialState: function () {
        return InboxStore.getData()
    },
    render: function () {
        let message = this.state.message;
        return (
            <div className="table-wrap custom-scroll">
                <h2 className="email-open-header">
                    {message.subject} <span className="label txt-color-white">{message.folder}</span>
                    <OverlayTrigger placement="left" overlay={<Tooltip id="Print-tooltip">Print</Tooltip>}>
                        <a href-void className="txt-color-darken pull-right"><i className="fa fa-print"/></a>
                    </OverlayTrigger>
                </h2>

                <div className="inbox-info-bar">
                    <div className="row">
                        <div className="col-sm-9">
                            <img src={message.contact.picture} alt="me" className="away"/>
                            <strong>{message.contact.name}</strong>
                            <span className="hidden-mobile">&lt;{message.contact.email}&gt;to <strong>me</strong> on <i><Moment
                                date={message.date} format="LLLL"/></i></span>
                        </div>
                        <div className="col-sm-3 text-right">

                            <Dropdown className="btn-group text-left" id="replay-message-dropdown">
                                <Link to={'inbox/replay/'+message._id}
                                      className="btn btn-primary btn-sm replythis">
                                    <i className="fa fa-reply"/> Reply
                                </Link>
                                <Dropdown.Toggle className="btn btn-primary btn-sm dropdown-toggle"/>
                                <Dropdown.Menu className="dropdown-menu pull-right">
                                    <MenuItem href={'#/inbox/replay/'+message._id} className="replythis">
                                        <i className="fa fa-reply"/> Reply
                                    </MenuItem>
                                    <MenuItem className="replythis">
                                        <i className="fa fa-mail-forward"/> Forward
                                    </MenuItem>
                                    <MenuItem>
                                        <i className="fa fa-print"/> Print
                                    </MenuItem>
                                    <li className="divider"/>
                                    <MenuItem>
                                        <i className="fa fa-ban"/> Mark as spam!
                                    </MenuItem>
                                    <MenuItem>
                                        <i className="fa fa-trash-o"/> Delete forever
                                    </MenuItem>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>
                </div>

                <HtmlRender className="inbox-message" html={message.body}/>

                { (message.attachments && message.attachments.length) ?
                    <div className="inbox-download">
                        {message.attachments.length} attachment(s) — <a href-void> Download all attachments</a>

                        <ul className="inbox-download-list">
                            {_.map(message.attachments, function (attachment, idx) {
                                return (
                                    <li key={'message-attachment-'+idx}>
                                        <div className="well well-sm">
                                            { !!attachment ?
                                                <span >
                                                    <img src={attachment.picture}/>
                                                </span> :
                                                <span>
                                                    <i className="fa fa-file"/>
                                                </span>
                                            }
                                            <br />
                                            <strong>{attachment.name}</strong>
                                            <br />
                                            {attachment.size}
                                            <br />
                                            <a href-void> Download</a> | <a href-void> View</a>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div> : null }

                <div className="email-infobox">

                    <div className="well well-sm well-light">
                        <h5>Related Invoice</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="fa fa-file fa-fw text-success"/><a href-void> #4831 - Paid</a>
                            </li>
                            <li>
                                <i className="fa fa-file fa-fw text-danger"/><a href-void><strong> #4835 -
                                Unpaid</strong></a>
                            </li>
                        </ul>
                    </div>

                    <div className="well well-sm well-light">
                        <h5>Upcoming Meetings</h5>
                        <p>
                            <span className="label label-success"><i className="fa fa-check"/> <strike>Agenda Review @
                                10 AM</strike> </span>
                        </p>

                        <p>
                            <span className="label label-primary"><i className="fa fa-clock-o"/> Client Meeting @ 2:30 PM</span>
                        </p>

                        <p>
                            <span className="label label-warning"><i className="fa fa-clock-o"/> Salary Review @ 4:00 PM</span>
                        </p>
                    </div>

                    <ul className="list-inline">
                        <li><img src="styles/img/avatars/5.png" alt="me" width="30px"/></li>
                        <li><img src="styles/img/avatars/3.png" alt="me" width="30px"/></li>
                        <li><img src="styles/img/avatars/sunny.png" alt="me" width="30px"/></li>
                        <li><a href-void>1 more</a></li>
                    </ul>

                </div>

            </div>
        )
    }
});

export default InboxDetail