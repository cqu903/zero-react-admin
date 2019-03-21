import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { BreadcrumbWrapper, BreadcurmbLink } from '../style'
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
    routes.forEach(route => {
      if (route.name) {
        const str = route.path.replace(/\/:.*$/g, '')
        if (str === path) {
          this.setState({
            currentPathName: route.name,
            currentPath: path
          })
        }
      } else {
        console.error('route没有配置name属性', route)
      }
    })
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
