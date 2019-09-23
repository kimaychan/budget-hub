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
    background-color: rgb(15, 20, 36);
    border-radius: .1rem;
    color: rgb(125, 125, 139);
    font-size: .8rem;
    &:hover {
      background-color: rgba(49, 51, 71, 0.363);
      cursor: pointer;
    }
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
      color: #30ac57; 
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


