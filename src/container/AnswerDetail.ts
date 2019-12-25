import { connect } from "vuex-connect";
import { answerShareModule } from "@/store/AnswerStore";
import router from "@/router";
import AnswerDetail from "@/components/organisms/AnswerDetail.vue";
import { AnswerHead } from "@/axios/biztoi";

export default connect({
  stateToProps: {
    answerHead: (): AnswerHead => answerShareModule.answerHead
  },
  lifecycle: {
    created: async () =>
      answerShareModule.getAnswerHead({
        bookId: router.currentRoute.params.bookId,
        answerId: router.currentRoute.params.answerHeadId
      })
  }
})("answer-detail", AnswerDetail);
