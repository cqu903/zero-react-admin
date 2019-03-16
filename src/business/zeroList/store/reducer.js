import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    selectedRow: {
        index: 1,
        text: '111'
    }
})

export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state
    }
}