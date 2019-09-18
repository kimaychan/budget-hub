<template>
  <form class="transaction-form" onsubmit="#">
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
      <tr v-if="isEditMode">
        <td colspan="2">
          <button type="submit">Submit</button>
        </td>
      </tr>
    </table>
  </form>  
</template>
<script>
export default {
  props: ["transaction"],
  data: function() {
    return {
      isEditMode: false
    }
  }
}
</script>
<style lang="scss" scoped>
  .transaction-form {
    background: black;
    color: white;
    padding: 1rem;
    table {
      width: 100%;
      border: none;
      tr {
        td {
          padding: .5rem;
          .title {
            text-align: center;
            font-size: 1rem;
          }
          label {
            font-size: .8rem;
          }
          input {
            width: 100%;
            height: 1.2rem;
            border: solid black;
            border-radius: .2rem;
            &:focus { outline: 0; }
          }
        }
        &:not(first-child) {
          td:first-child {
            text-align: left;
          }
          td:last-child {
            text-align: right;
          }
        }
      }
    }
  }
</style>