/* 识别ie--浅识别*/
export const isIe = () => {
  const explorer = window.navigator.userAgent
  if (explorer.indexOf('MSIE') >= 0) {
    return true
  } else {
    return false
  }
}

/**
 * 颜色转换16进制转rgba
 * @param {String} hex
 * @param {Number} opacity
 */
export function hex2Rgba(hex, opacity) {
  if (!hex) hex = '#2c4dae'
  return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + (opacity || '1') + ')'
}

/* 获取url参数 */
export const getQueryString = () => {
  const qs = location.href.split('?')[1] || ''
  const args = {}
  const items = qs.length ? qs.split('&') : []
  items.forEach((item, i) => {
    const arr = item.split('=')
    const name = decodeURIComponent(arr[0])
    const value = decodeURIComponent(arr[1])
    name.length && (args[name] = value)
  })
  return args
}

/**
 *  带参数跳转url（hash模式）
 * @param {String} url
 * @param {Object} params
 */
export const toPage = (url, params) => {
  if (params) {
    const query = []
    for (const key in params) {
      query.push(`${key}=${params[key]}`)
    }
    window.location.href = `./index.html#/${url}?${query.join('&')}`
  } else {
    window.location.href = `./index.html#/${url}`
  }
}

/**
 * 生成指定格式的时间
 * @param {*} timeStemp 时间戳
 * @param {*} flag 格式符号
 */
export function formatTime(timeStemp, flag) {
  const time = new Date(timeStemp)
  const timeArr = [time.getFullYear(), time.getMonth() + 1, time.getDate()]
  return timeArr.join(flag || '/')
}

// 获取当前页面的滚动位置
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
})

// 平滑滚动到页面顶部
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}

// 确定设备是移动设备还是台式机/笔记本电脑
export const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop'

// 获得两个日期之间的差异（以天为单位）
export const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24)

