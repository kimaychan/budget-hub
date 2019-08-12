<template>
  <div class="dashboard">

      <panel title="Your Wallets">
        <wallet-list :wallets="wallets"></wallet-list> 
      </panel>


      <panel title="Your Transactions">
        <transaction-list :transactions="transactions"></transaction-list> 
      </panel>

  </div>
</template>
<script>
import WalletList from "./../components/wallet-list.vue"
import TransactionList from "./../components/transaction-list.vue"
import Panel from "./../components/panel.vue"

export default {
  components: {
    WalletList,
    TransactionList,
    Panel
  },
  data: () => {
    return {
      wallets: [
        { name:'php wallet', balance:'1000', currency:'P'}, 
        { name:'php wallet', balance:'1000', currency:'P'},
        { name:'php wallet', balance:'1000', currency:'P'}
      ],
      transactions: [
        { purpose:'bill', amountValue:'1000', amountCurrency:'P', date: 'Aug. 8, 2019', destination: 'Globe'}, 
        { purpose:'bill', amountValue:'1000', amountCurrency:'P', date: 'Aug. 8, 2019', destination: 'Globe'},
        { purpose:'bill', amountValue:'1000', amountCurrency:'P', date: 'Aug. 8, 2019', destination: 'Globe'}
      ]
    }
  },
  mounted: () => {
    console.log(" dashboard is mounted!")
  }
}
</script>
<style lang="scss" scoped>
  .dashboard {
    .panel {
      min-width: 100%;
    }
  }
</style>


