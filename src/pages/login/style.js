import styled from 'styled-components'

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #eee;
`
export const LoginBox = styled.div`
    width: 40%;
    height: 60%;
    margin: 100px auto;
    background: #fff;
    padding-top: 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    padding: 100px 0;
    text-align: center;
    .singal-input {
        width: 80%;
        margin-bottom: 30px;
    }
    .login-btn {
        display: block;
        margin: 0 auto;
        width: 80%;
    }
`