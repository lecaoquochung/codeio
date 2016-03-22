import React from 'react'
import {connect} from 'react-redux'

import {setOptions} from '../actions/options'
import OptionRadioBtn from './OptionRadioBtn.jsx'

const mapStateToProps= (state, props)=>({
    label: props.label,
    options: props.options,
    group: props.group,
    checked: props.checked
});

const mapDispatchToProps= (dispatch, props) =>({
    onSet: ()=> {
        dispatch(setOptions(props.options))
    }
});

const OptionRadio = connect(mapStateToProps, mapDispatchToProps)(OptionRadioBtn);

export default OptionRadio