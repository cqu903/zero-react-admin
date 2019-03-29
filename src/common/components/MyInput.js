import React, { Component } from 'react'
import { Input } from 'antd'

import 'statics/css/MyComponents.module.scss'

export default class MyInput extends Component {
  render() {
    const {
      disabled,
      disabledStyle,
      allowClear,
      defaultValue,
      ...params
    } = this.props
    if (!disabled) {
      return (
        <Input
          {...params}
          allowClear={allowClear}
          defaultValue={defaultValue}
        />
      )
    } else {
      return (
        <Input
          disabled
          {...params}
          defaultValue={defaultValue}
          // style={{
          //   border: '0px',
          //   borderBottom: '1px solid #ccc'
          // }}
        />
      )
    }
  }
}
