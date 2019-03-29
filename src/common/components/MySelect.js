import React, { Component } from 'react'
import { Select } from 'antd'

export default class MySelect extends Component {
  render() {
    const { disabled, disabledStyle, defaultValue, ...params } = this.props
    if (!disabled) {
      return (
        <Select {...params} defaultValue={defaultValue}>
          {this.props.children}
        </Select>
      )
    } else {
      return (
        <Select disabled={disabled} {...params} defaultValue={defaultValue}>
          {this.props.children}
        </Select>
      )
    }
  }
}
