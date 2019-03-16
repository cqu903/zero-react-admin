import React from 'react'
import Welcome from './welcome'
import LoanList from './loanList'
import LoanDetail from './loanDetail'
const routes = [
    {
        path: '/',
        component: () => <Welcome />
    },
    {
        path: '/loanList',
        component: () => <LoanList></LoanList>
    },
    {
        path: '/loanDetail',
        component: () => <LoanDetail></LoanDetail>
    }
]
export default routes