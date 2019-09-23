<template>
  <div class="dashboard">
    <panel title="Your Accounts">
      <wallet-list :wallets="wallets" @walletclicked="onShowWalletForm"></wallet-list> 
    </panel>
    <panel title="Your Transactions">
      <transaction-list :transactions="transactions" @transactionclicked="onShowTransactionForm"></transaction-list> 
    </panel>
    <wallet-modal-form 
      :isShow="isWalletModalShown" 
      @modalcloseclicked="isWalletModalShown=false"
      :wallet="featuredWallet"
    ></wallet-modal-form>
    <transaction-modal-form 
      :isShow="isTransactionModalShown" 
      @modalcloseclicked="isTransactionModalShown=false"
      :transaction="featuredTransaction"
    ></transaction-modal-form>
  </div>
</template>
<script>
import WalletList from "./../components/wallet-list.vue"
import TransactionList from "./../components/transaction-list.vue"
import Panel from "./../components/panel.vue"

import WalletModalForm from "./../components/wallet-modal-form.vue"
import TransactionModalForm from "./../components/transaction-form-modal.vue"

export default {
  components: {
    WalletList,
    TransactionList,
    Panel,
    WalletModalForm,
    TransactionModalForm
  },
  data: () => {
    return {
      wallets: [
        { name:'physical wallet', balance:'1920', currency:'P'}, 
        { name:'savings', balance:'5000', currency:'P'},
        { name:'emergency fund', balance:'3000', currency:'P'}
      ],
      transactions: [
        { 
          purpose:'bill', 
          amountValue:'1000', 
          amountCurrency:'P', 
          date: 'Aug. 17, 2019', 
          source: 'Payroll Account',
          destination: 'Globe', 
          type: 'expense' 
        }, 
        { 
          purpose:'savings', 
          amountValue:'5000', 
          amountCurrency:'P', 
          date: 'Aug. 16, 2019', 
          source: 'Payroll Account',
          destination: 'Globe', 
          type: 'transfer' 
        },
        { 
          purpose:'salary', 
          amountValue:'9000', 
          amountCurrency:'P', 
          date: 'Aug. 15, 2019', 
          source: 'Payroll Account',
          destination: 'Globe', 
          type: 'income' 
        }
      ],
      isWalletModalShown: false,
      isTransactionModalShown: false,
      featuredWallet: {},
      featuredTransaction: {}
    }
  },
  methods: {
    onShowWalletForm(data) {
      console.log("showing wallet!", data)
      this.featuredWallet = data
      this.isWalletModalShown = true
    },
    onShowTransactionForm(data) {
      console.log("showing transaction!", data)
      this.featuredTransaction = data
      this.isTransactionModalShown = true
    }
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


