<template>
  <div>
    <v-form>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs4>
            <v-select
              v-model="config.alarmActive"
              label="Alarm"
              :items="items"
              item-value="bool"
              item-text="stan"
            ></v-select>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="config.nightAlarmTimeout" label="Czas reakcji (noc)" type="number"></v-text-field>
          </v-flex>
          <v-flex xs4>
            <v-text-field v-model="config.dayAlarmTimeout" label="Czas reakcji (dzień)" type="number"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-data-table :headers="headers" :items="config.recievers" class="elevation-1">
              <template v-slot:items="props">
                <td class="text-xs-left">{{ props.item.Name }}</td>
                <td class="text-xs-left">{{ props.item.Number }}</td>
              </template>
            </v-data-table>
          </v-flex>
            <v-btn v-on:click="saveResults()">Zapisz zmiany</v-btn>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ConfigAlarm",
  data() {
    return {
      items: [
        { stan: "Włączony", bool: true },
        { stan: "Wyłączony", bool: false }
      ],
      headers: [
        { text: "Nazwa", value: "name", sortable : false},
        { text: "Numer", value: "number", sortable : false}
      ]
    };
  },
  computed: {
    config() {
        return this.$store.state.config;
    }
  },
  methods: {
    saveResults() {
        this.config.dayAlarmTimeout = parseInt(this.config.dayAlarmTimeout, 10)
        this.config.nightAlarmTimeout = parseInt(this.config.nightAlarmTimeout, 10)
        this.$store.dispatch('setAlarmConfig', this.config)
    },
  },
 mounted()
    {
        this.$store.dispatch("getAlarmConfig");
    }
};
</script>
<style scoped>
</style>



    

