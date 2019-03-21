import React from 'react'
import Welcome from './welcome'
import LoanList from './loanList'
import LoanDetail from './loanDetail'
const routes = [
  {
    path: '/',
    component: () => <Welcome />,
    name: '主页'
  },
  {
    path: '/loanList',
    component: () => <LoanList />,
    name: '申请列表'
  },
  {
    path: '/loanDetail/:id',
    component: () => <LoanDetail />,
    name: '贷款详情'
  },
  {
    path: '/loanDetail/:id/:name/tt',
    component: () => <LoanDetail />,
    name: '贷款详情'
  }
]
export default routes
