<template>
  <form class="transaction-form">
    <table>
      <tr>
        <td colspan="2"> 
          <div class="title">Transaction</div>  
        </td>
      </tr>
      <tr>
        <td>
          <label for="source">Source: </label>
        </td>
        <td> <input id="source" type="text"> </td>
      </tr>
      <tr>
        <td>
          <label for="destination">Destination: </label>
        </td>
        <td> <input id="destination" type="text"> </td>
      </tr>
      <tr>
        <td>
          <label for="amount">Amount: </label>
        </td>
        <td> <input id="amount" type="text"> </td>
      </tr>
    </table>
  </form>  
</template>
<script>
export default {
  props: ["transaction"]
}
</script>
<style lang="scss" scoped>
  .transaction-form {
    table {
      border: none;
      tr {
        td {
          padding: .5rem;
          .title {
            text-align: center;
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>