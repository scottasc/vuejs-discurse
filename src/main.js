import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import VeeValidate from 'vee-validate';

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

