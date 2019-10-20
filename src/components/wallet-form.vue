<template>
  <form class="form" onsubmit="#">
    <table class="form-table">
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
        <td>
          <button class="button button-alert" @click.prevent="$emit('deleteclicked')">Delete</button>
        </td>
        <td>
          <button class="button" @click.prevent="isEditMode=false">Submit</button>
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