import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Badge, Icon, Dropdown, Menu, Modal } from 'antd'
import Breadcrumb from './Breadcrumb'
import routes from '../../routes'
import { DEV_BACKEND_SERVER_URL } from 'config/development'

class Header extends Component {
  state = {
    visible: false
  }
  handleMenuClick = e => {
    if (e.key === '2') {
      this.setState({ visible: false })
      console.log('logout...')
      this.showConfirm()
    }
  }

  handleVisibleChange = flag => {
    this.setState({ visible: flag })
    console.log('handleVisibleChange...')
  }

  showConfirm = () => {
    Modal.confirm({
      title: '您确定退出系统吗?',
      content: '',
      onOk() {
        return new Promise((resolve, reject) => {
          if (process.env.NODE_ENV === 'development') {
            window.location.href = `${DEV_BACKEND_SERVER_URL}/logout`
          } else {
            window.location.href = `/logout`
          }
        }).catch(() => console.log('Oops errors!'))
      },
      onCancel() {}
    })
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">修改密码</Menu.Item>
        <Menu.Item key="2">退出系统</Menu.Item>
      </Menu>
    )
    return (
      <Fragment>
        <Row>
          <Col span={1}>
            <Icon
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => this.props.onClick()}
              style={{
                margin: '5px 2px'
              }}
            />
          </Col>
          <Col span={6}>
            <Breadcrumb routes={routes} />
          </Col>
          <Col span={12} />
          <Col span={3}>
            <Badge count={5} offset={[10, 0]}>
              <Link to="/wait_process_list">
                <span style={{ fontSize: '14px' }}>待办事项</span>
              </Link>
            </Badge>
          </Col>
          <Col span={2}>
            <Dropdown
              overlay={menu}
              onVisibleChange={this.handleVisibleChange}
              visible={this.state.visible}
            >
              <a className="ant-dropdown-link" href="#">
                控制面板 <Icon type="down" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default Header
