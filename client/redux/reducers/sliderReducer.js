import { actionNames } from '../actions/sliderActions'

let initialState = {
    isPlaying: false
}

let sliderReducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.START_INTRO:
            return Object.assign({}, state, {isPlaying:true})
        default: 
            return state
    }
}

export default sliderReducer

