import React from 'react'
import {connect} from 'react-redux'

import {toggleOption} from '../actions/options'
import OptionToggleBtn from './OptionToggleBtn.jsx'

const mapStateToProps= (state, props)=>({
    active: state.options[props.option],
    label: props.label,
    option: props.option
});

const mapDispatchToProps= (dispatch, props)=>({
    onToggle: ()=> {
        dispatch(toggleOption(props.option))
    }
});

const OptionToggle = connect(mapStateToProps, mapDispatchToProps)(OptionToggleBtn);

export default OptionToggle