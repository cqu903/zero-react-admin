import React, { PureComponent, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { actionCreators as homeActionCreators } from '../store'
import { Logo } from '../style'

class Sider extends PureComponent {
    componentDidMount() {
        this.props.loadMenuData()
    }
    render() {
        const { SubMenu } = Menu
        const { menuData } = this.props
        return (
            <Fragment>
                <Link to='/'>
                    <Logo />
                </Link>

                <Menu mode="inline" theme='dark' inlineIndent={20}>
                    {
                        menuData.map((item) => {
                            return (
                                <SubMenu key={item.id} title={<span><Icon type="menu" />{item.text}</span>}>
                                    {item.children.map((menuItem) => {
                                        return (
                                            <Menu.Item key={menuItem.id}>
                                                <Link to={menuItem.url} key={menuItem.id}>
                                                    <Icon type="arrow-right" />
                                                    <span>{menuItem.text}</span>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })}
                                </SubMenu>
                            )
                        })
                    }
                </Menu>
            </Fragment>
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
export default connect(mapState, mapProps)(withRouter(Sider))