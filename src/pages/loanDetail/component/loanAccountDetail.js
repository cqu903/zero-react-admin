import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Tabs, Row, Col } from 'antd'
import MyTab from '../../../business/myTab'
import TransactionRecordList from './transactionRecordList'
import LoanDetailSummary from './loanDetailSummary'
import LoanDetailInfo from './loanDetailInfo'
import LoanDetailAdminFee from './loanDetailAdminFee'
import { SplitLineCol, MiddleDiv } from '../style'

const TabPane = Tabs.TabPane

class LoanDetail extends Component {
  render() {
    return (
      <Fragment>
        <LoanDetailSummary />
        <MiddleDiv>
          <LoanDetailInfo />
          <LoanDetailAdminFee />
          <Row type="flex" justify="start" align="middle">
            <SplitLineCol span={24}>交易記錄</SplitLineCol>
          </Row>
          <Row>
            <Col>
              <MyTab defaultTab="1">
                <TabPane forceRender tab="交易記錄" key="1">
                  <TransactionRecordList />
                </TabPane>
                <TabPane forceRender tab="豁免利息" key="2">
                  2
                </TabPane>
                <TabPane forceRender tab="預期利息記錄" key="3">
                  3
                </TabPane>
                <TabPane forceRender tab="已出帳單" key="4">
                  4
                </TabPane>
                <TabPane forceRender tab="逾期天數計算表" key="5">
                  5
                </TabPane>
                <TabPane forceRender tab="優惠卷清單" key="6">
                  6
                </TabPane>
              </MyTab>
            </Col>
          </Row>
        </MiddleDiv>
      </Fragment>
    )
  }
}

export default withRouter(LoanDetail)
