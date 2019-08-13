<template>
  <div class="transaction">
    <span>You paid {{ amountCurrency }} {{ amountValue }} to {{ destination}} for {{ purpose }}</span>
    <span class="date">{{ date }}</span>
  </div>
</template>
<script>
export default {
  name: "Transaction",
  props: ["date", "destination", "amountCurrency", "amountValue", "purpose"]
}
</script>
<style lang="scss" scoped>
  .transaction {
    padding: 0.8rem;
    background-color: #023246;
    color: white;
    box-shadow: 5px 5px 15px grey;
    .date {
      float: right;
    }
  }
</style>


