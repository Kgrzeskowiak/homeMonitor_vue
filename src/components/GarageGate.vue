<template>
  <div class="columm">
    <v-flex>
      <div class="tile" v-bind:class="gateTileColor">
        <div>
          <i v-if="garageState === 'close'" class="fa fa-lock"></i>
          <i v-if="garageState === 'open'" class="fa fa-unlock"></i>
          <p class="tileValue" v-bind:class="gateValueColor">{{stateTranslated}}</p>
          <p class="tileLocation">Brama garażowa</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "GarageGate",
  props: {
    garageState: {
      required: true
    }
  },
  mounted() {},
  data() {
    return {
    };
  },
  computed: {
    gateValueColor: function() {
      return {
        open_value: this.garageState === "open",
        close_value: this.garageState === "close"
      };
    },
    gateTileColor: function() {
      return {
        open_tile: this.garageState === "open",
        close_tile: this.garageState === "close"
      };
    },
    stateTranslated() {
        if(this.garageState === 'close') {
            return "Zamknięta"
        }
        if(this.garageState === 'open') {
            return "Otwarta"
        }
    }
  },
  methods: {}
};
</script>

<style scoped>
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
.fa-lock {
  text-shadow: 3px 3px 16px #272634;
}
.fa-unlock {
  text-shadow: 3px 3px 16px #272634;
}
.fa {
  font-size: 4em;
  margin-top: 20px;
  padding-bottom: 20px;
  color: #fff;
}
.tileValue {
  background: grey;
  font-size: 2em;
  color: white;
  margin-bottom: 10px;
}
.tileLocation {
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 9px;
  right: 15px;
}
.open_value {
  background: #ed5b5b;
}
.open_tile {
  background: #e52626;
}
.close_value {
  background: #43af51;
}
.close_tile {
  background: #267e39;
}
</style>