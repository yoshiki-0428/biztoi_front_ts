import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Vuetify, { VCard } from "vuetify/lib";

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(Vuetify, {
  components: {
    VCard
  },
  iconfont: "md"
});
