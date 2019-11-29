import { connect } from "vuex-connect";
import ToiCard from "@/components/organisms/ToiCard.vue";
import router from "@/router";
import { toiModule } from "@/store/ToiModule";
import { Toi } from "@/axios/biztoi";

export default connect({
  stateToProps: {
    toi: (): Toi => toiModule.toi
  },
  lifecycle: {
    created: async () =>
      await toiModule.getToi(router.currentRoute.params.bookId)
  }
})("toi-card", ToiCard);
