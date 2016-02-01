import React from 'react'
import classnames from 'classnames'

export default (props)=> {
    return <div className="switch">
        <label>
            <input type="checkbox" checked={props.active}
                   onChange={ props.onToggle }/>
                <span className="lever" />
            {props.label}
        </label>
    </div>

}