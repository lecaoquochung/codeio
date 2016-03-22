import {CROP_MOVE, CROP_FIELD_CHANGE, CROP_RANDOM_SELECTION, JCROP_INIT} from '../constatnts/actionTypes'

export const cropMove = (crop) => ({
    type: CROP_MOVE,
    crop
});

export const cropFieldChange = (field, value) => ({
    type: CROP_FIELD_CHANGE,
    field,
    value
});

const randomRect = ()=>({
    x: Math.random() * 250,
    y: Math.random() * 180,
    w: (Math.random() * 440) + 50,
    h: (Math.random() * 300) + 60
});

export const cropRandomSelection = () => ({
    type: CROP_RANDOM_SELECTION,
    crop: randomRect()
})


export const jcropInit = (options = {}, crop ={})=> {
    if (options.initRandomCrop) {
        crop.selection = randomRect();
    }

    return {
        type: JCROP_INIT,
        options: options,
        crop: crop.selection
    }
}
