import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Menu, Icon, Tabs } from 'antd';
import { HomeWrapper } from './style'
import { actionCreators as homeActionCreators } from './store'

class Home extends Component {
    componentDidMount() {
        this.props.loadMenuData()
    }
    render() {
        const { Header, Footer, Sider, Content, } = Layout
        const { SubMenu } = Menu
        const { menuData } = this.props
        const TabPane = Tabs.TabPane;
        return (
            <HomeWrapper>
                <Layout style={{ height: '100%' }}>
                    <Header className='header' style={{ background: '#fff', border: '1px solid' }} >
                        <div className='logo'></div>
                    </Header>
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
                                                        <Menu.Item onClick={() => this.props.handleMenuClick(menuItem)} key={menuItem.get('id')}><Icon type="arrow-right" />{menuItem.get('text')}</Menu.Item>
                                                    )
                                                })}
                                            </SubMenu>
                                        )
                                    })
                                }
                            </Menu>
                        </Sider>
                        <Content style={{ background: '#fff', padding: '0 12 0 12', margin: 0, minHeight: 280, }}>
                            <Tabs activeKey={this.props.activeTab}>
                                {
                                    this.props.tabs.map((tabItem) => {
                                        return (
                                            <TabPane tab={tabItem.get('title')} key={tabItem.get('key')}>{tabItem.get('routeUrl')}</TabPane>
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
        }
    }
}
export default connect(mapState, mapProps)(Home)