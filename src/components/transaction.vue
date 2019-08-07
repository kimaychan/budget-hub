<template>
  <div class="transaction">
    <span>You paid {{ amount.currency }} {{ amount.value }} to {{ destination}} for {{ purpose }}</span>
    <span class="date">{{ date }}</span>
  </div>
</template>
<script>
export default {
  name: "Transaction",
  props: ["date", "destination", "amount", "purpose"]
}
</script>
<style lang="scss" scoped>
  .transaction {
    padding: 2%;
    background-color: #023246;
    color: white;
    border-radius: 10px;
    .date {
      float: right;
    }
  }
</style>


