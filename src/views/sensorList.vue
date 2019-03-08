<template>
  <div>
    <!-- <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Kanał</th>
          <th>Nasłuch</th>
          <th>Ostatnia aktywność</th>
        </tr>
      </thead>
      <tbody v-for="sensor in sensors">
      <tr>
      <td>{{sensor.id}}</td>
      <td>{{sensor.publisher}}</td>
      <td>{{sensor.topicSubscribed}}</td>
      <td>{{ sensor.lastActivity | moment("from", true) }}</td>
    </tr>
    </tbody>
    </table>-->
    <v-data-table :headers="headers" :items="sensors" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.publisher }}</td>
        <td>{{ props.item.topicSubscribed }}</td>
        <td>{{ props.item.lastActivity | moment("from", true) }}</td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import DataHandler from "./DataHandler.js";
const axios = require("axios");
import { mapState } from "vuex";
export default {
  name: "sensorList",
  data() {
    return {
      headers: [
        { text: "Nazwa", sortable: false },
        { text: "Kanał", sortable: false },
        { text: "Nasłuch", sortable: false },
        { text: "Ostatnia aktywność", sortable: false }
      ]
    };
  },
  computed: {
    sensors() {
      return this.$store.state.sensorList;
    }
  },
  mounted() {
    if (!this.$store.state.sensorListLoaded) {
      this.$store.dispatch("getSensorList");
      this.$store.commit("setSensorListLoaded");
    }
  }
};
</script>
