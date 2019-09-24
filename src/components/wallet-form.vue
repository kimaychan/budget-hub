<template>
  <form class="form">
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
        <td> 
          <input id="name" type="text" :value="wallet.name" v-if="isEditMode"> 
          <span v-if="!isEditMode">{{ wallet.name }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <label for="currency">Currency: </label>
        </td>
        <td> 
          <input id="currency" type="text" :value="wallet.currency" v-if="isEditMode"> 
          <span v-if="!isEditMode">{{ wallet.currency }}</span>
        </td>
      </tr>
      <tr v-if="isEditMode">
        <td colspan="2">
          <button class="button" @click="isEditMode=false">Submit</button>
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
      isEditMode: true
    }
  }
}
</script>