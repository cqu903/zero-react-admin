import React, { Component } from 'react'
import { Layout } from 'antd'
import Sider from './components/Sider'
import { Route } from 'react-router-dom'
import routes from '../routes'
import Header from './components/Header'

class Home extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    console.info('home')
    return (
      <div id="components-layout-demo-custom-trigger">
        <Layout>
          <Layout.Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            width={240}
            style={{ minHeight: 1500 }}
          >
            <Sider dataUrl={this.props.dataUrl} />
          </Layout.Sider>
          <Layout>
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
              <Header collapsed={this.state.collapsed} onClick={this.toggle} />
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
export default Home
