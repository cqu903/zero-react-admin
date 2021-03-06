import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Form, Select } from 'antd'
import {
  MyInput,
  MySelect,
  MyTextArea,
  MyDatePicker
} from 'common/components/MyComponents'

class AdminFeeRepayment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      visible: false
    }
  }

  handleChange = value => {
    console.log(`selected ${value}`)
  }

  onDateChange = (date, dateString) => {
    console.log(date, dateString)
  }

  render() {
    const Option = Select.Option
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 }
      },
      wrapperCol: {
        sm: { span: 20 }
      }
    }
    return (
      <div>
        <Form {...formItemLayout}>
          <Form.Item label="還款類型：">
            {getFieldDecorator('item1', {
              rules: [
                {
                  required: true,
                  message: '请输入還款類型!'
                }
              ]
            })(
              <MySelect
                // disabled
                style={{ width: '100%' }}
                defaultValue="a1"
                onChange={this.handleChange}
              >
                <Option value="a1">ATM还款</Option>
                <Option value="a2">现金还款</Option>
                <Option value="a3">支票还款</Option>
              </MySelect>
            )}
          </Form.Item>
          <Form.Item label="銀行代碼">
            {getFieldDecorator('item2', {
              rules: [
                {
                  required: true,
                  message: '请输入銀行代碼!'
                }
              ]
            })(<MyInput />)}
          </Form.Item>
          <Form.Item label="还款日期">
            <MyDatePicker onChange={this.onDateChange} />
          </Form.Item>
          <Form.Item label="備註">
            <MyTextArea disabled autosize={{ minRows: 2, maxRows: 6 }} />
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(withRouter(AdminFeeRepayment))
