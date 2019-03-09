<template>
  <div>
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
