import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import MyTab from '../../business/myTab'
import { Tabs } from 'antd'
import LoanList from '../../pages/loanList'

const TabPane = Tabs.TabPane

class LoanDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MyTab defaultTab="2">
        <TabPane forceRender tab="贷款账户详情" key="1" closable={false}>
          <LoanList />
        </TabPane>
        <TabPane forceRender tab="客户信息匹配" key="2">
          客户信息匹配
        </TabPane>
        <TabPane forceRender tab="贷款记事本" key="3">
          贷款记事本
        </TabPane>
      </MyTab>
    )
  }
}
const mapState = state => ({})
const mapProps = dispatch => {
  return {}
}
export default connect(
  mapState,
  mapProps
)(withRouter(LoanDetail))
