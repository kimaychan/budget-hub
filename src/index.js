import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"

Vue.config.productionTip = false
Vue.use(Vuex) 

import "./styles/main.scss"

new Vue({
  el: '#app',
  render: h => h(App),
  components: { App }
})