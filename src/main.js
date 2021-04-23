import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import vuex from './store/datastore.js'
import './App.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  store: vuex,
  render: h => h(App),
}).$mount('#app')
