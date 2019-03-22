import React from 'react'
import LoanList from './loanList'
// import LoanDetail from './loanDetail'
import Welcome from './welcome'

/**
 * 定义菜单对应的componet组件
 */
export const mapping = [
  {
    path: '/',
    component: () => <Welcome />
  },
  {
    path: '/loanAccount/toQueryLoanAccountList',
    component: () => <LoanList />
  }
]
