import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('bulma/css/bulma.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
