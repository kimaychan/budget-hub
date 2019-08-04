<template>
  <div>
    <ul class="wallet-list">
      <li :key="wallet.name" v-for="wallet in wallets">
        <wallet :currency="wallet.currency" :name="wallet.name" :balance="wallet.balance"></wallet>
      </li>
    </ul>
  </div>
</template>
<script>
import Wallet from "./wallet.vue"
export default {
  name: "WalletList",
  props: [ "wallets" ],
  data: function () { 
    return {}
  },
  components: { Wallet }
}
</script>
<style lang="scss" scoped>
  ul.wallet-list {
    list-style-type: none;
    li {
      float: left;
      margin: 3%;
    }
  }
</style>