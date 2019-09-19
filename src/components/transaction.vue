<template>
  <div class="transaction">
    <table>
      <tr>
        <td>{{ date }}</td>
        <td>{{ purpose }}</td>
        <td :class="type">
          {{ amountCurrency }} {{ amountValue }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Transaction",
  props: ["date", "destination", "amountCurrency", "amountValue", "purpose", "type"]
}
</script>
<style lang="scss" scoped>
  .transaction {
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: rgb(22, 22, 22);
    color: rgb(220, 220, 220);
    font-size: .8rem;
    // box-shadow: 5px 5px 15px grey;
    table {
      width: 100%;
      tr {
        td:first-child, td:last-child {
          width: 10%;
        }
        td:last-child {
          text-align: right;
        }
      }
    }
    .income { 
      color: #177535; 
      &::before {
        content: "+"
      }
    }
    .expense { 
      color: #C10505; 
      &::before {
        content: "-"
      }
    }
    .transfer { color:#0A68D2; }
  }
</style>


