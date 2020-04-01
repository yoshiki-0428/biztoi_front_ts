import { connect } from "vuex-connect";
import { answerMeModule } from "@/store/AnswerStore";
// @ts-ignore
import AnswerOverViewList from "@/components/organisms/AnswerOverViewList.vue";
import router from "@/router";
import { baseApi } from "@/plugins/axios";
import { SendLikeInfo } from "@/axios/biztoi";

export default connect({
  stateToProps: {
    answerHeads: () => answerMeModule.answerHeads,
    bookId: () => router.currentRoute.params.bookId
  },
  actionsToEvents: {
    "on-click-like": (_, sendLikeInfo: SendLikeInfo) => {
      if (sendLikeInfo.active) {
        baseApi.likesAnswers(sendLikeInfo);
      } else {
        baseApi.deleteLikesAnswers(sendLikeInfo);
      }
    }
  },
  lifecycle: {
    created: () =>
      answerMeModule.getAnswerHeads({
        bookId: router.currentRoute.params.bookId
      })
  }
})("answer-over-view-list-me", AnswerOverViewList);
