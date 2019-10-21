const state = [
    { id: 0, name:'physical wallet', balance:'1920', currency:'P' }, 
    { id: 1, name:'savings', balance:'5000', currency:'P' },
    { id: 2, name:'emergency fund', balance:'3000', currency:'P' }
  ]

const mutations = {
  addWallet(state, wallet) {
    state.push(wallet)
    console.log(wallet)
  },
  editWallet(state, wallet) {
    state = state.map(w => {
      if (w.id == wallet.id) 
        return wallet
      else w
    })
  },
  deleteWallet(state, walletID) {
    state = state.filter(w => w.id != walletID)
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