import axios from 'axios'

// 创建一个axios实列
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
  // withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)

export default service
