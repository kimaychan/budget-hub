<template>
  <div class="main-layout">
    <header>
      <div class="menu"></div>
    </header>
    <aside class="side-nav">
      <side-nav></side-nav>
    </aside>
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
    header {
      .menu {
        padding: 1rem;
        float:right;
      }
    }
    .side-nav {
      height: 100%;
      position: fixed;
    }
    .content {
      margin-left: 3rem;
      padding: 1.5rem;
    }
  }
</style>

