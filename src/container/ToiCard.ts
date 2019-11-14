import { connect } from "vuex-connect";
import ToiCard from "@/components/organisms/ToiCard.vue";
import router from "@/router";
import { toiModule } from "@/store/ToiModule";

export default connect({
  stateToProps: {
    toi: () => toiModule.toi
  },
  lifecycle: {
    created: () => toiModule.getToi(router.currentRoute.params.bookId)
  }
})("toi-card", ToiCard);
