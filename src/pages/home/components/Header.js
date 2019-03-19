import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Badge } from 'antd'
import Breadcrumb from './Breadcrumb'
import routes from '../../routes'

class Header extends Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Col span={6}>
                        <Breadcrumb routes={routes} />
                    </Col>
                    <Col span={15}></Col>
                    <Col span={3}>
                        <Badge count={5} offset={[10, 0]}>
                            <Link to='/wait_process_list'>
                                <span style={{ fontSize: '14px' }}>待办事项</span>
                            </Link>
                        </Badge>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default Header
