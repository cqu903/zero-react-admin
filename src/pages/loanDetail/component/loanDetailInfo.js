import React, { Component, Fragment } from 'react'
import { Row, Col } from 'antd'
import { TableRow, TableCol, SplitLineCol } from '../style'

class LoanDetailInfo extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col>
            <Row type="flex" justify="start" align="middle">
              <SplitLineCol span={24}>賬戶信息</SplitLineCol>
            </Row>
            <TableRow type="flex" justify="start">
              <TableCol span={3}>
                <span>貸款賬戶編號：</span>
              </TableCol>
              <Col span={3}>
                <span>AEHK15209373587X</span>
              </Col>
              <TableCol span={3}>
                <span>當前賬單日：</span>
              </TableCol>
              <Col span={3}>
                <span>22-04-2019</span>
              </Col>
              <TableCol span={3}>
                <span>已收貸款總額：</span>
              </TableCol>
              <Col span={3}>
                <span>0.00</span>
              </Col>
              <TableCol span={3}>
                <span>累計貸款總額：</span>
              </TableCol>
              <Col span={3}>
                <span>30000.00</span>
              </Col>
            </TableRow>
            <TableRow type="flex" justify="start">
              <TableCol span={3}>
                <span>貸款賬戶編號：</span>
              </TableCol>
              <Col span={3}>
                <span>AEHK15209373587X</span>
              </Col>
              <TableCol span={3}>
                <span>當前賬單日：</span>
              </TableCol>
              <Col span={3}>
                <span>22-04-2019</span>
              </Col>
              <TableCol span={3}>
                <span>已收貸款總額：</span>
              </TableCol>
              <Col span={3}>
                <span>0.00</span>
              </Col>
              <TableCol span={3}>
                <span>累計貸款總額：</span>
              </TableCol>
              <Col span={3}>
                <span>30000.00</span>
              </Col>
            </TableRow>
            <TableRow type="flex" justify="start">
              <TableCol span={3}>
                <span>貸款賬戶編號：</span>
              </TableCol>
              <Col span={3}>
                <span>AEHK15209373587X</span>
              </Col>
              <TableCol span={3}>
                <span>當前賬單日：</span>
              </TableCol>
              <Col span={3}>
                <span>22-04-2019</span>
              </Col>
              <TableCol span={3}>
                <span>已收貸款總額：</span>
              </TableCol>
              <Col span={3}>
                <span>0.00</span>
              </Col>
              <TableCol span={3}>
                <span>累計貸款總額：</span>
              </TableCol>
              <Col span={3}>
                <span>30000.00</span>
              </Col>
            </TableRow>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default LoanDetailInfo
