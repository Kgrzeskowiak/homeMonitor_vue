<template>
  <div id="app">
    <div id="nav">
  
      <Navbar />
    </div>
    <v-app>
    <router-view/>
    </v-app>
  
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name : 'App',
  components: {Navbar}
}
</script>


<style>

#nav {
  padding: 30px;
}
#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
