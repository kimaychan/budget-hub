<template>
  <form class="wallet-form">
    <table>
      <tr>
        <td colspan="2"> 
          <div class="title">Wallet</div>  
        </td>
      </tr>
      <tr>
        <td>
          <label for="name">Name: </label>
        </td>
        <td> <input id="name" type="text"> </td>
      </tr>
      <tr>
        <td>
          <label for="currency">Currency: </label>
        </td>
        <td> <input id="currency" type="text"> </td>
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
  props: ["wallet"],
  data: function() {
    return {
      isEditMode: false
    }
  }
}
</script>
<style lang="scss" scoped>
  .wallet-form {
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
            color: rgb(209, 209, 211);
          }
          label {
            font-size: .8rem;
            color: rgb(125, 125, 139);
          }
          input {
            width: 100%;
            height: 1.2rem;
            border: none;
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