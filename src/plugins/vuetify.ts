import Vue from "vue";
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

const opts = {};
