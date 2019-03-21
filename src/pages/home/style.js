import styled from 'styled-components'
import logoImg from '../../statics/small_logo.png'
import { Link } from 'react-router-dom'

export const BreadcrumbWrapper = styled.div`
  width: 100%;
  font-size: 14px;
`
export const BreadcurmbLink = styled(Link)`
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
`
export const Logo = styled.div`
  position: relative;
  height: 64px;
  overflow: hidden;
  line-height: 64px;
  background: #002140;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: 25px 40px;
  background-position: 30px;
  color: #fff;
  font-size: 20px;
`
