import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/reset.css'
import '@/styles/border.css'
import '@/utils/rem'

import './icons'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false })

Vue.config.productionTip = false

router.beforeEach(async(to, from, next) => {
  // 开始进度条
  NProgress.start()

  // 动态设置网页标题
  document.title = to.meta.title
  next()
})

router.afterEach(() => {
  // 结束进度条
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
