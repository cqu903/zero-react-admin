import React, { Component } from 'react'
import { Layout } from 'antd'
import Sider from './components/Sider'
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/Header'
import * as routerMapping from '../router'
import { actionCreators as homeActionCreators } from './store'
import NotFoundPage from './../../common/exceptions/NotFoundPage'

class Home extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    let defaultTheme = localStorage.getItem('defaultTheme')
    defaultTheme = defaultTheme === null ? 'dark' : defaultTheme

    this.state = {
      collapsed: false,
      theme: defaultTheme,
      minHeight: 0
    }
  }
  componentDidMount() {
    this.props.loadMenuData()
    this.setState({
      minHeight: window.screen.availHeight - 50
    })
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  changeTheme = value => {
    let theme = value ? 'dark' : 'light'
    this.setState({
      theme: theme
    })
    localStorage.setItem('defaultTheme', theme)
  }

  getCompoment = path => {
    for (let key in routerMapping.mapping) {
      let item = routerMapping.mapping[key]
      if (path === item.path) {
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
            let component = this.getCompoment(subMenuItem.url)
            if (component !== null) {
              routes.push({
                path: subMenuItem.url,
                component: component,
                name: subMenuItem.text
              })
            }
            return null
          })
        } else {
          // hasn't third menu
          let component = this.getCompoment(menuItem.url)
          if (component !== null) {
            routes.push({
              path: menuItem.url,
              component: this.getCompoment(menuItem.url),
              name: menuItem.text
            })
          }
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
    let routes = this.transferRouter(menuData).concat(routerMapping.extra)

    return (
      <div id="components-layout-demo-custom-trigger">
        <Layout>
          <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={200}
            style={{
              background: this.state.theme === 'dark' ? '#002140' : '#fff',
              minHeight: this.state.minHeight
            }}
          >
            <Sider theme={this.state.theme} />
          </Layout.Sider>
          <Layout>
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
              <Header
                collapsed={this.state.collapsed}
                onClick={this.toggle}
                theme={this.state.theme}
                changeTheme={this.changeTheme}
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
              <Switch>
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
                <Route path="*" component={NotFoundPage} />
              </Switch>
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
