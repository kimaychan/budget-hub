<template>
  <div class="wallet">
    <span class="balance"> {{ currency }} {{ balance }} </span>
    <hr/>
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
    max-width: 5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 10px;
    box-shadow: 5px 5px 15px grey;
    .balance {
      font-size: 100%;
    }
    .name {
      font-size: 70%;
      display: block;
    }
  }
</style>


