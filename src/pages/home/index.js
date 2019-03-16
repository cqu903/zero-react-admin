import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon } from 'antd';
import { HomeWrapper } from './style'
import { actionCreators as homeActionCreators } from './store'
import { Route, Link } from 'react-router-dom'

import routes from '../routes'
import Header from '../../common/header'


class Home extends Component {
    componentDidMount() {
        this.props.loadMenuData()
    }
    render() {
        const { Footer, Sider, Content, } = Layout
        const { SubMenu } = Menu
        const { menuData } = this.props
        return (
            <HomeWrapper>
                <Layout style={{ height: '100%' }}>
                    <Layout.Header style={{ background: '#fff', borderBottom: '1px solid #f0f0f0' }}>
                        <Header></Header>
                    </Layout.Header>
                    <Layout>
                        <Sider width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0, overflow: 'scroll', background: 'rgb(250, 250, 250)' }}>
                                {
                                    menuData.map((item) => {
                                        return (
                                            <SubMenu key={item.get('id')} title={<span><Icon type="menu" />{item.get('text')}</span>} style={{ color: 'rgb(32, 32, 32)' }}>
                                                {item.get('children').map((menuItem) => {
                                                    return (
                                                        <Menu.Item key={menuItem.get('id')}>
                                                            <Link to={menuItem.get('url')} key={menuItem.get('id')}>
                                                                <Icon type="arrow-right" />
                                                                {menuItem.get('text')}
                                                            </Link>
                                                        </Menu.Item>
                                                    )
                                                })}
                                            </SubMenu>
                                        )
                                    })
                                }
                            </Menu>
                        </Sider>
                        <Content style={{
                            background: '#fff',
                            padding: '7px',
                            border: '1px solid #eee',
                            margin: '0 0 0 2px',
                            minHeight: 280
                        }}>
                            {
                                routes.map((route) => {
                                    return (
                                        <Route key={route.path} path={route.path} component={route.component} exact ></Route>
                                    )
                                })
                            }
                        </Content>
                    </Layout>
                    <Footer style={{ textAlign: 'center', height: 50, padding: 10 }}>
                        Ant Design ©2018 Created by Zero Finance
                    </Footer>
                </Layout >
            </HomeWrapper >
        )
    }
}
const mapState = (state) => ({
    menuData: state.getIn(['home', 'menuData']),
})
const mapProps = (dispatch) => {
    return {
        loadMenuData() {
            dispatch(homeActionCreators.loadMenuData())
        }
    }
}
export default connect(mapState, mapProps)(Home)