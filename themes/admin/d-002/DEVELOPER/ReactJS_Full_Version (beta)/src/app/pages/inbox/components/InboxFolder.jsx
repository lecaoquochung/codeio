import React from 'react'
import Reflux from 'reflux'
import _ from 'lodash'
import {Link} from 'react-router'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import classnames from 'classnames'

import Moment from '../../../../components/utils/Moment.jsx'

import InboxActions from './../actions/InboxActions'
import InboxStore from './../stores/InboxStore'

let InboxFolder = React.createClass({
    mixins: [Reflux.connect(InboxStore)],
    getInitialState: function(){
        return InboxStore.getData()
    },
    _getTeaser: function (message) {
        let clearBody = message.body.replace(/<[^<>]+?>/gm, ' ').replace(/(\s{2}|\n)/gm, ' ');

        let teaserMaxLength = 55 - message.subject.length;

        return clearBody.length > teaserMaxLength ? clearBody.substring(0, teaserMaxLength) + '...' : clearBody;
    },
    _getAttachmentsTooltip: function (message) {
        if (message.attachments && message.attachments.length) {
            let tooltipId = 'message-' + message._id + "-attachments-tooltip";
            let tooltipLabel = 'FILES: ' + _.pluck(message.attachments, 'name').join(', ');
            return (
                <OverlayTrigger placement="left" overlay={<Tooltip id={tooltipId}>{tooltipLabel}</Tooltip>}>
                    <span className="txt-color-darken"><i className="fa fa-paperclip fa-lg"/></span>
                </OverlayTrigger>
            );
        } else {
            return ''
        }
    },
    _getMessageLabels: function (message) {
        let labels = {
            "home": {
                "name": "HOME",
                "color": "teal"
            },
            "work": {
                "name": "WORK",
                "color": "orange"
            }
        };

        return _.map(message.labels, function (label, idx) {
            return <span key={message._id + idx} className={'label bg-color-' + labels[label].color }>{labels[label].name}</span>;
        })
    },
    render: function () {
        return (
            <div className="table-wrap custom-scroll">
                <table id="inbox-table" className="table table-striped table-hover">
                    <tbody>
                    {this.state.messages.map(function (message) {
                            let classNames = classnames({
                                unread: !message.read
                            });
                            return ( message.folder == this.props.params.folder ?
                                <tr key={message._id} id="msg1" className={classNames}>
                                    <td className="inbox-table-icon">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"
                                                       className="checkbox style-2"/>
                                                <span/>
                                            </label>
                                        </div>
                                    </td>
                                    <td className="inbox-data-from hidden-xs hidden-sm">
                                        <Link to={'inbox/detail/' + message._id}>
                                            <div>
                                                {message.contact.name}
                                            </div>
                                        </Link>
                                    </td>
                                    <td className="inbox-data-message">
                                        <Link to={'inbox/detail/' + message._id}>
                                            <div>
                                                <span>
                                                    {this._getMessageLabels(message)}
                                                    {message.subject}
                                                </span>
                                                { this._getTeaser(message) }
                                            </div>
                                        </Link>
                                    </td>
                                    <td className="inbox-data-attachment hidden-xs">
                                        <Link to={'inbox/' + this.props.params.folder + '/' + message._id}>
                                            { this._getAttachmentsTooltip(message) }
                                        </Link>
                                    </td>
                                    <td className="inbox-data-date hidden-xs">
                                        <Moment date={message.date} format="h:mm a"/>
                                    </td>
                                </tr>

                                : null)
                        }.bind(this)
                    )}

                    </tbody>
                </table>

            </div>
        )
    }
});

export default InboxFolder