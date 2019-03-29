import React, { Component } from 'react'
import { Row, Col } from 'antd'

import NotFound from '../../statics/images/404.jpg'

class NotFoundPage extends Component {
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={18} offset={6}>
          <img src={NotFound} alt="404" />
        </Col>
      </Row>
    )
  }
}

export default NotFoundPage
