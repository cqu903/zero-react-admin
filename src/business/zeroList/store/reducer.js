import * as actionTypes from './actionTypes'

const defaultState = {
  multiSelect: false,
  selectedRows: [],
  dataList: {}
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case actionTypes.INIT_LIST:
      const { list, uuid } = action.payload
      newState.dataList[uuid] = list
      return newState
    case actionTypes.INIT_MULTI_SELECT:
      const { multiSelect } = action.payload
      newState.multiSelect = multiSelect
      return newState
    case actionTypes.ADD_OR_REMOVE_SELECTED_ROWS:
      let findIndex = -1
      const { record } = action.payload
      state.selectedRows.forEach((item, index) => {
        if (item.id === record.id) {
          findIndex = index
          return false
        }
      })
      if (findIndex < 0) {
        if (state.multiSelect) {
          newState.selectedRows.push(record)
        } else {
          newState.selectedRows = [record]
        }
      } else {
        newState.selectedRows.splice(findIndex, 1)
      }
      return newState
    default:
      return state
  }
}
