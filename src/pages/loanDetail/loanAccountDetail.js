import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ZeroList from '../../business/zeroList'
import { Tabs, Button, Row, Col } from 'antd'
import '../../statics/css/loanList/loanList.css'
import MyTab from '../../business/myTab'

const TabPane = Tabs.TabPane

class LoanDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4} className="top_span">
            <span>贷款人：</span>
            <span>LEUNG NOK MAN</span>
          </Col>
          <Col span={4}>
            <span>證件號碼：</span>
            <span>Y194132(A)</span>
          </Col>
          <Col span={4}>
            <span>帳戶額度：</span>
            <span>30000.00</span>
          </Col>
          <Col span={4}>
            <span>剩餘額度</span>
            <span>0.00</span>
          </Col>
          <Col span={4}>
            <span>可提現金額：</span>
            <span>0.00</span>
          </Col>
          <Col span={4}>
            <span>貸款產品：</span>
            <span>香港現金貸</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="middle_div">
              <Row>
                <Col>
                  <Row type="flex" justify="start" align="middle">
                    <Col span={24} className="title_div">賬戶信息</Col></Row>
                  <Row>
                    <Col span={6}>
                      <span>貸款賬戶編號：</span>
                      <span>AEHK15209373587X</span>
                    </Col>
                    <Col span={6}>
                      <span>當前賬單日：</span>
                      <span>22-04-2019</span>
                    </Col>
                    <Col span={6}>
                      <span>已收貸款總額：</span>
                      <span>0.00</span>
                    </Col>
                    <Col span={6}>
                      <span>累計貸款總額：</span>
                      <span>30000.00</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>
                      <span>貸款賬戶編號：</span>
                      <span>AEHK15209373587X</span>
                    </Col>
                    <Col span={6}>
                      <span>當前賬單日：</span>
                      <span>22-04-2019</span>
                    </Col>
                    <Col span={6}>
                      <span>已收貸款總額：</span>
                      <span>0.00</span>
                    </Col>
                    <Col span={6}>
                      <span>累計貸款總額：</span>
                      <span>30000.00</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>
                      <span>貸款賬戶編號：</span>
                      <span>AEHK15209373587X</span>
                    </Col>
                    <Col span={6}>
                      <span>當前賬單日：</span>
                      <span>22-04-2019</span>
                    </Col>
                    <Col span={6}>
                      <span>已收貸款總額：</span>
                      <span>0.00</span>
                    </Col>
                    <Col span={6}>
                      <span>累計貸款總額：</span>
                      <span>30000.00</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row type="flex" justify="start" align="middle">
                    <Col span={24} className="title_div">Admin Fee
                    </Col></Row>
                  <div>
                    <Button htmlType="submit">
                      刷新
                  </Button>
                    <Button type="primary" style={{ marginLeft: 8 }} htmlType="submit">
                      還款
                  </Button>
                    <Button style={{ marginLeft: 8 }} htmlType="submit">
                      退回
                  </Button>
                  </div>
                  <ZeroList
                    multiSelect
                    // pagination
                    columns={[
                      {
                        title: '貸款生效日期',
                        dataIndex: 'startDate'
                      },
                      {
                        title: '貸款賬戶編號',
                        dataIndex: 'serialNumber'
                      },
                      {
                        title: '證件號碼',
                        dataIndex: 'idcard'
                      },
                      {
                        title: '客戶姓名',
                        dataIndex: 'name'
                      },
                      {
                        title: '賬戶額度',
                        dataIndex: 'limitedAmount'
                      },
                      {
                        title: '剩餘額度',
                        dataIndex: 'usableLimitAmount'
                      },
                      {
                        title: '上次還款日期',
                        dataIndex: 'lastPaymentDate'
                      },
                      {
                        title: '賬戶狀態',
                        dataIndex: 'accountStatus'
                      }
                    ]}
                    dataUrl="/api/loanAccount/getAdminFree"
                    handleRowDoubleClick={(event, record) => {
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <MyTab defaultTab="1">
                    <TabPane forceRender tab="交易記錄" key="1">
                      交易記錄
                    </TabPane>
                    <TabPane forceRender tab="豁免利息" key="2">
                      豁免利息
                    </TabPane>
                    <TabPane forceRender tab="預期利息記錄" key="3">
                      預期利息記錄
                    </TabPane>
                    <TabPane forceRender tab="已出帳單" key="4">
                      已出帳單
                    </TabPane>
                    <TabPane forceRender tab="逾期天數計算表" key="5">
                      逾期天數計算表
                    </TabPane>
                    <TabPane forceRender tab="優惠卷清單" key="6">
                      優惠卷清單
                    </TabPane>
                  </MyTab>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default LoanDetail
