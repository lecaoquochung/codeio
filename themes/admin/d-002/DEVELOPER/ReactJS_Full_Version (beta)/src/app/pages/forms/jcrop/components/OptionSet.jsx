import React from 'react'
import {connect} from 'react-redux'

import {setOptions} from '../actions/options'
import OptionSetBtn from './OptionSetBtn.jsx'

const mapStateToProps= (state, props)=>({
    //disabled: state.options[props.option] === props.value,
    label: props.label,
    options: props.options
});

const mapDispatchToProps= (dispatch, props) =>({
    onSet: ()=> {
        dispatch(setOptions(props.options))
    }
});

const OptionSet = connect(mapStateToProps, mapDispatchToProps)(OptionSetBtn);

export default OptionSet