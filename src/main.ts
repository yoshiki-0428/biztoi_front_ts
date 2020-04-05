import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { vuetify } from "./plugins/vuetify";
import VueAnalytics from "vue-analytics";
// @ts-ignore
import Hotjar from "vue-hotjar";
import "./plugins/axios";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA_ID,
  router
});

Vue.use(Hotjar, {
  id: process.env.VUE_APP_HOTJAR_ID,
  isProduction: true
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
