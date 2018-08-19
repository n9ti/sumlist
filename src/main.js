import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import LogRocket from 'logrocket'

import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven
  .config('https://1d877c9bfe6141a8b781230051c32759@sentry.io/1264916')
  .addPlugin(RavenVue, Vue)
  .install()
  .setDataCallback(function (data) {
    data.extra.sessionURL = LogRocket.sessionURL
    return data
  })

LogRocket.init('u44d3u/sumlist')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
