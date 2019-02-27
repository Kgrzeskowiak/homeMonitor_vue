<template>
  <div>
    <div>
      <i class="fa fa-thermometer"></i>
    </div>
  <div>
  <p>40</p>
  </div>
  </div>
 
</template>

<script>
export default {
  name: "Temperature",
  props: {
    msg: "xxx"
  }
};
</script>

<style scoped>
.fa-thermometer {
  text-shadow: 3px 3px 16px #272634;
}
.fa {
  font-size: 4em;
  padding: 0.25em;
  color: #fff;
}
</style>