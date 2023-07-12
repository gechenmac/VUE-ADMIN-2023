import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import '@/assets/style/Global-Layout.css' // global style

//引入swiper
//引入swiper 样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/style/swiper-bundle.css'
//注册插件
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
Vue.use(Antd)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
