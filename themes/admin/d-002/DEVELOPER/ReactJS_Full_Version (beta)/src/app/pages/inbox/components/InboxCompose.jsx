import React from 'react'

import {OverlayTrigger, Tooltip} from 'react-bootstrap'

import Select2 from '../../../../components/forms/inputs/Select2.jsx'
import Summernote from '../../../../components/forms/editors/Summernote.jsx'

let InboxCompose = React.createClass({
    getInitialState: function () {
        return {
            cc: false,
            bcc: false,
            attachments: false,
            sending: false
        }
    },
    _handleSubmit: function (e) {
        e.preventDefault();
        this.setState({
            sending: true
        });
        setTimeout(function () {
            this.props.history.pushState(null, 'inbox')
        }.bind(this), 1000)
    },
    _addCarbonCopy: function (e) {
        e.preventDefault();
        this.setState({cc: true})
    },
    _addBlindCarbonCopy: function (e) {
        e.preventDefault();
        this.setState({bcc: true})
    },
    _addAttachments: function (e) {
        e.preventDefault();
        this.setState({attachments: true})
    },
    render: function () {
        let ccTrigger = !this.state.cc ? <em>
            <OverlayTrigger placement="bottom"
                            overlay={<Tooltip id="cc-tooltip">Carbon Copy</Tooltip>}>
                <a href-void onClick={this._addCarbonCopy}>CC</a>
            </OverlayTrigger>
        </em> : null;

        let bccTrigger = !this.state.bcc ? <em>
            <OverlayTrigger placement="bottom"
                            overlay={<Tooltip id="bcc-tooltip">Blind Carbon Copy</Tooltip>}>
                <a href-void onClick={this._addBlindCarbonCopy}>BCC</a>
            </OverlayTrigger>
        </em> : null;


        return (
            <div className="table-wrap custom-scroll">
                <h2 className="email-open-header">
                    Compose New Email <span className="label txt-color-white">draft</span>
                    <OverlayTrigger placement="left" overlay={<Tooltip id="print-message-tooltip">Print</Tooltip>}>
                        <a href-void className="txt-color-darken pull-right"><i className="fa fa-print"/></a>
                    </OverlayTrigger>

                </h2>

                <form onSubmit={this._handleSubmit} encType="multipart/form-data" className="form-horizontal">

                    <div className="inbox-info-bar no-padding">
                        <div className="row">
                            <div className="form-group">
                                <label className="control-label col-md-1"><strong>To</strong></label>

                                <div className="col-md-11">
                                    <Select2 multiple={true} style={{width: '100%'}} data-select-search="true"
                                             defaultValue={["IT@smartadmin.com"]}>
                                        <option value="sunny.orlaf@smartadmin.com">sunny.orlaf@smartadmin.com</option>
                                        <option value="rachael.hawi@smartadmin.com">rachael.hawi@smartadmin.com</option>
                                        <option value="michael.safiel@smartadmin.com">michael.safiel@smartadmin.com</option>
                                        <option value="alex.jones@infowars.com">alex.jones@infowars.com</option>
                                        <option value="oruf.matalla@gmail.com">oruf.matalla@gmail.com</option>
                                        <option value="hr@smartadmin.com">hr@smartadmin.com</option>
                                        <option value="IT@smartadmin.com">IT@smartadmin.com</option>
                                    </Select2>
                                    { ccTrigger }
                                </div>
                            </div>
                        </div>
                    </div>
                    { this.state.cc ?
                        <div className="inbox-info-bar no-padding">
                            <div className="row">
                                <div className="form-group">
                                    <label className="control-label col-md-1"><strong>CC</strong></label>

                                    <div className="col-md-11">
                                        <Select2 multiple={true} style={{width: '100%'}} data-select-search="true">
                                            <option value="sunny.orlaf@smartadmin.com">sunny.orlaf@smartadmin.com
                                            </option>
                                            <option value="rachael.hawi@smartadmin.com">rachael.hawi@smartadmin.com
                                            </option>
                                            <option value="michael.safiel@smartadmin.com">michael.safiel@smartadmin.com
                                            </option>
                                            <option value="alex.jones@infowars.com">alex.jones@infowars.com</option>
                                            <option value="oruf.matalla@gmail.com">oruf.matalla@gmail.com</option>
                                            <option value="hr@smartadmin.com">hr@smartadmin.com</option>
                                            <option value="IT@smartadmin.com">IT@smartadmin.com</option>
                                        </Select2>
                                        {bccTrigger}
                                    </div>
                                </div>
                            </div>
                        </div> : null }

                    {this.state.bcc ?
                        <div className="inbox-info-bar no-padding">
                            <div className="row">
                                <div className="form-group">
                                    <label className="control-label col-md-1"><strong>BCC</strong></label>

                                    <div className="col-md-11">
                                        <Select2 multiple={true} style={{width:"100%"}} data-select-search="true">
                                            <option value="sunny.orlaf@smartadmin.com">sunny.orlaf@smartadmin.com
                                            </option>
                                            <option value="rachael.hawi@smartadmin.com">rachael.hawi@smartadmin.com
                                            </option>
                                            <option value="michael.safiel@smartadmin.com">michael.safiel@smartadmin.com
                                            </option>
                                            <option value="alex.jones@infowars.com">alex.jones@infowars.com</option>
                                            <option value="oruf.matalla@gmail.com">oruf.matalla@gmail.com</option>
                                            <option value="hr@smartadmin.com">hr@smartadmin.com</option>
                                            <option value="IT@smartadmin.com">IT@smartadmin.com</option>
                                        </Select2>
                                    </div>
                                </div>
                            </div>
                        </div> : null }

                    <div className="inbox-info-bar no-padding">
                        <div className="row">
                            <div className="form-group">
                                <label className="control-label col-md-1"><strong>Subject</strong></label>

                                <div className="col-md-11">
                                    <input className="form-control" placeholder="Email Subject" type="text"/>
                                    <OverlayTrigger placement="bottom"
                                                    overlay={<Tooltip id="Attachments-tooltip">Attachments</Tooltip>}>
                                        <em><a href-void className="show-next" onClick={this._addAttachments}><i
                                            className="fa fa-paperclip fa-lg"/></a></em>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.attachments ?

                        <div className="inbox-info-bar no-padding ">
                            <div className="row">
                                <div className="form-group">
                                    <label className="control-label col-md-1"><strong>Attachments</strong></label>

                                    <div className="col-md-11">
                                        <input className="form-control fileinput" type="file" multiple="multiple"/>
                                    </div>
                                </div>
                            </div>
                        </div> : null }

                    <div className="inbox-message no-padding">

                        <Summernote id="emailbody"><br /><br /><span>Thanks,</span><br/><strong>John Doe</strong><br/><br/></Summernote>
                    </div>

                    <div className="inbox-compose-footer">

                        <button className="btn btn-danger" type="button">
                            Disregard
                        </button>

                        <button className="btn btn-info" type="button">
                            Draft
                        </button>

                        {!this.state.sending ?
                            <button onClick={this._handleSubmit} className="btn btn-primary pull-right"
                                    type="button">
                                Send <i className="fa fa-arrow-circle-right fa-lg"/>
                            </button> :
                            <button className="btn btn-primary pull-right" type="button">
                                <i className="fa fa-refresh fa-spin"/> Sending...
                            </button> }


                    </div>

                </form>


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

export default InboxCompose