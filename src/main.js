import Vue from 'vue';
import VueRouter from 'vue-router';
import RouterPrefetch from 'vue-router-prefetch'
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';

import router from "./routes/router";
import store from "./store";
import i18n from './i18n';
import './registerServiceWorker'
import ApiService from "./api/Api";

Vue.use(DashboardPlugin);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

Vue.config.productionTip = false
ApiService.init();

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App),
  router,
  i18n
});

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <a>.';
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
}
