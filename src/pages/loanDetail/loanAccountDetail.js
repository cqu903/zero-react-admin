import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ZeroList from '../../business/zeroList'
import { Tabs, Modal, Button, Row, Col } from 'antd'
import '../../statics/css/loanList/loanList.css'
import MyTab from '../../business/myTab'
import AdminFeeRepayment from './adminFeeRepayment'
import TransactionRecordList from './transactionRecordList'

const TabPane = Tabs.TabPane

class LoanDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      visible: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 100);
  }

  refreshContent = () => {
    this.setState({ loading: true })
    this.child.refreshComponent()
    this.setState({ loading: false })
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Row className="loanaccountdetail_top" type="flex" justify="start">
          <Col span={3} className="loanaccountdetail_top_span">
            <span>贷款人：</span>
          </Col>
          <Col span={3}>
            <span>DAVE</span>
          </Col>
          <Col span={3} className="loanaccountdetail_top_span">
            <span>證件號碼：</span>
          </Col>
          <Col span={3}>
            <span>Y194132(A)</span>
          </Col>
          <Col span={3} className="loanaccountdetail_top_span">
            <span>帳戶額度：</span>
          </Col>
          <Col span={3}>
            <span>30000.00</span>
          </Col>
          <Col span={3} className="loanaccountdetail_top_span">
            <span>剩餘額度</span>
          </Col>
          <Col span={3}>
            <span>0.00</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row type="flex" justify="start" align="middle">
              <Col span={24} className="title_div">賬戶信息</Col></Row>
            <Row className="loanaccountdetail_top" type="flex" justify="start">
              <Col span={3} className="loanaccountdetail_top_span">
                <span>貸款賬戶編號：</span>
              </Col>
              <Col span={3}>
                <span>AEHK15209373587X</span>
              </Col>
              <Col span={3} className="loanaccountdetail_top_span">
                <span>當前賬單日：</span>
              </Col>
              <Col span={3}>
                <span>22-04-2019</span>
              </Col>
              <Col span={3} className="loanaccountdetail_top_span">
                <span>已收貸款總額：</span>
              </Col>
              <Col span={3}>
                <span>0.00</span>
              </Col>
              <Col span={3} className="loanaccountdetail_top_span">
                <span>累計貸款總額：</span>
              </Col>
              <Col span={3}>
                <span>30000.00</span>
              </Col>
            </Row>
            <Row className="loanaccountdetail_top" type="flex" justify="start">
              <Col span={3} className="loanaccountdetail_top_span">
                <span>貸款賬戶編號：</span>
              </Col>
              <Col span={3}>
                <span>AEHK15209373587X</span>
              </Col>
              <Col span={3} className="loanaccountdetail_top_span">
                <span>當前賬單日：</span>
              </Col>
              <Col span={3}>
                <span>22-04-2019</span>
              </Col>
              <Col span={3} className="loanaccountdetail_top_span">
                <span>已收貸款總額：</span>
              </Col>
              <Col span={3}>
                <span>0.00</span>
              </Col>
              <Col span={3} className="loanaccountdetail_top_span">
                <span>累計貸款總額：</span>
              </Col>
              <Col span={3}>
                <span>30000.00</span>
              </Col>
            </Row>
            <Row className="loanaccountdetail_top" type="flex" justify="start">
              <Col span={3} className="loanaccountdetail_top_span">
                <span>貸款賬戶編號：</span>
              </Col>
              <Col span={3}>
                <span>AEHK15209373587X</span>
              </Col>
              <Col span={3} className="loanaccountdetail_top_span">
                <span>當前賬單日：</span>
              </Col>
              <Col span={3}>
                <span>22-04-2019</span>
              </Col>
              <Col span={3} className="loanaccountdetail_top_span">
                <span>已收貸款總額：</span>
              </Col>
              <Col span={3}>
                <span>0.00</span>
              </Col>
              <Col span={3} className="loanaccountdetail_top_span">
                <span>累計貸款總額：</span>
              </Col>
              <Col span={3}>
                <span>30000.00</span>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row type="flex" justify="start" align="middle">
          <Col span={24} className="title_div">Admin Fee</Col>
        </Row>
        <Row>
          <Col>
            <Button htmlType="submit" loading={loading} onClick={this.refreshContent}>
              刷新
                  </Button>
            <Button type="primary" style={{ marginLeft: 8 }} htmlType="submit" onClick={this.showModal}>
              還款
                  </Button>
            <Button style={{ marginLeft: 8 }} htmlType="submit">
              退回
                  </Button>
            <Modal
              visible={visible}
              title="新增AdmiFee"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>取消</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  提交
            </Button>,
              ]}
            >
              <AdminFeeRepayment />
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col>
            <ZeroList
              onRef={ref => (this.child = ref)}
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
        <Row type="flex" justify="start" align="middle">
          <Col span={24} className="title_div">交易記錄</Col>
        </Row>
        <Row>
          <Col>
            <MyTab defaultTab="1">
              <TabPane forceRender tab="交易記錄" key="1">
                <TransactionRecordList index="1" />
              </TabPane>
              <TabPane forceRender tab="豁免利息" key="2">
                <TransactionRecordList index="2" />
              </TabPane>
              <TabPane forceRender tab="預期利息記錄" key="3">
                <TransactionRecordList index="3" />
              </TabPane>
              <TabPane forceRender tab="已出帳單" key="4">
                <TransactionRecordList index="4" />
              </TabPane>
              <TabPane forceRender tab="逾期天數計算表" key="5">
                <TransactionRecordList index="5" />
              </TabPane>
              <TabPane forceRender tab="優惠卷清單" key="6">
                <TransactionRecordList index="6" />
              </TabPane>
            </MyTab>
          </Col>
        </Row>
      </div>
    )
  }
}

export default LoanDetail
