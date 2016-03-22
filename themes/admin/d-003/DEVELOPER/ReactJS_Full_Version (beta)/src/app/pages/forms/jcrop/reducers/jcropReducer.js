import {combineReducers} from 'redux'
import crop from './cropReducer'
import options from './optionsReducer'


export default combineReducers({
    crop,
    options
})