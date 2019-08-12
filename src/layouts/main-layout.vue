<template>
  <div class="main-layout">
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
  components: { SideNav },
  mounted: () => {
    console.log("main layout mounted!")
  }
}
</script>
<style lang="scss" scoped>
  .main-layout {
    .side-nav {
      height: 100%;
      position: fixed;
      width: 3rem;
    }
    .content {
      margin-left: 3rem;
      padding: 1.5rem;
    }
  }
</style>

