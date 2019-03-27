/**
 * https://www.pupboss.com/ant-design-i18n-solutions/
 * https://www.jianshu.com/p/800e6522623d
 * https://ant.design/components/locale-provider-cn/
 *
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import enUS from 'locales/en-US'
import zhCN from 'locales/zh-CN'

import { LocaleProvider } from 'antd'
import { IntlProvider } from 'react-intl'

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('en')

const getCurrentAppLocale = () => {
  let defaultLang = localStorage.getItem('defaultLang')
  defaultLang = defaultLang === null ? 'zh-Hans-CN' : defaultLang
  switch (defaultLang) {
    case 'zh-Hans-CN':
      return zhCN
    default:
      return enUS
  }
}

window.appLocale = getCurrentAppLocale()

ReactDOM.render(
  <IntlProvider
    locale={window.appLocale.locale}
    messages={window.appLocale.messages}
    formats={window.appLocale.formats}
  >
    <LocaleProvider locale={window.appLocale.antd}>
      <App />
    </LocaleProvider>
  </IntlProvider>,
  document.getElementById('root')
)
