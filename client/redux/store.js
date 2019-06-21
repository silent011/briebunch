import { createStore, combineReducers } from 'redux'
import sliderReducer from './reducers/sliderReducer'
import mainReducer from './reducers/mainReducer'

const reducers = combineReducers({
    slider: sliderReducer,
    mainScreen: mainReducer
})

const store = createStore(reducers)

export default store