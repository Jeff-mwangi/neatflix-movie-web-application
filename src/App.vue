<template>
  <NavigationBar />
  <router-view></router-view>
</template>

<script>
import NavigationBar from './components/Nav/NavigationBar.vue'
export default {
  name: 'App',
  components: {
    NavigationBar,
},
}
</script>

<style>
#app {
  background-color: rgb(63, 4, 110);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
.neatflix{
  font-family:Arial, Helvetica, sans-serif;
  font-size: 0.5rem;
  color: rgb(173, 149, 135);
  padding-left: 0;
}
</style>
