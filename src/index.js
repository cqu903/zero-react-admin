/**
 * https://www.pupboss.com/ant-design-i18n-solutions/
 * https://www.jianshu.com/p/800e6522623d
 * https://ant.design/components/locale-provider-cn/
 * https://www.jianshu.com/p/c57e000c2bbf
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

const getLanguage = () => {
  // chrome的不同语言设置值：zh-CN zh-HK zh-TW en
  // 常规浏览器语言和IE浏览器
  const lang = navigator.language || navigator.userLanguage
  const localStorageLang = localStorage.getItem('lang')
  const defaultLang = localStorageLang || lang
  return defaultLang
}

const getCurrentAppLocale = () => {
  let defaultLang = getLanguage()
  switch (defaultLang) {
    case 'en':
      return enUS
    default:
      return zhCN
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
