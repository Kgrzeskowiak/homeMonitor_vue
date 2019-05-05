<template>
    <div>
        <p> XXX</P>
        <label>Czujnik:</label>
  <select v-model="selected">
<option v-for="sensor in sensors">{{sensor.id}}</option>
</select>
<p>xxx2</p>
</div>
<!-- </select> -->
    </div>
</template>

<script>
export default {
    name : 'ChartSelection',
    data() {
        return {
            selected : ''
    }
    },
computed: {
sensors() {
      return this.$store.state.sensorList;
}},
created() {
    if (!this.$store.state.sensorListLoaded) {
      this.$store.dispatch("getSensorList");
      this.$store.commit("setSensorListLoaded");
    }
},
}

</script>

<style>
</style>