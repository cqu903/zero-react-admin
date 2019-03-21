import React, { Component } from 'react'
import { Layout } from 'antd'
import Sider from './components/Sider'
import { Route, withRouter } from 'react-router-dom'
import routes from '../routes'
import { connect } from 'react-redux'
import Header from './components/Header'

class Home extends Component {
  render() {
    console.info('home')
    const { collapsed } = this.props
    return (
      <div id="components-layout-demo-custom-trigger">
        <Layout>
          <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={240}
            style={{ minHeight: 1500 }}
          >
            <Sider />
          </Layout.Sider>
          <Layout>
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
              <Header collapsed={collapsed} />
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
  collapsed: state.home.collapsed
})

const mapDispatchToProps = dispatch => {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home))
