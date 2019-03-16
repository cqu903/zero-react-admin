import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon, Tabs } from 'antd';
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
        const TabPane = Tabs.TabPane;
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
                                style={{ height: '100%', borderRight: 0, overflow: 'scroll', background: '#eee' }}>
                                {
                                    menuData.map((item) => {
                                        return (
                                            <SubMenu key={item.get('id')} title={<span><Icon type="menu" />{item.get('text')}</span>}>
                                                {item.get('children').map((menuItem) => {
                                                    return (
                                                        // <Link to={menuItem.get('url')} key={menuItem.get('id')}>
                                                        <Menu.Item onClick={() => this.props.handleMenuClick(menuItem)} key={menuItem.get('id')}>
                                                            <Link to={menuItem.get('url')} key={menuItem.get('id')}>
                                                                <Icon type="arrow-right" />
                                                                {menuItem.get('text')}
                                                            </Link>
                                                        </Menu.Item>
                                                        // </Link>
                                                    )
                                                })}
                                            </SubMenu>
                                        )
                                    })
                                }
                            </Menu>
                        </Sider>
                        <Content style={{ background: '#fff', padding: '0 12 0 12', margin: 0, minHeight: 280, }}>
                            <Tabs activeKey={this.props.activeTab} onTabClick={this.props.handleTabClick}>
                                {
                                    this.props.tabs.map((tabItem) => {
                                        return (
                                            <TabPane tab={tabItem.get('title')} key={tabItem.get('key')}>
                                                {
                                                    routes.map((route) => {
                                                        return <Route key={route.path} path={route.path} component={route.component} exact></Route>
                                                    })
                                                }
                                            </TabPane>
                                        )
                                    })
                                }

                            </Tabs>
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
    tabs: state.getIn(['home', 'tabs']),
    activeTab: state.get('home').get('activeTab')
})
const mapProps = (dispatch) => {
    return {
        loadMenuData() {
            dispatch(homeActionCreators.loadMenuData())
        },
        handleMenuClick(menuItem) {
            dispatch(homeActionCreators.addTab(menuItem.get('text'), menuItem.get('id'), '/mainPage'))
        },
        handleTabClick(tabKey) {
            dispatch(homeActionCreators.selectTab(tabKey))
        }
    }
}
export default connect(mapState, mapProps)(Home)