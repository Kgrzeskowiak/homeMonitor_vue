import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensorList : [],
    sensorListLoaded : false,
    lastReadings : {},
    connected : false,
    garageGateState : "Zamknięte",
    readings : {}
  },
  mutations: {
      saveReadings(state,data){
        state.readings = data;
      },
      addSensorToList(state,data){
          state.sensorList.push(data)
      },
      setGarageState(state, payload){
            state.garageGateState = payload
      },
      setSensorListLoaded(state){
        state.sensorListLoaded = true;
      },

      setLastReading(state, reading){
        state.lastReadings = reading
        Object.keys(state.lastReadings).forEach(key => {
          if (state.lastReadings[key].location == 'floor')
          { 
            state.lastReadings[key].location = 'Piętro';
          }
          if (state.lastReadings[key].location == 'ground')
          { 
            state.lastReadings[key].location = 'Parter';
          }
          if (state.lastReadings[key].location == 'outdoor')
          { 
            state.lastReadings[key].location = 'Zewnętrzny';
          }
        })
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
              context.commit('addSensorToList', sensor)
            })
          })
        },
      getLastReadings(context) {
        var readingList = {}
        axios.get('http://192.168.1.9:3000/lastReadings').then((response) => {
          response.data.forEach(reading => {
            readingList[reading.location] = {temperature : reading.temperature, humidity : reading.humidity, location : reading.location}
          })
          context.commit('setLastReading', readingList)
  
        })
      },
      getReadingsForSensorInTime(context, queryParams){
        console.log("getreading leci")
        return new Promise((resolve, reject) => { 
          axios.get('http://192.168.1.9:3000/temperature' + '/?nodeName=' + queryParams.sensorName + '&timeRange=' + queryParams.timeRange).then((response) => {
          context.commit('saveReadings',response.data)
          resolve()
          })
        })
      },
      SOCKET_connect() {
        this.connected = true;
      },
      SOCKET_garageState(context, payload) {
        context.commit('setGarageState', payload)
      }
  }
})
