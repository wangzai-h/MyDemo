import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as echarts from 'echarts'
import 'echarts-liquidfill'

Vue.config.productionTip = false

// 注册ui组件
Vue.use(Antd)
// 挂载echarts
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
