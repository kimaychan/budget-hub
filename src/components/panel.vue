<template>
  <div class="panel">
    <span class="panel-title">{{ title }}</span>
    <div class="panel-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: [ "title" ]
}
</script>
<style lang="scss" scoped>
  .panel {
    padding: .5rem;
    float: left;
    .panel-title {
      font-size: 1.5rem;
    }
    .panel-content {
      margin-top: 1rem;
    }
  }
</style>