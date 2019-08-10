<template>
  <div class="main-layout">
    <div class="header"></div>
    <div class="side-nav">
      <side-nav></side-nav>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
import SideNav from "./../components/side-nav.vue"
export default {
  components: { SideNav }
}
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 3rem;
    position: fixed;
  }
  .side-nav {
    height: 100%;
    float: left;
    position: fixed;
    width: 3rem;
  }
</style>

