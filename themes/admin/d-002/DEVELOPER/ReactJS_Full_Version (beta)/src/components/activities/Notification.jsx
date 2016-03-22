import React from 'react'
import classnames from 'classnames'

let Notification = React.createClass({
    render: function () {
        let item = this.props.item;
        return (
            <span className="padding-10">
                <em className="badge padding-5 no-border-radius bg-color-blueLight pull-left margin-right-5">
                    <i className={classnames(['fa fa-fw fa-2x', item.icon])}/>
                </em>
			    <span>{item.message}<br />
                    <span className="pull-right font-xs text-muted"><i>{item.time}</i></span>
			    </span>
		    </span>
        )
    }
});

export default Notification