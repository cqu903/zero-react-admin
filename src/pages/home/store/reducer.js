import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    menuData: [],
    activeTab: '欢迎页'
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INIT_MENU_DATA:
            return state.set('menuData', fromJS(action.data))
        case actionTypes.ADD_TAB:
            let hasSameKey = false
            state.get('tabs').map((item) => {
                if (item.get('key') === action.data.key) {
                    hasSameKey = true
                }
                return true
            })
            if (hasSameKey) {
                return state.set('activeTab', action.data.key)
            } else {
                return state.set('tabs', state.get('tabs').concat(fromJS([action.data]))).set('activeTab', action.data.key)
            }
        case actionTypes.SELECT_TAB:
            return state.set('activeTab', action.tabKey)
        default:
            return state
    }
}