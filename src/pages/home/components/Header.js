import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Badge } from 'antd'
import { connect } from 'react-redux'
import Breadcrumb from './Breadcrumb'
import routes from '../../routes'

class Header extends PureComponent {
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
export default connect(null, null)(Header)
