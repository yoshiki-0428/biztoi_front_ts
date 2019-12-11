import { connect } from "vuex-connect";
import AnswerInput from "@/components/organisms/AnswerInput.vue";
import { answerMeModule } from "@/store/AnswerStore";
import { questionModule } from "@/store/QuestionModule";
import UpdateRouteCheckMixin from "@/container/UpdateRouteCheckMixin";
import router from "@/router";
import { Answer, Question } from "@/axios/biztoi";
import { isUndefined } from "lodash";

export default connect({
  stateToProps: {
    question: (): Question => questionModule.question,
    answers: (): Answer[] => answerMeModule.answers,
    questionNo: (): number | undefined =>
      isUndefined(questionModule.question.orderId)
        ? 0
        : questionModule.question.orderId,
    questionMax: (): number => questionModule.questionList.length
  },
  actionsToEvents: {
    "update-before-route": async () => {
      const bookId = router.currentRoute.params.bookId;
      const questionId = router.currentRoute.params.questionId;
      const params = { bookId: bookId, questionId: questionId };
      // 初期表示時はデータを全取得
      if (questionId === "first") {
        // 回答ヘッダを作成する
        await answerMeModule.postAnswerHead(params);
        // 質問一覧を取得する
        await questionModule.getQuestionList(params);
        params.questionId = questionModule.question.id;
        // 回答一覧を取得する（回答済みも含め）
        await answerMeModule.getAnswerHead(params);
      }
      await questionModule.getQuestion(params);
      await answerMeModule.getAnswers(params);
    },
    "post-answer": (_, questionId) => {
      const bookId = router.currentRoute.params.bookId;
      const params = { bookId: bookId, questionId: questionId };
      answerMeModule.postAnswers(params);
    }
  }
})("answer-input", AnswerInput.mixin(UpdateRouteCheckMixin));