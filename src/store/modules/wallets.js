const state = {
  list: [
    { id: 0, name:'physical wallet', balance:'1920', currency:'P' }, 
    { id: 1, name:'savings', balance:'5000', currency:'P' },
    { id: 2, name:'emergency fund', balance:'3000', currency:'P' }
  ]
}

const mutations = {
  addWallet(state, wallet) {
    state.list.push(wallet)
  },
  editWallet(state, wallet) {
    state.list = state.list.map(w => w.id == wallet.id ? wallet : w)
  },
  deleteWallet(state, walletID) {
    state.list.splice(state.list.findIndex(w => w.id == walletID), 1)
  }
}

const actions = {
  addWallet({ commit }, wallet) {
    commit("addWallet", wallet)
  },
  editWallet({ commit }, walletID) {
    commit("editWallet", walletID)
  },
  deleteWallet({ commit }, walletID) {
    commit("deleteWallet", walletID)
  }
}

const wallets = {
  state,
  mutations,
  actions
}

export default wallets