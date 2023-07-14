<template>
  <div class="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default{
  components: {NavBar}

}
</script>
<style lang="scss">
#app{
  font-family: 'Roboto Mono', monospace;
}
</style>
