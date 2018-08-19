import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import LogRocket from 'logrocket'
LogRocket.init('u44d3u/sumlist')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
