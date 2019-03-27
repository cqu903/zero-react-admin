import antdZh from 'antd/lib/locale-provider/zh_CN'
import appLocaleData from 'react-intl/locale-data/en'
import zhMessages from './zh.json'

export default {
  messages: {
    ...zhMessages
  },
  antd: antdZh,
  locale: 'zh-Hans-CN',
  data: appLocaleData
}
