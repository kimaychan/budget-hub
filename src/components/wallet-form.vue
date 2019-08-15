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
    </table>
  </form>  
</template>
<script>
export default {
  props: ["wallet"]
}
</script>
<style lang="scss" scoped>
  .wallet-form {
    table {
      border: none;
      tr {
        td {
          padding: 1rem;
          .title {
            text-align: center;
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>