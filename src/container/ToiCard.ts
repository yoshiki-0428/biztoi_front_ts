import { connect } from "vuex-connect";
import ToiCard from "@/components/organisms/ToiCard.vue";
import router from "@/router";
import { toiModule } from "@/store/ToiModule";
import { Toi } from "@/axios/biztoi";
import { answerMeModule } from "@/store/AnswerStore";

export default connect({
  stateToProps: {
    toi: (): Toi => toiModule.toi,
    bookId: (): string => router.currentRoute.params.bookId
  },
  actionsToEvents: {
    "create-answer-head": async _ => {
      const id = router.currentRoute.params.bookId;
      await answerMeModule.postAnswerHead({ bookId: id });
      await router.push(
        `/top/book/${id}/answer/${answerMeModule.answerHead.id}/step/1`
      );
    }
  },
  lifecycle: {
    created: async () =>
      await toiModule.getToi(router.currentRoute.params.bookId)
  }
})("toi-card", ToiCard);
