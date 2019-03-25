import React, { Component } from 'react'
import { Col } from 'antd'
import { TableRow, TableCol } from '../style'

class LoanDetailSummary extends Component {
  render() {
    return (
      <TableRow type="flex" justify="start">
        <TableCol span={3}>
          <span>贷款人：</span>
        </TableCol>
        <Col span={3}>
          <span>DAVE</span>
        </Col>
        <TableCol span={3}>
          <span>證件號碼：</span>
        </TableCol>
        <Col span={3}>
          <span>Y194132(A)</span>
        </Col>
        <TableCol span={3}>
          <span>帳戶額度：</span>
        </TableCol>
        <Col span={3}>
          <span>30000.00</span>
        </Col>
        <TableCol span={3}>
          <span>剩餘額度</span>
        </TableCol>
        <Col span={3}>
          <span>0.00</span>
        </Col>
      </TableRow>
    )
  }
}

export default LoanDetailSummary
