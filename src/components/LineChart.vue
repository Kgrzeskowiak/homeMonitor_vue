
<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: 'LineChart',
  extends: Line,
  mixins: [reactiveProp],
  props: {
    reading: {
      required: false
    }
  },
  chartdata : {
    type : Object,
    default : null
  },
  options : {
    type : Object,
    default : null
  },
  mounted () {
    this.renderChart( this.chartData, {responsive: true, maintainAspectRatio: false})
  }
}
</script>