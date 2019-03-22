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
    const { menuData, collapsed } = this.props
    return (
      <Fragment>
        <Link to="/">
          <Logo>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;零在金融
          </Logo>
        </Link>

        <Menu
          mode="inline"
          theme="dark"
          // inlineIndent={20}
          inlineCollapsed={collapsed}
        >
          {menuData.map(item => {
            return (
              <SubMenu
                key={item.id}
                title={
                  <span>
                    <Icon type="menu" />
                    <span>{item.text}</span>
                  </span>
                }
              >
                {item.children.map(menuItem => {
                  if (Array.isArray(menuItem.children)) {
                    // has thrid menu
                    return (
                      <SubMenu key={menuItem.id} title={menuItem.text}>
                        {menuItem.children.map(subMenuItem => {
                          console.info('subMenuItem', subMenuItem.text)
                          return (
                            <Menu.Item key={subMenuItem.id}>
                              {subMenuItem.url !== null &&
                              subMenuItem.url !== '' ? (
                                <Link to={subMenuItem.url} key={subMenuItem.id}>
                                  {subMenuItem.text}
                                </Link>
                              ) : (
                                <span>{subMenuItem.text}</span>
                              )}
                            </Menu.Item>
                          )
                        })}
                      </SubMenu>
                    )
                  } else {
                    // hasn't third menu
                    return (
                      <Menu.Item key={menuItem.id}>
                        {menuItem.url !== null && menuItem.url !== '' ? (
                          <Link to={menuItem.url} key={menuItem.id}>
                            {menuItem.text}
                          </Link>
                        ) : (
                          <span>{item.text}</span>
                        )}
                      </Menu.Item>
                    )
                  }
                })}
              </SubMenu>
            )
          })}
        </Menu>
      </Fragment>
    )
  }
}
const mapState = state => ({
  menuData: state.home.menuData,
  collapsed: state.home.collapsed
})
const mapProps = dispatch => {
  return {
    loadMenuData() {
      dispatch(homeActionCreators.loadMenuData())
    }
  }
}
export default connect(
  mapState,
  mapProps
)(withRouter(Sider))
