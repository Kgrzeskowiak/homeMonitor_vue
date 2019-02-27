<template>
  <div class="dashboard">
    <div class="temperature">
      <temperature/>
    </div>
    <div class="temperature">
      <temperature/>
    </div>
    <div class="temperature"> 
      <temperature/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Temperature from '@/components/Temperature.vue'

export default {
  name: 'dashboard',
  components: {
    HelloWorld,
    Temperature
  }
}
</script>

<style>
.dashboard{
  display : inline-block;
  color : red;
}
.temperature{
  display : inline-block;
}
a {
  color: green;
}
</style>

