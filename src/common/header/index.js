import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Logo, Addition, Title } from './style'
import { Avatar, Row, Col } from 'antd';

class Header extends Component {
    render() {
        return (
            <Row>
                <Col span={4}>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </Col>
                <Col span={16}>
                    <Title>
                        贷款业务系统
                    </Title>
                </Col>
                <Col span={4}>
                    <Addition>
                        <Avatar icon="user" style={{ marginRight: 5 }} />欢迎你，袁瑞
                    </Addition>
                </Col>
            </Row>

        )
    }
}
export default connect(null, null)(Header)