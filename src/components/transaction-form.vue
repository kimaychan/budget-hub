<template>
  <form class="form" onsubmit="#">
    <table class="form-table">
      <tr>
        <td colspan="2"> 
          <div class="title">Transaction</div>  
        </td>
      </tr>
      <tr>
        <td>
          <label for="source">Source: </label>
        </td>
        <td> 
          <input id="source" type="text" :value="transaction.source" v-if="isEditMode"> 
          <span v-if="!isEditMode">{{ transaction.source }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <label for="destination">Destination: </label>
        </td>
        <td> 
          <input id="destination" type="text" :value="transaction.destination" v-if="isEditMode"> 
          <span v-if="!isEditMode">{{ transaction.destination }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <label for="amount">Amount: </label>
        </td>
        <td> 
          <input id="amount" type="text" :value="transaction.amountValue" v-if="isEditMode"> 
          <span v-if="!isEditMode">{{ transaction.amountValue }}</span>
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
  props: ["transaction"],
  data: function() {
    return {
      isEditMode: true
    }
  }
}
</script>