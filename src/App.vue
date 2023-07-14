<template>
  <div class="app">
    <div v-if="isLoad" class="main">
      <nav-bar></nav-bar>
      <router-view></router-view>
    </div>
    <div v-else class="loading">
      <p>Загрузка...</p>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default{
  components: {NavBar},
  data(){
    return{
      isLoad: false
    }
  },
  mounted(){
    window.onload = () =>{
      this.isLoad = true
    }
  }
}
</script>
<style lang="scss">
.loading{
  background-color: #AC011C;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 35px;
  font-weight: bold;
}
</style>
