
import {TOGGLE_OPTION, SET_OPTIONS, JCROP_INIT} from '../constatnts/actionTypes'
import _ from 'lodash';

let initialState = {
    bgOpacity: 0.55,
    bgColor: 'black',

    containerClass: 'jcrop-dark',

    outerImage: null,
    aspectRatio: 0,

    animation: false,

    allowSelect: true,
    multi: false,

    canDrag: true,
    canResize: true,

    showThumbnail: false,
    thumbnailSize: 100,

    initRandomCrop: true
};




export default (state, action) => {
    if(!state)
        state = _.clone(initialState);
    switch (action.type){
        case (TOGGLE_OPTION):
            let update = {};
            update[action.option] = !state[action.option];
            return {
                ...state,
                ...update
            };
        case (SET_OPTIONS):
            return {
                ...state,
                ...action.options
            };

        case (JCROP_INIT):
            return {
                ...state,
                ...action.options
            }
        default:
            return state;
    }
}