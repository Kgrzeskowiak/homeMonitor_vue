<template>
    <v-toolbar flat app>
        <v-toolbar-title class="grey--text">
      HomeMonitor
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat left to="/" class="">Tablica</v-btn>
        <v-btn flat left to="/SensorList">Lista czujników</v-btn>
        <v-btn flat left to="/Charts">Wykresy</v-btn>
        <v-btn flat left to="/ConfigAlarm">Konfiguracja alarmu</v-btn>
      </v-toolbar-items>
      
      </v-toolbar>
</template>
<script>
export default {
    name : 'Navbar'
}
</script>
