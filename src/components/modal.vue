<template>
  <div class="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .modal {
    .modal-mask {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(55, 55, 55, .5);
      display: table;
      // filter: blur(1px);
      .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        .modal-container {
          width: 300px;
          margin: 0px auto;
          background-color: #fff;
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
          transition: all .3s ease;
          font-family: Helvetica, Arial, sans-serif;
        }
      }
    }
  }
</style>