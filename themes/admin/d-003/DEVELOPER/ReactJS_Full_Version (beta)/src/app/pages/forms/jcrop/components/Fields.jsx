import React from 'react'

import FieldInput from './FieldInput.jsx'

const Fields = ()=>(
    <div className="row margin-top-10 coords">
        <div className="inline-labels">
        {
            ['x', 'y', 'w', 'h'].map((field)=>(
                <FieldInput key={field} field={field}/>
            ))
        }
        </div>
    </div>
);

export default Fields