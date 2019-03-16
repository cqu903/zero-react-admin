import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const Logo = styled.div`
    top: 0;
    left: 0;
    width: 150px;
    height: 50px;
    margin: 8px 15px;
    background: url(${logoPic});
    background-repeat: no-repeat;
    background-size: contain;
`
export const Title = styled.div`
    text-align:center;
    font-size: 30px;
    color: #595757;
`
export const Addition = styled.div`
    text-align:right;
`