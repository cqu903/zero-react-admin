import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Badge, Icon, Dropdown, Menu, Modal, Switch } from 'antd'
import Breadcrumb from './Breadcrumb'
// import routes from '../../routerMapping'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { DEV_BACKEND_SERVER_URL } from 'config/development'
import { actionCreators as homeActionCreators } from '../store'
// import './sider.scss'
import { MyIcon } from '../style'
import http from 'utils/http'

import { injectIntl } from 'react-intl'

import PubSub from 'pubsub-js'
import { SWITCH_LANGUAGE } from 'common/constant/pubSub'

class Header extends Component {
  state = {
    menuVisible: false,
    langVisible: false,
    loginName: '',
    trueName: ''
  }
  handleMenuClick = e => {
    if (e.key === '2') {
      this.setState({ menuVisible: false })
      console.log('logout...')
      this.showConfirm()
    }
  }

  handleMenuVisibleChange = flag => {
    this.setState({ menuVisible: flag })
  }

  handleLangClick = e => {
    this.setState({ langVisible: false })
    localStorage.setItem('lang', e.key)
    // window.location.reload()
    PubSub.publish(SWITCH_LANGUAGE, e.item.children)
    // const title = intl.formatMessage({ id: 'switch.language.title' })
    // const content = intl.formatMessage({ id: 'switch.language.content' })
  }

  handleLangVisibleChange = flag => {
    this.setState({ langVisible: flag })
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
    const lang = (
      <Menu onClick={this.handleLangClick}>
        <Menu.Item key="zh-cn">CN 简体中文</Menu.Item>
        <Menu.Item key="en">EN English</Menu.Item>
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
          <Col span={2}>
            <Switch
              checked={this.props.theme === 'dark'}
              onChange={this.props.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </Col>
          <Col span={4}>
            <Breadcrumb routes={this.props.routes} />
          </Col>
          <Col span={8}>
            {/* <FormattedMessage id="App.datePicker.title" />
            <DatePicker /> */}
          </Col>
          <Col span={4}>
            {this.state.loginName}( {this.state.trueName} )，欢迎您！
          </Col>
          <Col span={2}>
            <Badge count={5} offset={[10, 0]}>
              <Link to="/wait_process_list">
                <span style={{ fontSize: '14px' }}>待办事项</span>
              </Link>
            </Badge>
          </Col>
          <Col span={2}>
            <Dropdown
              key={1}
              overlay={menu}
              onVisibleChange={this.handleMenuVisibleChange}
              visible={this.state.menuVisible}
            >
              {/* eslint-disable-next-line */}
              <span className="ant-dropdown-link" style={{ cursor: 'pointer' }}>
                控制面板 <Icon type="down" />
              </span>
            </Dropdown>
          </Col>
          <Col span={1}>
            <Dropdown
              key={2}
              overlay={lang}
              onVisibleChange={this.handleLangVisibleChange}
              visible={this.state.langVisible}
            >
              {/* eslint-disable-next-line */}
              <span className="ant-dropdown-link" style={{ cursor: 'pointer' }}>
                <Icon type="global" />
              </span>
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
)(withRouter(injectIntl(Header)))
