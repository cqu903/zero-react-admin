import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Badge, Icon, Dropdown, Menu, Modal } from 'antd'
import Breadcrumb from './Breadcrumb'
import routes from '../../routes'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DEV_BACKEND_SERVER_URL } from 'config/development'
import { actionCreators as homeActionCreators } from '../store'
// import './sider.scss'
import { MyIcon } from '../style'
import http from 'utils/http'

class Header extends Component {
  state = {
    visible: false,
    loginName: '',
    trueName: ''
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

  componentWillMount = () => {
    http
      .get('/api/user/getLoginUser')
      .then(rs => {
        this.setState({
          loginName: rs.data.loginName,
          trueName: rs.data.trueName
        })
      })
      .catch(err => {
        console.info(err)
      })
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
    const { collapsed, toggle } = this.props
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <Icon type="profile" />
          修改密码
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="logout" />
          退出系统
        </Menu.Item>
      </Menu>
    )
    return (
      <Fragment>
        <Row>
          <Col span={1}>
            <MyIcon
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Col>
          <Col span={6}>
            <Breadcrumb routes={routes} />
          </Col>
          <Col span={8} />
          <Col span={4}>
            {this.state.loginName}( {this.state.trueName} )，欢迎您！
          </Col>
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

const mapStateToProps = state => ({
  collapsed: state.home.collapsed
})

const mapDispatchToProps = dispatch => {
  return {
    toggle() {
      dispatch(homeActionCreators.siderToggle)
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
