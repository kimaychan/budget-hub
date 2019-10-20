<template>
  <div>
    <main-layout>
      <template v-slot:content> 
        <dashboard></dashboard>
      </template> 
    </main-layout>
  </div>
</template>
<script>
import MainLayout from "./layouts/main-layout.vue"
import Dashboard from "./pages/dashboard.vue"

export default {
  name: "App",
  data () {
    return { }
  },
  components: { 
    MainLayout,
    Dashboard 
  }, 
  mounted () {
    console.log("app is mounted!", this)
  }
}
</script>




