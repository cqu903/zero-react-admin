import * as actionTypes from './actionTypes'
import axios from 'axios'

export const init = () => {
    return (dispatch) => {
        axios.get('/api/loanList.json').then((res) => {
            dispatch(initLoanList(res.data))
        }).catch((err) => {
            console.info(err)
        })
    }
}
const initLoanList = (loanList) => ({
    type: actionTypes.INIT_LOAN_LIST,
    loanList
})
