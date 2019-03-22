import React from 'react'
import LoanList from './loanList'
import LoanDetail from './loanDetail'
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

/**
 * 没有在菜单中的路由
 */
export const extra = [
  {
    path: '/loanDetail/:id',
    component: () => <LoanDetail />,
    name: '贷款账户详情'
  }
]
