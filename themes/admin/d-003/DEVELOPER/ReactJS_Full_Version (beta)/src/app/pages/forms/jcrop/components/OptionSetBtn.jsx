import React from 'react'
import classnames from 'classnames'

export default (props)=> {
    return <button disabled={props.disabled}
                   className={classnames('btn  blue-grey darken-2')} onClick={props.onSet} >
        {props.label}
    </button>
}