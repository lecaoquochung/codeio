import React from 'react'

import classnames from 'classnames'

import SmartMenuItem from './SmartMenuItem.jsx'


let SmartMenuList = React.createClass({
    render: function () {
        let {items, ...props} = this.props;
        return (
            <ul {...props}>
                {items.map(function (item) {
                    return <SmartMenuItem item={item} key={item._id}/>
                    }.bind(this))}
            </ul>
        )
    }
});

export default SmartMenuList