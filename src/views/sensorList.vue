<template>
  <div class="about">
    <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Kanał</th>
          <th>Nasłuch</th>
          <th>Aktywność</th>
        </tr>
      </thead>
      <tr v-for="sensor in sensorList">
      <td>{{sensorList.id}}</td>
      <td>{{sensorList.publisher}}</td>
      <!-- <td>{{sensor.topicSubscribed}}</td>
      <td>{{sensor.lastActivity}}</td> -->
    </tr>
    </table>
  </div>
</template>
<script>
import DataHandler from './DataHandler.js'
const axios = require('axios')
import { mapState } from 'vuex'
export default {
  name: 'sensorList',
  components: {
    Sensor
  },
  computed: mapState([
    'sensorList'
  ]),
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('getSensorList')
    // axios.get('http://192.168.1.9:3000/deviceList').then((response) => {
    //   Object.keys(response.data).forEach((key) => {
    //     this.sensorList.push({
    //       id: response.data[key].id,
    //       publisher: response.data[key].publisher,
    //       topicSubscribed: response.data[key].topicSubscribed,
    //       lastActivity: response.data[key].lastActivity
    //     })
    //   })
    // })
  }
}
</script>
