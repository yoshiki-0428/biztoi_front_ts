import { connect } from "vuex-connect";
import AnswerInput from "@/components/organisms/AnswerInput.vue";
import { answerMeModule } from "@/store/AnswerStore";
import { questionModule } from "@/store/QuestionModule";
import UpdateRouteCheckMixin from "@/container/UpdateRouteCheckMixin";
import router from "@/router";
import { Answer, Question } from "@/axios/biztoi";

export default connect({
  stateToProps: {
    question: (): Question => questionModule.question,
    answers: (): Answer[] => answerMeModule.answers,
    questionNo: (): number => questionModule.question.orderId,
    questionMax: (): number => questionModule.questionList.length
  },
  actionsToEvents: {
    "update-before-route": async () => {
      const bookId = router.currentRoute.params.bookId;
      const questionId = router.currentRoute.params.questionId;
      const params = { bookId: bookId, questionId: questionId };
      // 初期表示時はデータを全取得
      if (questionId === "first") {
        await questionModule.getQuestionList(params);
        params.questionId = questionModule.question.id;
        await answerMeModule.getAnswerHead(params);
      }
      await questionModule.getQuestion(params);
      await answerMeModule.getAnswers(params);
    }
  }
})("answer-input", AnswerInput.mixin(UpdateRouteCheckMixin));
