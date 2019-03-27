import React, { Component } from 'react'
import { Globalstyle } from './style'
import { IconGlobal } from './statics/iconfont/iconfont'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import uuidv4 from 'uuid/v4'
import PubSub from 'pubsub-js'
import { SWITCH_LANGUAGE } from 'pages/constant/pubSub'

import Home from './pages/home'

import enUS from 'common/locales/en-US'
import zhCN from 'common/locales/zh-CN'

import { LocaleProvider } from 'antd'
import { IntlProvider } from 'react-intl'

import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('en')

class App extends Component {
  constructor(props) {
    super(props)
    this.args = null
    this.state = {
      key: uuidv4()
    }
  }

  getLanguage = () => {
    // chrome的不同语言设置值：zh-CN zh-HK zh-TW en
    // 常规浏览器语言和IE浏览器
    const lang = navigator.language || navigator.userLanguage
    const localStorageLang = localStorage.getItem('lang')
    const defaultLang = localStorageLang || lang
    return defaultLang
  }

  getCurrentAppLocale = () => {
    let defaultLang = this.getLanguage()
    switch (defaultLang) {
      case 'en':
        return enUS
      default:
        // zh-cn
        return zhCN
    }
  }

  componentDidMount() {
    this.token = PubSub.subscribe(SWITCH_LANGUAGE, () => {
      this.setState({
        key: uuidv4()
      })
    })
  }

  render() {
    window.appLocale = this.getCurrentAppLocale()
    return (
      <div key={this.state.key}>
        <IntlProvider
          locale="en"
          // locale={window.appLocale.locale}
          messages={window.appLocale.messages}
          // formats={window.appLocale.formats}
        >
          <LocaleProvider locale={window.appLocale.antd}>
            <Provider store={store}>
              <Globalstyle />
              <IconGlobal />
              <BrowserRouter>
                <Route path="/" component={Home} />
              </BrowserRouter>
            </Provider>
          </LocaleProvider>
        </IntlProvider>
      </div>
    )
  }
}

export default App
