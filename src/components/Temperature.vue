<template>
  <div class="tile" v-bind:class="tileColor">
    <div>
      <i class="fa fa-thermometer"></i>
      <p class="tileLocation">{{reading.location}}</p>
    </div>
    <div>
      <p class="tileValue" v-bind:class="valueColor">{{reading.temperature}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Temperature",
  props: {
    reading: {
      required: true
    }
  },
  mounted() {
    this.$store.dispatch("getLastReadings");
  },
  data() {
    return {
      hot : false,
      cold : false,
      normal : false
    };
  },
  computed: {
    valueColor : function () {
      return {
        highTemperature_value : this.reading.temperature > 24,
        lowTemperature_value : this.reading.temperature < 20,
        normalTemperature_value : this.reading.temperature >= 20 && this.reading.temperature <24
      }
    },
     tileColor : function () {
      return {
        highTemperature_tile : this.reading.temperature > 24,
        lowTemperature_tile : this.reading.temperature < 20,
        normalTemperature_tile : this.reading.temperature >= 20 && this.reading.temperature <24
      }
    }
  },
  methods: {
  }
};
</script>

<style scoped>
.fa-thermometer {
  text-shadow: 3px 3px 16px #272634;
}
.fa {
  font-size: 4em;
  margin-top: 20px;
  padding-bottom: 20px;
  color: #fff;
}
.tile {
  position: relative;
  background-color: grey;
  text-align: center;
  flex-grow: 1;
}
.tileValue {
  background: grey;
  font-size: 2em;
  color: white;
  margin-bottom: auto;
}
.highTemperature_value  {
  background : #ed5b5b;
}
.highTemperature_tile {
  background: #e52626;
}
.lowTemperature_value {
  background: #63c2f9
}
.lowTemperature_tile {
  background: blue;
}
.normalTemperature_value {
  background: #43af51;
}
.normalTemperature_tile {
  background: #267e39;
}
.tileLocation {
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 9px;
  right: 15px;
}
</style>