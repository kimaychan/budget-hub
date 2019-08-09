<template>
  <div>
    <ul class="wallet-list">
      <li :key="i" v-for="(w, i) in wallets">
        <wallet :currency="w.currency" :name="w.name" :balance="w.balance"></wallet>
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