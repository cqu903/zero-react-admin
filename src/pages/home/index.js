import React, { Component } from 'react'
import { Layout } from 'antd'
import Sider from './components/Sider'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/Header'
import * as routerMapping from '../router'
import { actionCreators as homeActionCreators } from './store'

class Home extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount() {
    this.props.loadMenuData()
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  getCompoment = path => {
    for (let key in routerMapping.mapping) {
      let item = routerMapping.mapping[key]
      if (path === item.path) {
        console.info('path--->', path)
        return item.component
      }
    }
    return null
  }

  transferRouter = menuData => {
    let routes = []
    menuData.map(item => {
      item.children.map(menuItem => {
        if (Array.isArray(menuItem.children)) {
          // has thrid menu
          menuItem.children.map(subMenuItem => {
            // has menu
            routes.push({
              path: subMenuItem.url,
              component: this.getCompoment(subMenuItem.url),
              name: subMenuItem.text
            })
            return null
          })
        } else {
          // hasn't third menu
          routes.push({
            path: menuItem.url,
            component: this.getCompoment(menuItem.url),
            name: menuItem.text
          })
        }
        return null
      })
      return null
    })
    return routes
  }

  render() {
    // console.info('home')
    const { collapsed, menuData } = this.props
    let routes = this.transferRouter(menuData)
    return (
      <div id="components-layout-demo-custom-trigger">
        <Layout>
          <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            // width={240}
            style={{ minHeight: 1500 }}
          >
            <Sider />
          </Layout.Sider>
          <Layout>
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
              <Header
                collapsed={this.state.collapsed}
                onClick={this.toggle}
                routes={routes}
              />
            </Layout.Header>
            <Layout.Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              {routes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact
                  />
                )
              })}
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
              Copyright © 2019 zerofinance.cn. All Right Reserved.
            </Layout.Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  collapsed: state.home.collapsed,
  menuData: state.home.menuData,
  routes: state.home.routes
})

const mapDispatchToProps = dispatch => {
  return {
    loadMenuData() {
      dispatch(homeActionCreators.loadMenuData())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home))
