import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import toast from './components/toast'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI);
Vue.config.productionTip = false

//解决移动端300ms延迟
FastClick.attach(document.body)

//安装toast插件
Vue.use(toast)

//安装懒加载插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
