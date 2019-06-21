import { actionNames } from '../actions/mainActions'

let initialState = {
    musicStarted: false
}

let mainReducer = (state = initialState, action) => {
    switch(action.type){
        case actionNames.MAIN_MUSIC_STARTED:
            return Object.assign({}, state, {musicStarted: true})
        default:
            return state
    }
}

export default mainReducer