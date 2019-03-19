import { combineReducers } from 'redux'

import { reducer as homeReducer } from '../pages/home/store'
import { reducer as zeroListReducer } from '../business/zeroList/store'

export default combineReducers({
    home: homeReducer,
    zeroList: zeroListReducer,
})