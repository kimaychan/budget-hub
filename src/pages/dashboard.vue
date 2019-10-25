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
      :wallet="featuredWallet"
      :onsubmit="onSubmitWalletForm"
      @modalcloseclicked="isWalletModalShown=false"
      @deleteclicked="onDeleteWallet"
    ></wallet-modal-form>
    <transaction-modal-form 
      :isShow="isTransactionModalShown" 
      @modalcloseclicked="isTransactionModalShown=false"
      @deleteclicked="onDeleteTransaction"
      :transaction="featuredTransaction"
    ></transaction-modal-form>
    <delete-confirmation-modal 
      :isShow="isDeleteWalletModalShown" 
      @modalcloseclicked="isDeleteWalletModalShown=false"
      message-title="Wallet"></delete-confirmation-modal>
    <delete-confirmation-modal 
      :isShow="isDeleteTransactionModalShown" 
      @modalcloseclicked="isDeleteTransactionModalShown=false"
      message-title="Transaction"></delete-confirmation-modal>
  </div>
</template>
<script>
import WalletList from "./../components/wallet-list.vue"
import TransactionList from "./../components/transaction-list.vue"
import Panel from "./../components/panel.vue"

import WalletModalForm from "./../components/wallet-modal-form.vue"
import TransactionModalForm from "./../components/transaction-form-modal.vue"
import DeleteConfirmationModal from "./../components/delete-confirmation-modal.vue"

import { mapState, mapActions } from "vuex"

export default {
  components: {
    WalletList,
    TransactionList,
    Panel,
    WalletModalForm,
    TransactionModalForm,
    DeleteConfirmationModal
  },
  data: () => {
    return {
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
      isDeleteWalletModalShown: false,
      isDeleteTransactionModalShown: false,
      featuredWallet: {},
      featuredTransaction: {}
    }
  },
  methods: {
    ...mapActions([
      'addWallet',
      'editWallet'
    ]),
    onShowWalletForm(data) {
      this.featuredWallet = data
      this.isWalletModalShown = true
    },
    onShowTransactionForm(data) {
      this.featuredTransaction = data
      this.isTransactionModalShown = true
    },
    onDeleteTransaction() {
      this.isDeleteTransactionModalShown = true
      this.isTransactionModalShown = false
    },
    onDeleteWallet() {
      this.isDeleteWalletModalShown = true
      this.isWalletModalShown = false
    },
    onSubmitWalletForm(walletForm) {
      if (walletForm.id) this.editWallet(walletForm)
      else this.addWallet(walletForm)
    }
  },
  computed: mapState({
    wallets: state => state.wallets.list,
  })
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


