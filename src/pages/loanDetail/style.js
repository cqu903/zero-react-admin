import styled from 'styled-components'
import { Col, Row } from 'antd'

export const TableRow = styled(Row)`
  div {
    border: 0.5px solid #e9e9e9;
    height: 40px;
    padding: 5px 2px;
  }
`

export const TableCol = styled(Col)`
  background-color: #fafafa;
`

export const SplitLineCol = styled(Col)`
  border: 0;
  border-bottom: 1px solid #ccc;
  height: 35px;
  font-weight: bold;
  font-size: 16px;
  color: #000;
  margin: 10px 0;
`

export const MiddleDiv = styled.div`
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  z-index: 1;
`
