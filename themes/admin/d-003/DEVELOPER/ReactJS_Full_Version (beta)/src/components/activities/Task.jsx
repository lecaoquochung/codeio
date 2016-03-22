import React from 'react'
import classnames from 'classnames'
import Moment from '../utils/Moment.jsx'

let Task = React.createClass({
    render: function () {
        let item = this.props.item;
        return (
            <span>
			<div className="bar-holder no-padding">
                <p className="margin-bottom-5">
                    {
                        item.status == 'PRIMARY' ? <i className="fa fa-warning text-warning"/> : null
                    }
                    <strong>{item.status}:</strong> <i>{item.title}</i>
                    <span className={classnames(['pull-right', 'semi-bold', (
                        item.status == 'CRITICAL' ? 'text-danger' : 'text-muted'
                    )])}>{
                        item.width == 100 ?
                            <span>
                            <i className="fa fa-check text-success"/> Complete
                                </span> : <span>{item.width + '%'}</span>
                    }</span>
                </p>
                <div className={classnames(['progress', item.progressClass])}>
                    <div className={classnames(['progress-bar', {
                        'progress-bar-success': item.status == 'MINOR' || item.status == 'NORMAL',
                        'bg-color-teal': item.status == 'PRIMARY' || item.status == 'URGENT',
                        'progress-bar-danger': item.status == 'CRITICAL'
                    }])} style={{width: item.width + '%'}}></div>
                </div>
                <em className="note no-margin">last updated on <Moment data={this.props.lastUpdate}
                                                                       format="MMMM Do, h:mm a"/></em>
            </div>
		</span>
        )
    }
});

export default Task