import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import { actionCreators as homeActionCreators } from './store'
import { Route, Link, withRouter } from 'react-router-dom'

import routes from '../routes'
import Breadcrumb from './components/breadcrumb';

import 'antd/dist/antd.css'
import './style.css'

class Home extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        this.props.loadMenuData()
    }
    render() {
        const { SubMenu } = Menu
        const { menuData } = this.props
        return (
            <div id='components-layout-demo-custom-trigger'>
                <Layout>
                    <Layout.Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo" />
                        <Menu mode="inline" theme='dark' inlineIndent={20}>
                            {
                                menuData.map((item) => {
                                    return (
                                        <SubMenu key={item.id} title={<span><Icon type="menu" />{item.text}</span>}>
                                            {item.children.map((menuItem) => {
                                                return (
                                                    <Menu.Item key={menuItem.id}>
                                                        {/* <Link to={menuItem.url} key={menuItem.id}> */}
                                                        <Icon type="arrow-right" />
                                                        <span>{menuItem.text}</span>
                                                        {/* </Link> */}
                                                    </Menu.Item>
                                                )
                                            })}
                                        </SubMenu>
                                    )
                                })
                            }
                        </Menu>
                    </Layout.Sider>
                    <Layout>
                        <Layout.Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Layout.Header>
                        <Layout.Content style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280
                        }}>
                            <Breadcrumb routes={routes}></Breadcrumb>
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
const mapState = (state) => ({
    menuData: state.home.menuData
})
const mapProps = (dispatch) => {
    return {
        loadMenuData() {
            dispatch(homeActionCreators.loadMenuData())
        }
    }
}
export default connect(mapState, mapProps)(withRouter(Home))