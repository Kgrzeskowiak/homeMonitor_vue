
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io';
import 'vuetify/dist/vuetify.min.css'
import './weather-icons.css'
Vue.config.productionTip = false
Vue.use(require('vue-moment'))
Vue.use(Vuetify, new VueSocketIO({
  debug: true,
  connection: 'http://192.168.1.9:5000',
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
})
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
