import React, { Component } from 'react'
import { Layout } from 'antd';
import Sider from './components/Sider'
import { Route } from 'react-router-dom'
import routes from '../routes'
import Header from './components/Header'

class Home extends Component {
    render() {
        console.info('home')
        return (
            <div id='components-layout-demo-custom-trigger'>
                <Layout>
                    <Layout.Sider
                        collapsible={false}
                        width={240}
                        style={{ minHeight: 1500 }}
                    >
                        <Sider dataUrl={this.props.dataUrl} />
                    </Layout.Sider>
                    <Layout>
                        <Layout.Header style={{ background: '#fff', padding: 0 }}>
                            <Header />
                        </Layout.Header>
                        <Layout.Content style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280
                        }}>

                            {
                                routes.map((route) => {
                                    return (
                                        <Route key={route.path} path={route.path} component={route.component} exact></Route>
                                    )
                                })
                            }
                        </Layout.Content>
                    </Layout>
                </Layout >
            </div>

        )
    }
}
export default Home