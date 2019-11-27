import { connect } from "vuex-connect";
import AnswerInput from "@/components/organisms/AnswerInput.vue";
import { answerModule } from "@/store/AnswerModule";
import { questionModule } from "@/store/QuestionModule";
import UpdateRouteCheckMixin from "@/container/UpdateRouteCheckMixin";
import router from "@/router";

export default connect({
  stateToProps: {
    question: () => questionModule.question,
    answer: () => answerModule.answer
  },
  actionsToEvents: {
    "update-before-route": () => {
      // TODO 質問リストを取得
      // TODO ユーザの該当するTOIのAnswerHeadを取得( API側も工夫の必要あり)
      // TODO 質問IDに紐づく回答があれば取得
      const bookId = router.currentRoute.params.bookId;
      const questionId = router.currentRoute.params.questionId;
      questionModule.getQuestion({ bookId: bookId, questionId: questionId });
    }
  }
})("answer-input", AnswerInput.mixin(UpdateRouteCheckMixin));
