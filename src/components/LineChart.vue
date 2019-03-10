
<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'LineChart',
  extends: Line,
  props: {
    reading: {
      required: false
    }
  },
  data() {
    // return {
    //   dataChart : {
    //   labels: [],
    //   datasets: [
    //     {
    //       label: 'Temperatura',
    //       backgroundColor: '#f87979',
    //       data: [],
    //       fill : false
    //     },
    //     {
    //     label: 'Wilgotność',
    //     backgroundColor: '#f12888',
    //     data: [],
    //     fill : false

    //   } 
    //   ]
    //   }
    // }
  },
  mounted () {
    console.log(this.reading)
    this.renderChart( this.reading, {responsive: true, maintainAspectRatio: false})
  }
}
</script>