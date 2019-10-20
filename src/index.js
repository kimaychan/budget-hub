import Vue from "vue"
import app from "./App.vue"
import store from "./store/index.js"

Vue.config.productionTip = false


import "./styles/main.scss"

new Vue({
  el: "#app",
  render: h => h(app),
  components: { app },
  store
})