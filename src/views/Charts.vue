<template>
<div>
<p>do wyboru do koloru</p>
  <LineChart :reading="TemperatureReadings"/>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";
import { race } from 'q';

export default {
  name : 'Charts',
  components : {LineChart},
  data() {
    return {
    queryParams: {sensorName: "Czujnik Temperatury Góra", timeRange: -1},
    TemperatureReadings : []
    }
  },
  computed: {
    getData: function ()
    {
      console.log("to są readingsy w funkcji", readings)
      var dataForChart = {
      labels: [],
      datasets: [
        {
          label: 'Temperatura',
          backgroundColor: '#f87979',
          data: [],
          fill : false
        },
        {
        label: 'Wilgotność',
        backgroundColor: '#f12888',
        data: [],
        fill : false

      } 
      ]
      }
      this.$store.state.readings.forEach(element => {
        dataForChart.labels.push(element.measurmentDate)
        dataForChart.datasets[0].data.push(element.temperature)
        dataForChart.datasets[1].data.push(element.humidity)
      });
      
    }
  },
  created(){
     this.$store.dispatch("getReadingsForSensorInTime", this.queryParams).then(() =>
     {
       console.log("ASYNC ???")
     })
    
  },
  mounted() {
    
//  this.prepareData(this.$store.state.readings)
  }
}
</script>