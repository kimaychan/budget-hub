<template>
  <div>
    <modal :isShow="isShow" @modalcloseclicked="$emit('modalcloseclicked')">
      <form class="form confirmation-form">
        <table>
          <tr>
            <td colspan="2">
              <span class="message">
                Are you sure you want to delete this {{ messageTitle }}?
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <button class="button">No</button>
            </td>
            <td>
              <button class="button button-alert">Yes</button>
            </td>
          </tr>
        </table>
      </form>
    </modal>
  </div>
</template>
<script>
import Modal from "./modal.vue"

export default {
  props: ["isShow", "messageTitle"],
  components: { Modal }
}
</script>