import React, { Component } from 'react'

import { actionCreators } from 'business/zeroList/store'
import store from 'store'

export default class RefreshComponent {
  static refresh = (url, index) => {
    store.dispatch(actionCreators.initDataList(url, index))
  }
}
