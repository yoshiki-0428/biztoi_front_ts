import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { vuetify } from "./plugins/vuetify";
import VueAnalytics from "vue-analytics";
import "./plugins/axios";

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: "UA-162848676-1",
  router
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
