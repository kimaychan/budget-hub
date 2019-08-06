<template>
  <div>
    <ul class="transaction-list">
      <li :key="i" v-for="(t, i) in transactions">
        <transaction 
          :amount="t.amount" 
          :purpose="t.purpose"
          :date="t.date"
          :destination="t.destination"></transaction> 
      </li>
    </ul>
  </div>
</template>
<script>
import Transaction from "./transaction.vue"
export default {
  name: "TransactionList",
  props: ["transactions"],
  components: { Transaction }
}
</script>
<style lang="scss" scoped>
  ul.transaction-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      margin: 1% 0 1% 0;
    }
  }
</style>


