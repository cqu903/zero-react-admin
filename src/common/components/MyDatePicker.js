import React, { Component } from 'react'
import { DatePicker } from 'antd'

export default class MyDatePicker extends Component {
  render() {
    const { disabled, disabledStyle, value, ...params } = this.props
    if (!disabled) {
      return <DatePicker {...params} value={value} />
    } else {
      return <span style={disabledStyle}>{value}</span>
    }
  }
}
