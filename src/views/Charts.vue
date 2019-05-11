<template>
<div>
  <div>
 <ChartSelection v-on:updateChart="renderChartForSensor($event)"/>
</div>
  <LineChart v-if="loaded" :chartData="dataForChart" />
  <v-btn v-on:click="eraseChart()">XX</v-btn>
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
    renderChartForSensor(sensorId)
    {
      this.loaded = false; //Tylko dzieki temu sie przebudowuje
       this.queryParams = {sensorName : sensorId, timeRange :-1}
       this.eraseChart()
       this.$store.dispatch("getReadingsForSensorInTime", this.queryParams).then(response => {
       this.$store.state.readings.forEach(element => {
       this.dataForChart.labels.push(element.measurmentDate)
       this.dataForChart.datasets[0].data.push(element.temperature)
       this.dataForChart.datasets[1].data.push(element.humidity)
         })
      this.loaded= true;
       })
    },
    eraseChart()
    {
       while (this.dataForChart.labels.length > 0)
       {
         this.dataForChart.labels.pop();
       }
       while (this.dataForChart.datasets[0].data.length > 0)
       {
         this.dataForChart.datasets[0].data.pop()
       }
       while (this.dataForChart.datasets[1].data.length > 0)
       {
         this.dataForChart.datasets[1].data.pop()
       }
    }
    
  }
}
</script>