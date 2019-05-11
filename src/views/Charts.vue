<template>
<div>
  <div>
 <ChartSelection />
</div>
  <LineChart v-if="loaded" :chartData="dataForChart" v-on:reRender="renderChartForSensor()" />
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";
import ChartSelection from "@/components/ChartSelection.vue";
import { race } from 'q';
export default {
  name : 'Charts',
  components : {LineChart, ChartSelection},
  data() {
    return {
   queryParams: {sensorName: "Czujnik Temperatury Góra", timeRange: -1},
    loaded : false,
    dataForChart : {
      labels: [],
      datasets: [
        {
          label: 'Temperatura',
          backgroundColor: '#f44242',
          data: []
        },
        {
        label: 'Wilgotność',
        backgroundColor: '#41bbf4',
        data: []
      } 
      ]
      }
    }
  },
  mounted() {
  this.firstChartRander()
  },
  methods: {
    firstChartRander () {
       this.$store.dispatch("getReadingsForSensorInTime", this.queryParams).then(response => {
       this.$store.state.readings.forEach(element => {
       this.dataForChart.labels.push(element.measurmentDate)
       this.dataForChart.datasets[0].data.push(element.temperature)
       this.dataForChart.datasets[1].data.push(element.humidity)
         })
      this.loaded= true;
       })
    },
    renderChartForSensor()
    {
      console.log("LECI")
       this.queryParams = queryParams;
       this.$store.dispatch("getReadingsForSensorInTime", queryParams).then(response => {
       this.$store.state.readings.forEach(element => {
       this.dataForChart.labels.push(element.measurmentDate)
       this.dataForChart.datasets[0].data.push(element.temperature)
       this.dataForChart.datasets[1].data.push(element.humidity)
         })
      this.loaded= true;
       })
    }
    
  }
}
</script>