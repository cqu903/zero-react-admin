import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { BreadcrumbWrapper } from './style'
/**
 * 自定义导航组件，后期可以优化正则表达式性能，将其处理过程构造为常量，而不是每次都运行一次
 */
class Breadcrumb extends PureComponent {
    renderPath() {
        const currentPath = this.props.location.pathname
        const routes = this.props.routes
        let curreatPathName = '没找到'
        routes.forEach(route => {
            if (route.name) {
                const str = route.path.replace(/:[a-zA-Z]*/g, '[0-9a-zA-Z]*')
                const pattern = new RegExp(str)
                if (pattern.test(currentPath)) {
                    curreatPathName = route.name
                }
            } else {
                console.error('route没有配置name属性', route)
            }
        })
        return curreatPathName
    }
    render() {
        return (
            <BreadcrumbWrapper>{this.renderPath()}</BreadcrumbWrapper>
        )
    }
}
export default withRouter(Breadcrumb)