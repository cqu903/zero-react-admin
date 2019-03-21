import * as actionTypes from './actionTypes'
// import axios from 'axios'
import http from 'utils/http'

const initMenuData = data => ({
  type: actionTypes.INIT_MENU_DATA,
  data
})

export const loadMenuData = () => {
  return dispatch => {
    http
      .get('/api/menu/getTestMenuJson')
      .then(data => {
        dispatch(initMenuData(data))
      })
      .catch(err => {
        console.info(err)
      })
  }
}

// declared: sider toggle action function
export const siderToggle = {
  type: actionTypes.SIDER_TOGGLE,
  payload: {}
}
