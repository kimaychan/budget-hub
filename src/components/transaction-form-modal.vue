<template>
  <div>
    <modal :isShow="isShow" @modalcloseclicked="$emit('modalcloseclicked')">
      <transaction-form 
        :transaction="transaction"
        @deleteclicked="$emit('deleteclicked')"
      ></transaction-form>
    </modal>
  </div>
</template>
<script>
import TransactionForm from "./transaction-form.vue"
import Modal from "./modal.vue"
export default {
  props: ["isShow", "transaction"],
  components: {
    Modal,
    TransactionForm
  }
}
</script>
<style lang="scss">

</style>