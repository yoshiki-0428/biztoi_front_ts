import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Vuetify, {
  VCard,
  VCardText,
  VCardTitle,
  VContainer,
  VLayout,
  VFlex,
  VImg,
  VBtn
} from "vuetify/lib";

import store from "./store";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  components: {
    VCard,
    VContainer,
    VLayout,
    VFlex,
    VImg,
    VCardText,
    VCardTitle,
    VBtn
  },
  iconfont: "md"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
