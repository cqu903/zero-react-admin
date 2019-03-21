import React, { Component } from 'react'
import { Globalstyle } from './style'
import { IconGlobal } from './statics/iconfont/iconfont'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

import Login from './pages/login'
import Home from './pages/home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <IconGlobal />
        <BrowserRouter>
          <div>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
