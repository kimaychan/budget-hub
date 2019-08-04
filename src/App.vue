<template>
  <div>
    <wallet-list :wallets="wallets"></wallet-list>
  </div>
</template>
<script>
import WalletList from "./components/wallet-list.vue"

export default {
  name: "App",
  data: function () {
    return {
      message: "hello world",
      wallets: [
        {
          name: "savings",
          balance: "10000",
          currency: "P"
        },
        {
          name: "emergency",
          balance: "10000",
          currency: "P"
        },
        {
          name: "payroll",
          balance: "10000",
          currency: "P"
        }
      ]
    }
  },
  components: {
    WalletList
  }
}
</script>



