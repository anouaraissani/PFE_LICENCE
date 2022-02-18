<template>
  <div id="app">
     <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/navbar.vue';
  export default {
    name: 'App',
    components:{
      Nav
    }
    
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>