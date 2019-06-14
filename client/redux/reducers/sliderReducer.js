import { actionNames } from '../actions/sliderActions'

let initialState = {
    isPlaying: false,
    introMusicPlaying: false
}

let sliderReducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.START_INTRO:
            return Object.assign({}, state, {isPlaying:true})
        case actionNames.INTRO_MUSIC_STARTED:
            return Object.assign({}, state, {introMusicPlaying: true})
        default: 
            return state
    }
}

export default sliderReducer

