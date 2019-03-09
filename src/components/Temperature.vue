<template>
<div class="columm">
  <v-flex>
  <div class="tile" v-bind:class="temperatureTileColor">
    <div>
      <i class="fa fa-thermometer"></i>
      <p class="tileLocation">{{reading.location}}</p>
    </div>
    <div>
      <p class="tileValue" v-bind:class="temperatureValueColor">{{reading.temperature}} °C</p>
    </div>
  </div>
  </v-flex>
  <v-flex>
   <div class="tile" v-bind:class="humidityTileColor">
    <div>
      <i class="wi wi-humidity"></i>
      <p class="tileLocation">{{reading.location}}</p>
    </div>
    <div>
      <p class="tileValue" v-bind:class="humidityValueColor">{{reading.humidity}} %</p>
    </div>
  </div>
  </v-flex>
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
      hot: false,
      cold: false,
      normal: false
    };
  },
  computed: {
    temperatureValueColor: function () {
      return {
        highTemperature_value: this.reading.temperature >= 24,
        lowTemperature_value: this.reading.temperature < 20,
        normalTemperature_value: this.reading.temperature >= 20 && this.reading.temperature < 24
      }
    },
     temperatureTileColor: function () {
      return {
        highTemperature_tile: this.reading.temperature >= 24,
        lowTemperature_tile: this.reading.temperature < 20,
        normalTemperature_tile: this.reading.temperature >= 20 && this.reading.temperature < 24
      }
    },
    humidityTileColor: function () {
      return {
      highTemperature_tile: this.reading.humidity >= 50,
      normalTemperature_tile: this.reading.humidity < 49
      }
    },
    humidityValueColor: function () {
      return {
        highTemperature_value: this.reading.humidity >= 50,
        normalTemperature_value: this.reading.humidity < 49
      }
    }
  },
  methods: {
  }
}
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
.wi {
  font-size: 4em;
  padding: 0.25em;
  color: #fff;
  text-shadow: 3px 3px 16px #272634;
}
.tile {
  position: relative;
  background-color: grey;
  text-align: center;
}
.tileValue {
  background: grey;
  font-size: 2em;
  color: white;
  margin-bottom: 10px;
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