<template>
  <div id="app">
    <v-app>
      <pageHeader />
      <!-- <img src="./assets/logo.png"> -->
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import pageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    pageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
