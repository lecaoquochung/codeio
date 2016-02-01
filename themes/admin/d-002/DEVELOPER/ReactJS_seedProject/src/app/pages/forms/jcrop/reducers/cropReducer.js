import {CROP_MOVE, CROP_FIELD_CHANGE, CROP_RANDOM_SELECTION,JCROP_INIT} from '../constatnts/actionTypes'


export default (state = {}, action) => {
    switch (action.type) {
        case CROP_MOVE:
        case CROP_RANDOM_SELECTION:
            return action.crop;

        case CROP_FIELD_CHANGE:
            const update = {};
            update[action.field] = action.value;
            return {
                ...state,
                ...update
            };

        case JCROP_INIT:
            return action.crop ?
            {
                ...action.crop
            } : state;

        default:
            return state;
    }
}