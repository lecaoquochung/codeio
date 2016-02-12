/**
 * Created by griga on 11/24/15.
 */


import React from 'react'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'

import ResetWidgets from '../../../components/layout/actions/ResetWidgets.jsx'
import SmallBreadcrumbs from '../../../components/layout/navigation/components/SmallBreadcrumbs.jsx'


let tooltip = (
    <Tooltip id="reset-widgets-suggestion"><i className='text-warning fa fa-warning' /> Warning! This will reset all your widget settings.</Tooltip>
);

let Ribbon = React.createClass({
    render: function(){
        return (
            <div id="ribbon">
                <span className="ribbon-button-alignment">
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <ResetWidgets />
                    </OverlayTrigger>
                </span>
                <SmallBreadcrumbs />
            </div>
        )
    }
});

export default Ribbon