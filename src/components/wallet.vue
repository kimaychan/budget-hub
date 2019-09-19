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
    background-color: rgb(22, 22, 22);
    color: rgb(220, 220, 220);
    padding: 2rem 3rem;
    text-align: center;
    // box-shadow: 5px 5px 15px grey;
    box-sizing: border-box;
    .balance {
      font-size: 120%;
    }
    .name {
      font-size: 60%;
      display: block;
    }
  }
</style>


