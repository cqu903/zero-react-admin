import * as actionTypes from './actionTypes'
import http from 'utils/http'

export const addOrRemoveSelectRows = record => ({
  type: actionTypes.ADD_OR_REMOVE_SELECTED_ROWS,
  record
})
export const initMultiSelect = multiSelect => ({
  type: actionTypes.INIT_MULTI_SELECT,
  multiSelect
})
export const initDataList = dataUrl => {
  return dispatch => {
    http
      .get(dataUrl)
      .then(data => {
        dispatch(initList(data.rows))
      })
      .catch(err => {
        console.info(err)
      })
  }
}
const initList = list => ({
  type: actionTypes.INIT_LIST,
  list
})
