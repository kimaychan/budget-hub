<template>
  <div class="transaction">
    <table>
      <tr>
        <td>{{ amountCurrency }} {{ amountValue }}</td>
        <td>{{ purpose }}</td>
        <td>{{ date }}</td>
      </tr>
    </table>
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
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: #1E1E1E;
    color: white;
    box-shadow: 5px 5px 15px grey;
    table {
      width: 100%;
      tr {
        td:first-child, td:last-child {
          width: 10%;
        }
      }
    }
  }
</style>


