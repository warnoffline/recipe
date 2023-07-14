<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
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
