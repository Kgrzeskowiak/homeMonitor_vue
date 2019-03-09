<template>
  <div class="dashboard">
    <v-app>
      <v-container fluid>
        <v-layout row>
          <temperature class="tileMargins" v-for="reading in lastReadings" :reading="reading"/>
        </v-layout>
        <GarageGate class="tileMargins" :garageState="garageState"/>
      </v-container>
    </v-app>
  </div>
</template>
<script>
// @ is an alias to /src
import Temperature from "@/components/Temperature.vue";
import GarageGate from "@/components/GarageGate.vue"

export default {
  name: "dashboard",
  computed: {
    lastReadings() {
      return this.$store.state.lastReadings;
    },
    garageState() {
      return this.$store.state.garageGateState;
    }
  },
  components: {
    Temperature,
    GarageGate
  },
  mounted() {
    this.$store.dispatch("getLastReadings");
    setInterval(() => {
      this.$store.dispatch("getLastReadings");
    }, 60000);
  }
};
</script>

<style>
.dashboard {
  font-family: "Montserrat", sans-serif;
  margin-top: 2em;
}
.tileMargins {
  margin-left: 1%;
  margin-right: 1%;
  flex-grow: 1;
}
a {
  color: green;
}
</style>

