// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import baiduMap from 'vue-baidu-map'

Vue.use(baiduMap, {
  ak: 'iK3P4oeDo6jHs21MLSQcOq9tbWB3MGIK'
})
Vue.use(elementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
