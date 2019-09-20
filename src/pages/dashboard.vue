<template>
  <div class="dashboard">
    <panel title="Your Accounts">
      <wallet-list :wallets="wallets" @walletclicked="isModalShown=true"></wallet-list> 
    </panel>
    <panel title="Your Transactions">
      <transaction-list :transactions="transactions" ></transaction-list> 
    </panel>
    <modal :isShow="isModalShown">
      <wallet-form :wallet="featured.wallet" v-if="featured.wallet!={}"></wallet-form>
      <!-- <transaction-form :transaction="featured.transaction" v-if="featured.transaction!={}"></transaction-form> -->
    </modal>
  </div>
</template>
<script>
import WalletList from "./../components/wallet-list.vue"
import TransactionList from "./../components/transaction-list.vue"
import Panel from "./../components/panel.vue"

import WalletForm from "./../components/wallet-form.vue"
import TransactionForm from "./../components/transaction-form.vue"

import Modal from "./../components/modal.vue"

export default {
  components: {
    WalletList,
    TransactionList,
    Panel,
    WalletForm,
    TransactionForm,
    Modal
  },
  data: () => {
    return {
      wallets: [
        { name:'physical wallet', balance:'1920', currency:'P'}, 
        { name:'savings', balance:'5000', currency:'P'},
        { name:'emergency fund', balance:'3000', currency:'P'}
      ],
      transactions: [
        { purpose:'bill', amountValue:'1000', amountCurrency:'P', date: 'Aug. 17, 2019', destination: 'Globe', type: 'expense' }, 
        { purpose:'savings', amountValue:'5000', amountCurrency:'P', date: 'Aug. 16, 2019', destination: 'Globe', type: 'transfer' },
        { purpose:'salary', amountValue:'9000', amountCurrency:'P', date: 'Aug. 15, 2019', destination: 'Globe', type: 'income' }
      ],
      isModalShown: false,
      featured: {
        wallet: {},
        transaction: {}
      }
    }
  },
  methods: {
    // onFeatureWallet(data) {
    //   this.featured.wallet = {...data}
    //   this.featured.transaction = {}
    //   this.isModalShown=true
    // },
    // onFeatureTransaction(data) {
    //   this.featured.wallet = {}
    //   this.featured.transaction = {...data}
    //   this.isModalShown=true
    // }
  }
}
</script>
<style lang="scss" scoped>
  .dashboard {
    .panel {
      min-width: 100%;
      margin: 1rem 0 2.5rem 0;
    }
  }
</style>


