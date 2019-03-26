import React, { PureComponent, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'
// import { actionCreators as homeActionCreators } from '../store'
import { Logo } from '../style'
import * as routerMapping from '../../router'

class Sider extends PureComponent {
  constructor(props) {
    super(props)

    this.rootSubmenuKeys = []
    this.state = {
      openKeys: []
    }
  }
  componentDidMount() {
    // this.props.loadMenuData()
    // this.props.loadRouter()
  }

  getIcon = id => {
    for (let key in routerMapping.icons) {
      let icon = routerMapping.icons[key]
      if (icon.id === id) {
        return icon.type
      }
    }
    return ''
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }

  render() {
    const { SubMenu } = Menu
    const { menuData, collapsed } = this.props
    return (
      <Fragment>
        <Link to="/">
          <Logo collapsed={collapsed} />
        </Link>

        <Menu
          mode="inline"
          theme={this.props.theme}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          // inlineIndent={20}
          inlineCollapsed={collapsed}
        >
          {menuData.map(item => {
            let icon = null
            const iconType = this.getIcon(item.id)
            if (iconType !== '') {
              icon = <Icon type={iconType} />
            }
            this.rootSubmenuKeys.push(item.id)
            return (
              <SubMenu
                key={item.id}
                title={
                  <span>
                    {icon}
                    <span>{item.text}</span>
                  </span>
                }
              >
                {item.children.map(menuItem => {
                  if (Array.isArray(menuItem.children)) {
                    // has thrid menu
                    let icon = null
                    const iconType = this.getIcon(menuItem.id)
                    if (iconType !== '') {
                      icon = <Icon type={iconType} />
                    }
                    return (
                      <SubMenu
                        key={menuItem.id}
                        title={
                          <span>
                            {icon}
                            <span>{menuItem.text}</span>
                          </span>
                        }
                      >
                        {menuItem.children.map(subMenuItem => {
                          // console.info('subMenuItem', subMenuItem.text)
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
    // loadMenuData() {
    //   dispatch(homeActionCreators.loadMenuData())
    // }
  }
}
export default connect(
  mapState,
  mapProps
)(withRouter(Sider))
