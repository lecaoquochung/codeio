import React from 'react'
import classnames from 'classnames'

let nextId = 0;
export default (props)=> {
    return <div>
        <input defaultChecked={props.checked} name={props.group} type="radio" id={'option-radio-btn-' + ++nextId} onChange={props.onSet}/>
        <label htmlFor={'option-radio-btn-' + nextId}>{props.label}</label>
    </div>

}