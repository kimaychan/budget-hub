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
    background-color: rgb(15, 20, 36);
    padding: 2rem 3rem;
    text-align: center;
    border-radius: .1rem;
    box-sizing: border-box;
    .balance {
      font-size: 120%;
      color: rgb(220, 220, 220);
    }
    .name {
      font-size: 60%;
      display: block;
      color: rgb(95, 93, 112);
    }
    &:hover {
      background-color: rgba(49, 51, 71, 0.363);
      cursor: pointer;
    }
  }
</style>


