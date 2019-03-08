<template>
  <div class="dashboard">
      <div class="row">
        <temperature class="temperature"v-for="reading in lastReadings":reading="reading"/>
      </div>
    <div class="row">
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Temperature from "@/components/Temperature.vue";

export default {
  name: "dashboard",
  computed : {
    lastReadings()
    {
      return this.$store.state.lastReadings
   }},
  components: {
    Temperature
  },
  mounted()
  {
    this.$store.dispatch('getLastReadings')
     setInterval(() =>
     {
     this.$store.dispatch('getLastReadings')
    },60000)
  }
};
</script>

<style>
.dashboard {
font-family: 'Montserrat', sans-serif;
margin-top : 2em;

}
.row{
  display: flex;
  justify-content: center;
}
.temperature {
 margin-left : 1.5%;
 margin-right : 1.5%;
}
a {
  color: green;
}
</style>

