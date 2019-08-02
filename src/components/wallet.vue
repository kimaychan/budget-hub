<template>
  <div class="wallet">
    <span class="amount"> {{ wallet.balance }} </span>
  </div>
</template>
<script>
export default {
  name: "Wallet",
  data: function () { 
    return {
      wallet: {
        name: "", 
        balance: 6000
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .wallet {
    background-color: #023246;
    color: white;
    max-width: 60px;
    padding: 40px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 5px 5px 15px grey;
    font-family: "HelveticaNeue-Light";
    .amount {
      font-size: 20px
    }
  }
</style>


