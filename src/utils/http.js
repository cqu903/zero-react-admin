import axios from 'axios'
import { DEV_BACKEND_SERVER_URL, WITH_CREDENTIALS } from 'config/development'

let root = ''
if (process.env.NODE_ENV === 'development') {
  root = DEV_BACKEND_SERVER_URL
  console.log(
    'current mode is development, remote backend server url is ' + root
  )
}

axios.interceptors.request.use(
  config => {
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
    // console.log('response...' + response)
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
      .catch(function(err) {
        reject(err)
      })
  })
}

/**
 * axios common api
 */
function apiAxios(method, url, params) {
  let ajaxObj = {
    method: method,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root
  }
  // dev enviroment
  if (process.env.NODE_ENV === 'development') {
    ajaxObj['withCredentials'] = WITH_CREDENTIALS
  } else {
    ajaxObj['withCredentials'] = true
  }
  return new Promise((resolve, reject) => {
    axios(ajaxObj)
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
