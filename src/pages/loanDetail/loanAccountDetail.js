import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Button, Input, Row, Col } from 'antd'

class LoanDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Row>
          <Col>top</Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Row>
                <Col>
                  <fieldset>
                    <legend>賬戶信息</legend>
                  </fieldset>
                </Col>
              </Row>
              <Row>
                <Col>
                  <fieldset>
                    <legend>逾期資料信息</legend>
                  </fieldset>
                </Col>
              </Row>
              <Row>
                <Col>
                  <fieldset>
                    <legend>交易记录</legend>
                  </fieldset>
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
