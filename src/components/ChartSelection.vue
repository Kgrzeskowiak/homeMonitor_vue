<template>
    <div>
  <v-select :items="items" label="Wybierz czujnik" v-model="selected" @change="grabValue"></v-select>
</div>
</template>

<script>
export default {
    name : 'ChartSelection',
    data() {
        return {
            selected : '',
    }
    },
computed: {
items() {
   let sensorList = []
   this.$store.state.sensorList.forEach(sensor => {
      if (sensor.id != 'main_listener')
        {
            sensorList.push(sensor.id)
        }
   });
    return sensorList
}},
created() {
    if (!this.$store.state.sensorListLoaded) {
      this.$store.dispatch("getSensorList");
      this.$store.commit("setSensorListLoaded");
    }
},
methods:{
    grabValue: function () {
        this.$emit('reRender')
        var queryParams = {sensorName: this.selected, timeRange: -1}
        this.$store.dispatch("getReadingsForSensorInTime", queryParams)
        this.$emit('reRender')
    }
}
}

</script>

<style>
</style>