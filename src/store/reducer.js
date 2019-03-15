import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../pages/home/store'

export default combineReducers({
    home: homeReducer,
})