import React from 'react'
import {connect} from 'react-redux'
import {cropFieldChange} from '../actions/crop'

import Field from './Field.jsx'

const mapStateToProps = (state, ownProps)=> {
    return {
        field: ownProps.field,
        value: state.crop[ownProps.field]
    }
};

const mapDispatchToProps = (dispatch, ownProps) =>({
    onFieldChange: value => {
        dispatch(cropFieldChange(ownProps.field, value))
    }

});

const FieldInput = connect(mapStateToProps, mapDispatchToProps)(Field)

export default FieldInput