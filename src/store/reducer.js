import { combineReducers } from 'redux'

import { reducer as homeReducer } from '../pages/home/store'
import { reducer as zeroListReducer } from '../business/zeroList/store'
import { reducer as loanListReducer } from '../pages/loanList/store'

export default combineReducers({
    home: homeReducer,
    zeroList: zeroListReducer,
    loanList: loanListReducer
})