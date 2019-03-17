import * as actionTypes from './actionTypes'

export const addOrRemoveSelectRows = (record) => ({
    type: actionTypes.ADD_OR_REMOVE_SELECTED_ROWS,
    record
})
export const initMultiSelect = (multiSelect) => ({
    type: actionTypes.INIT_MULTI_SELECT,
    multiSelect
})
