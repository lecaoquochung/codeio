import React from 'react'
import _ from 'lodash'

let OnOffSwitch = React.createClass({
    render: function () {
        let props = this.props;
        let id = props.id || _.uniqueId('on-off-switch');
        let title = props.title ? <span className="onoffswitch-title">{props.title}</span> : null;
        let onText = props.onText || 'ON';
        let offText = props.offText || 'OFF';
        return (
            <div className="onoffswitch-container">
                {title}
                <span className="onoffswitch">
                    <input type="checkbox" className="onoffswitch-checkbox" id={id} {...props}/>
                    <label className="onoffswitch-label" htmlFor={id} >
                        <span className="onoffswitch-inner" data-swchon-text={onText}
                              data-swchoff-text={offText}/>
                        <span className="onoffswitch-switch"/>
                    </label>
                </span>
            </div>
        )
    }
});

export default OnOffSwitch