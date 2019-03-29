import React, { Component } from 'react'
import { Input } from 'antd'

import 'statics/css/MyComponents.module.scss'

export default class MyTextArea extends Component {
  render() {
    const { disabled, disabledStyle, defaultValue, ...params } = this.props
    if (!disabled) {
      return <Input.TextArea {...params} defaultValue={defaultValue} />
    } else {
      return (
        <Input.TextArea
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
