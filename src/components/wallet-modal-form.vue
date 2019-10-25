<template>
  <div>
    <modal :isShow="isShow" @modalcloseclicked="$emit('modalcloseclicked')">
      <wallet-form 
        :wallet="wallet" 
        :onsubmit="onsubmit"
        @deleteclicked="$emit('deleteclicked')"
      ></wallet-form>
    </modal>
  </div>
</template>
<script>
import WalletForm from "./wallet-form.vue"
import Modal from "./modal.vue"
export default {
  props: ["isShow", "wallet", "onsubmit"],
  components: {
    Modal,
    WalletForm
  }
}
</script>