import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios"

Vue.config.productionTip = false;

Vue.prototype.$http = Axios.create({baseURL: process.env.VUE_APP_API_PATH})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
