/**
 * https://github.com/styled-components/styled-components/issues/582
 */
import styled, { css } from 'styled-components'
import longImgBlack from '../../statics/images/long-yellow-black.svg'
import longImgWhite from '../../statics/images/long-yellow-white.svg'
import logoImgblack from '../../statics/images/logo-yellow-black.svg'
import logoImgWhite from '../../statics/images/logo-yellow-white.svg'
import { Link } from 'react-router-dom'
// import { Icon } from 'antd'

export const BreadcrumbWrapper = styled.div`
  width: 100%;
  font-size: 14px;
`
/* export const MyIcon = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 5px 10px;
  cursor: pointer;
  transition: color 0.3s;

  :hover {
    color: #1890ff;
  }
` */
export const BreadcurmbLink = styled(Link)`
  color: rgba(0, 0, 0, 0.45);
  transition: color 0.3s;
`

const background4Logo = (collapsed, theme) => {
  if (collapsed) {
    if (theme === 'dark') {
      return css`
        background-image: url(${logoImgWhite});
        background-size: 25px 40px;
        background-position: 30px;
        color: #fff;
        font-size: 20px;
      `
    } else {
      return css`
        background-image: url(${logoImgblack});
        background-size: 25px 40px;
        background-position: 30px;
        color: #fff;
        font-size: 20px;
      `
    }
  } else {
    if (theme === 'dark') {
      return css`
        background-image: url(${longImgWhite});
        background-size: 150px;
        background-position: center center;
      `
    } else {
      return css`
        background-image: url(${longImgBlack});
        background-size: 150px;
        background-position: center center;
      `
    }
  }
}

export const Logo = styled.div`
  position: relative;
  height: 64px;
  overflow: hidden;
  line-height: 64px;
  // background: #002140;
  background-repeat: no-repeat;
  ${props => background4Logo(props.collapsed, props.theme)}
`

// const PropsBox = styled.div(props => ({
//   background: props.background,
//   height: '50px',
//   width: '50px'
// }));
