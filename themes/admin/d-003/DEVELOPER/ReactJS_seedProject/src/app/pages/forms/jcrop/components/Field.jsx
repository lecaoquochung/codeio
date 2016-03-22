import React from 'react'

const Field = (props)=> {
    let input;
    return   <label htmlFor={'jcrop-' + props.field} className="jcrop-field-label">
            {props.field + ': '}
            <input type="number" size="4" id={'jcrop-' + props.field }
                   ref={node=>input=node}
                   value={props.value}
                   onChange={()=>{
                    props.onFieldChange(parseInt(input.value))
               }}/>
        </label>

}

export default Field