import axios from 'axios'

// 配置API接口地址
// const root = 'http://192.168.102.121:8080/api'
// const root = window.location.protocol + '//' + window.location.host + '/api'
// const root = '/mock/27/api'

const root = 'http://yapi.aeasycredit.net/'
// 引用axios


axios.interceptors.request.use(
  config => {
    console.log('request......')
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * axios interceptors
 */
axios.interceptors.response.use(
  response => {
    console.log('response......')
    if (
      response.request.responseURL !== undefined &&
      response.request.responseURL !== '' &&
      response.request.responseURL.indexOf('/cas/login') !== -1
    ) {
      window.location.href = response.request.responseURL
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

/*
 *  fileUpload
 */
function fileUpload(file, url) {
  return new Promise((resolve, reject) => {
    const param = new FormData() // 创建form对象
    param.append('file', file, file.name) // 通过append向form对象添加数据
    param.append('chunk', '0') // 添加form表单中其他数据
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
    axios
      .post(url, param, config)
      .then(res => {
        resolve(res.data)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

/**
 * axios common api
 */
function apiAxios(method, url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      baseURL: root
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// 返回在vue模板中的调用接口
export default {
  get(url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post(url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put(url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete(url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  },
  fileUpload(file, url, success, failure) {
    return fileUpload(file, url, success, failure)
  }
}