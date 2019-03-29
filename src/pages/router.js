import React from 'react'
import LoanList from './loanList'
import LoanDetail from './loanDetail'

/**
 * 定义菜单对应的componet组件
 */
export const mapping = [
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

/**
 * 定义菜单的icon
 */
export const icons = [
  {
    // 菜单对应的id
    id: 'finance_config',
    // 菜单对应的icon类型
    type: 'trophy'
  },
  {
    id: 'finance',
    type: 'rocket'
  },
  {
    id: 'financeBalance',
    type: 'user'
  },
  {
    id: 'loan_account_config',
    type: 'bulb'
  },
  {
    id: 'Tu_Account_config',
    type: 'compass'
  },
  {
    id: 'file_record_config',
    type: 'shop'
  },
  {
    id: 'night_business_config',
    type: 'global'
  },
  {
    id: 'test_config',
    type: 'robot'
  }
]
