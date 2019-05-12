<template>
  <div>
    <v-form>
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <v-select
              v-model="alarmStateSelected"
              label="Alarm"
              :items = "items"
            ></v-select>
          </v-flex>
          <v-flex xs12 md4>
           <v-text-field
            v-model="nightTimeout"
            label="Czas reakcji (noc)"
          ></v-text-field>
          </v-flex>
           <v-flex xs12 md4>
           <v-text-field
            v-model="dayTimeout"
            label="Czas reakcji (dzień)"
          ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
      <p>{{config}}</p>
  </div>
</template>

<script>
export default {
  name: "ConfigAlarm",
  data() {
      return{
          items : ['Włączony', 'Wyłączony'],
          alarmActive : '',
          alarmStateSelected : '',
          nightTimeout: '',
          dayTimeout: ''

      }
  },
  
  computed: {
    config() {
      this.$store.dispatch("getAlarmConfig");
      this.alarmActive = this.$store.state.config.alarmActive
      this.nightTimeout = this.$store.state.config.nightAlarmTimeout
      this.dayTimeout = this.$store.state.config.dayAlarmTimeout
      if (this.alarmActive === true) { 
          this.alarmStateSelected = "Włączony"
      }
      else {
          this.alarmStateSelected = "Wyłączony"
      }
      return this.$store.state.config;
    }
  },
  methods : {
      saveResults()
      {
          if (alarmStateSelected == "Włączony") { alarmActive == true}
          if (alarmStateSelected == "Wyłączony") { alarmActvive == false}
      }
  }
};
</script>
<style scoped>
</style>



    

