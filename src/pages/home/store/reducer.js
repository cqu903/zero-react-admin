import * as actionTypes from './actionTypes'

const defaultState = {
  menuData: [],
  activeTab: '欢迎页'
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case actionTypes.INIT_MENU_DATA:
      newState.menuData = action.data
      return newState
    case actionTypes.SIDER_TOGGLE:
      newState.collapsed = !state.collapsed
      return newState
    default:
      return newState
  }
}
