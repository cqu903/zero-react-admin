import { actionCreators } from 'business/zeroList/store'
import store from 'store'

/**
 * 用于其他组件刷新该组件时使用
 */
export default class RefreshComponent {
  /**
   * 刷新组件
   */
  static refresh = (url, index) => {
    store.dispatch(actionCreators.initDataList(url, index))
  }
}
