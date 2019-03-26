import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { BreadcrumbWrapper, BreadcurmbLink } from '../style'
import * as routerMapping from 'pages/router'

/**
 * 自定义导航组件，后期可以优化正则表达式性能，将其处理过程构造为常量，而不是每次都运行一次
 */
class Breadcrumb extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      currentPathName: '',
      currentPath: '/'
    }
  }
  componentWillMount() {
    // first enter, get router name from props.location
    this.getRouteName(this.props.location.pathname)
  }
  componentDidMount() {
    // 监听路由变化
    this.props.history.listen(currentRoute => {
      // when route changed, renew the route name
      this.getRouteName(currentRoute.pathname)
    })
  }

  getRouteName(path) {
    const routes = this.props.routes
    let finded = false
    routes.forEach(route => {
      if (route.name) {
        const str = route.path.replace(/\/:.*$/g, '')
        if (str === path) {
          this.setState({
            currentPathName: route.name,
            currentPath: path
          })
          finded = true
        }
      }
    })
    if (!finded) {
      // 从非菜单配置中查找
      routerMapping.extra.map(item => {
        if (item.name) {
          // /loanDetail/:id
          // /loanDetail/559034615297245184
          let patt = new RegExp('^' + item.path.replace(/:id/, '.*') + '$')
          if (patt.test(item.path)) {
            this.setState({
              currentPathName: item.name,
              currentPath: path
            })
            finded = true
          }
        }
        return ''
      })
    } else {
      console.error('route或extra没有配置name属性')
    }
  }
  renderPath() {
    if ('/' !== this.props.location.pathname) {
      return (
        <div>
          <BreadcurmbLink to="/">首页</BreadcurmbLink>
          <span style={{ color: 'rgba(0,0,0,.65)' }}>
            {'  /  ' + this.state.currentPathName}
          </span>
        </div>
      )
    } else {
      return <BreadcurmbLink to="/">首页</BreadcurmbLink>
    }
  }
  render() {
    return <BreadcrumbWrapper>{this.renderPath()}</BreadcrumbWrapper>
  }
}

export default withRouter(Breadcrumb)
