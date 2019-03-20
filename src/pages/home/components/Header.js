import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Badge, Icon } from 'antd'
import Breadcrumb from './Breadcrumb'
import routes from '../../routes'
import styles from './sider.scss'

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={1}>
            <Icon
              className={styles.trigger}
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => this.props.onClick()}
            />
          </Col>
          <Col span={6}>
            <Breadcrumb routes={routes} />
          </Col>
          <Col span={14} />
          <Col span={3}>
            <Badge count={5} offset={[10, 0]}>
              <Link to="/wait_process_list">
                <span style={{ fontSize: '14px' }}>待办事项</span>
              </Link>
            </Badge>
          </Col>
        </Row>
      </Fragment>
    )
  }
}
export default Header
