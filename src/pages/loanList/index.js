import React, { Component, Fragment } from 'react'
import ZeroList from '../../common/business/zeroList'
import { withRouter } from 'react-router-dom'
import { Form, Button, Input, Row, Col, Pagination } from 'antd'
import { SearchWrapper } from './style'

class LoanList extends Component {
  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize)
  }
  render() {
    return (
      <Fragment>
        <Form layout="inline">
          <SearchWrapper>
            <Row type="flex" justify="center">
              <Col span={20}>
                <Form.Item label="贷款账户编号：">
                  <Input size="large" allowClear />
                </Form.Item>
                <Form.Item label="身份证号：">
                  <Input size="large" allowClear />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    查询
                  </Button>
                  <Button style={{ marginLeft: 8 }} htmlType="submit">
                    清空
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </SearchWrapper>
        </Form>
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
              title: '賬戶狀態',
              dataIndex: 'accountStatus'
            }
          ]}
          dataUrl="/api/loanAccount/queryLoanAccountList"
          handleRowDoubleClick={(event, record) => {
            console.info('record--------->' + record.id)
            this.props.history.push('/loanDetail/' + record.id)
          }}
        />
        <Row type="flex" justify="end">
          <Col span={16} offset={8}>
            <Pagination
              style={{ marginTop: 5 }}
              showSizeChanger
              onShowSizeChange={this.onShowSizeChange}
              defaultCurrent={1}
              total={100}
            />
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default withRouter(LoanList)
