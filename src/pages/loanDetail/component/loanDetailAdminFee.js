import React, { Component, Fragment } from 'react'
import { Modal, Button, Row, Col } from 'antd'
import ZeroList from 'business/zeroList'
import { SplitLineCol } from '../style'
import AdminFeeRepayment from './adminFeeRepayment'

class LoanDetailAdminFee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, visible: false })
      // refresh route
      // this.props.history.push(this.props.location.pathname + '?date=' + new Date().getTime())
      window.location.reload()
    }, 100)
  }

  refreshContent = () => {
    this.setState({ loading: true })
    this.child.refreshComponent()
    this.setState({ loading: false })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }
  render() {
    const { visible, loading } = this.state
    return (
      <Fragment>
        <Row type="flex" justify="start" align="middle">
          <SplitLineCol span={24}>Admin Fee</SplitLineCol>
        </Row>
        <Row>
          <Col>
            <Button
              htmlType="submit"
              loading={loading}
              onClick={this.refreshContent}
            >
              刷新
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: 8 }}
              htmlType="submit"
              onClick={this.showModal}
            >
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
                <Button key="back" onClick={this.handleCancel}>
                  取消
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={this.handleOk}
                >
                  提交
                </Button>
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
              handleRowDoubleClick={(event, record) => {}}
            />
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default LoanDetailAdminFee
