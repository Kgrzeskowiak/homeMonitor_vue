<template>
    <div>
  <v-select :items="items" label="Wybierz czujnik" v-model="selected" @change="emitSelectedValue"></v-select>
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
    emitSelectedValue: function () {
        this.$emit('updateChart', this.selected)
    }
}
}

</script>

<style>
</style>