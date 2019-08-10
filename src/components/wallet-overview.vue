<template>
  <div class="wallet-overview">
    <div class="wallets">

    </div>
    <div class="transactions">

    </div>
  </div>
</template>
<script>
import WalletList from "./wallet-list.vue"
import TransactionList from "./transaction-list.vue"

export default {
  components: {
    WalletList,
    TransactionList
  }
}
</script>
<style lang="scss" scoped>

</style>

