import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensorList : []
  },
  mutations: {
      addObject(state,data){
          state.sensorList.push(data)
      }
  },
  actions: {
    getSensorList(context) {
        axios.get('http://192.168.1.9:3000/deviceList').then((response) => {
            Object.keys(response.data).forEach((key) => {
              var sensor = {
                id: response.data[key].id,
                publisher: response.data[key].publisher,
                topicSubscribed: response.data[key].topicSubscribed,
                lastActivity: response.data[key].lastActivity
              }
              context.commit('addObject', sensor)
            })
          })
    }
  }
})
