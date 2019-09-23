<template>
  <div>
    <modal :isShow="isShow" @modalcloseclicked="$emit('modalcloseclicked')">
      <wallet-form :wallet="wallet"></wallet-form>
    </modal>
  </div>
</template>
<script>
import WalletForm from "./wallet-form.vue"
import Modal from "./modal.vue"
export default {
  props: ["isShow", "wallet"],
  components: {
    Modal,
    WalletForm
  }
}
</script>