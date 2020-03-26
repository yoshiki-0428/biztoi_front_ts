import { connect } from "vuex-connect";
import { answerShareModule } from "@/store/AnswerStore";
import AnswerOverViewList from "@/components/organisms/AnswerOverViewList.vue";
import router from "@/router";
import { baseApi } from "@/plugins/axios";
import { SendLikeInfo } from "@/axios/biztoi";

export default connect({
  stateToProps: {
    answerHeads: () => answerShareModule.answerHeads
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
      answerShareModule.getAnswerHeads({
        bookId: router.currentRoute.params.bookId
      })
  }
})("answer-over-view-list", AnswerOverViewList);
