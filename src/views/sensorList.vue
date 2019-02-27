<template>
  <div class="about">
    <table>
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
    </table>
  </div>
</template>
<script>
import DataHandler from './DataHandler.js'
const axios = require('axios')
import { mapState } from 'vuex'
export default {
  name: 'sensorList',
  computed: {
    sensors(){
    return  this.$store.state.sensorList
    }},
  mounted(){
    if (!this.$store.state.sensorListLoaded)
    {
      this.$store.dispatch('getSensorList')
      this.$store.commit('setSensorListLoaded')
    }
   
  }
}
</script>
