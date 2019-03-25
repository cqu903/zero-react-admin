import * as actionTypes from './actionTypes'
import http from 'utils/http'

export const addOrRemoveSelectRows = record => ({
  type: actionTypes.ADD_OR_REMOVE_SELECTED_ROWS,
  payload: {
    record
  }
})
export const initMultiSelect = multiSelect => ({
  type: actionTypes.INIT_MULTI_SELECT,
  payload: {
    multiSelect
  }
})
export const initDataList = (dataUrl, uuid) => {
  return dispatch => {
    http
      .get(dataUrl)
      .then(data => {
        dispatch(initList(data.rows ? data.rows : data, uuid))
      })
      .catch(err => {
        console.info(err)
      })
  }
}
const initList = (list, uuid) => ({
  type: actionTypes.INIT_LIST,
  payload: {
    list,
    uuid
  }
})
