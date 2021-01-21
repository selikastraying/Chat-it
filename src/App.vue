<template>
  <div id="app">
    <NavBar />
    <div id="view">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#view {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding-top: 80px;
  overflow: hidden;
}
</style>
