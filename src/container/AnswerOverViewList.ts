import { connect } from "vuex-connect";
import { answerMeModule, answerShareModule } from "@/store/AnswerStore";
import AnswerOverViewList from "@/components/organisms/AnswerOverViewList.vue";
import router from "@/router";
import { baseApi } from "@/plugins/axios";
import { SendLikeInfo } from "@/axios/biztoi";

export default connect({
  stateToProps: {
    answerHeads: () => answerShareModule.answerHeads,
    bookId: () => router.currentRoute.params.bookId
  },
  actionsToEvents: {
    "on-click-like": (_, sendLikeInfo: SendLikeInfo) => {
      if (sendLikeInfo.active) {
        baseApi.likesAnswers(sendLikeInfo);
      } else {
        baseApi.deleteLikesAnswers(sendLikeInfo);
      }
    },
    "create-answer-head": async _ => {
      const id = router.currentRoute.params.bookId;
      await answerMeModule.postAnswerHead({ bookId: id });
      await router.push(
        `/top/book/${id}/answer/${answerMeModule.answerHead.id}/step/1`
      );
    }
  },
  lifecycle: {
    created: () =>
      answerShareModule.getAnswerHeads({
        bookId: router.currentRoute.params.bookId
      })
  }
})("answer-over-view-list", AnswerOverViewList);
