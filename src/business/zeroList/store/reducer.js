import * as actionTypes from './actionTypes'

const defaultState = {
    multiSelect: false,
    selectedRows: [],
    dataList: []
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.INIT_LIST:
            newState.dataList = action.list
            return newState
        case actionTypes.INIT_MULTI_SELECT:
            newState.multiSelect = action.multiSelect
            return newState
        case actionTypes.ADD_OR_REMOVE_SELECTED_ROWS:
            let findIndex = -1
            state.selectedRows.forEach((item, index) => {
                if (item.id === action.record.id) {
                    findIndex = index
                    return false;
                }
            })
            if (findIndex < 0) {
                if (state.multiSelect) {
                    newState.selectedRows.push(action.record)
                } else {
                    newState.selectedRows = [action.record]
                }
            } else {
                newState.selectedRows.splice(findIndex, 1)
            }
            return newState
        default:
            return state
    }
}