import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
// @ts-ignore
import { VuetifyPreset } from "vuetify/types/presets";

Vue.use(Vuetify);

const opts: VuetifyPreset = {
  theme: {
    dark: true
  },
  icons: {
    iconfont: "mdi" || "md" || "fa"
  }
};

export const vuetify = new Vuetify(opts);
