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


