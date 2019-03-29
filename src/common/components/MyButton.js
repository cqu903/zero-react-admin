import React, { Component } from 'react'
import { Button } from 'antd'

export default class MyButton extends Component {
  render() {
    const { disabled, disabledStyle, value, ...params } = this.props
    if (!disabled) {
      return <Button {...params} value={value} />
    } else {
      return <Button {...params} value={value} disabled={true} />
    }
  }
}
