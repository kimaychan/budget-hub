<template>
  <form class="form" v-on:submit.prevent="onSubmit">
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
          <input id="name" type="text" v-model="walletForm.name" v-if="isEditMode"> 
          <span v-if="!isEditMode">{{ wallet.name }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <label for="balance">Balance: </label>
        </td>
        <td> 
          <input id="balance" type="text" v-model="walletForm.balance" v-if="isEditMode"> 
          <span v-if="!isEditMode">{{ wallet.balance }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <label for="currency">Currency: </label>
        </td>
        <td> 
          <input id="currency" type="text" v-model="walletForm.currency" v-if="isEditMode"> 
          <span v-if="!isEditMode">{{ wallet.currency }}</span>
        </td>
      </tr>
      <tr v-if="isEditMode">
        <td>
          <button class="button button-alert" @click="onDelete">Delete</button>
        </td>
        <td>
          <button type="submit" class="button">Submit</button>
        </td>
      </tr>
    </table>
  </form>  
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ["wallet"],
  data: function() {
    return {
      isEditMode: true,
      walletForm: {
        id: this.wallet.id,
        name: this.wallet.name,
        balance: this.wallet.balance,
        currency: this.wallet.currency
      }
    }
  },
  methods: {
    ...mapActions([
      'addWallet',
      'deleteWallet'
    ]),
    onSubmit(e) {
      this.addWallet(this.walletForm)
    },
    onDelete(e) {
      console.log(this.walletForm.id)
      this.deleteWallet(this.walletForm.id)
    }
  }
}
</script>