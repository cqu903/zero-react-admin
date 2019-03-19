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
      .get('/mock/33/api/getMenu')
      .then(data => {
        dispatch(initMenuData(data))
      })
      .catch(err => {
        console.info(err)
      })
    /* axios
      .get('/api/menu.json')
      .then(res => {
        dispatch(initMenuData(res.data))
      })
      .catch(err => {
        console.info(err)
      }) */
  }
}
