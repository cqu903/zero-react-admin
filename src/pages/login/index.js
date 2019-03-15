import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox } from './style';
import { Input, Button } from 'antd';

class Login extends Component {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input className='singal-input' placeholder='用户名'></Input>
                    <Input className='singal-input' placeholder='密码'></Input>
                    <Button className='login-btn' type='primary' size='large'>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}
export default connect(null, null)(Login)