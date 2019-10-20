import vuex from "vuex"
import vue from "vue"

import wallets from "./modules/wallets.js"

vue.use(vuex) 

const store = new vuex.Store({
  state: {},
  mutations: {},
  modules: {
    wallets
  }
})

export default store
