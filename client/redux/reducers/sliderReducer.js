import { actionNames } from '../actions/sliderActions'

let initialState = {
    isPlaying: false,
    introMusicPlaying: false,
    introEnded: false
}

let sliderReducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.START_INTRO:
            return Object.assign({}, state, {isPlaying:true})
        case actionNames.INTRO_MUSIC_STARTED:
            return Object.assign({}, state, {introMusicPlaying: true})
        case actionNames.INTRO_ENDED:
            return Object.assign({}, state, {introEnded: true, isPlaying:false})
        default: 
            return state
    }
}

export default sliderReducer

