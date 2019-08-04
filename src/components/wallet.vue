<template>
  <div class="wallet">
    <span class="balance"> {{ currency }} {{ balance }} </span>
    <span class="name"> {{ name }} </span>
  </div>
</template>
<script>
export default {
  name: "Wallet",
  props: [ "name", "balance", "currency" ],
  data: function () { 
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .wallet {
    background-color: #023246;
    color: white;
    min-width: 60px;
    padding: 35px 40px 30px 40px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 5px 5px 15px grey;
    font-family: "HelveticaNeue-Light";
    .balance {
      font-size: 1.3rem;
    }
    .name {
      font-size: .7rem;
      display: block;
    }
  }
</style>


