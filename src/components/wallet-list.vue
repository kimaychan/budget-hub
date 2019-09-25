<template>
  <div>
    <ul class="wallet-list">
      <li :key="i" v-for="(w, i) in wallets">
        <div @click="$emit('walletclicked', w)" >
          <wallet 
            :currency="w.currency" 
            :name="w.name" 
            :balance="w.balance"
          ></wallet>
        </div>
      </li>
      <li>
        <div @click="$emit('walletclicked', {})">
          <add-wallet></add-wallet>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Wallet from "./wallet.vue"
import AddWallet from "./add-wallet.vue"

export default {
  name: "WalletList",
  props: [ "wallets" ],
  data: function () { 
    return {}
  },
  components: { Wallet, AddWallet }
}
</script>
<style lang="scss" scoped>
  ul.wallet-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      float: left;
      margin: 0 1rem 1rem 0;
    }
  }
</style>