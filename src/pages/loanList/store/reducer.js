import * as actionTypes from './actionTypes'

const defaultState = {
    loanList: []
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionTypes.INIT_LOAN_LIST:
            newState.loanList = action.loanList
            return newState
        default:
            return newState
    }
}