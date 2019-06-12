import { createStore, combineReducers } from 'redux'
import sliderReducer from './reducers/sliderReducer'

const reducers = combineReducers({
    slider: sliderReducer
})

const store = createStore(reducers)

export default store