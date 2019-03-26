import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { LocaleProvider } from 'antd'

// import en_US from 'antd/lib/locale-provider/en_US'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
)
