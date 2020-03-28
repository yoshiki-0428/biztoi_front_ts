import { connect } from "vuex-connect";
// @ts-ignore
import AnswerForStep from "@/components/organisms/AnswerForStep.vue";
import { answerMeModule } from "@/store/AnswerStore";
import { questionModule } from "@/store/QuestionModule";
import UpdateRouteCheckMixin from "@/container/UpdateRouteCheckMixin";
import router from "@/router";
import { Answer, Question } from "@/axios/biztoi";
import { isUndefined } from "lodash";

export default connect({
  stateToProps: {
    questionList: (): Question[] => questionModule.questionList,
    answerList: (): Answer[] =>
      isUndefined(answerMeModule.answerHead.answers)
        ? []
        : answerMeModule.answerHead.answers,
    stepNo: (): string => router.currentRoute.params.stepNo
  },
  actionsToEvents: {
    "update-before-route": async () => {
      const bookId = router.currentRoute.params.bookId;
      const answerHeadId = router.currentRoute.params.answerHeadId;
      const params = { bookId: bookId, answerHeadId: answerHeadId };

      // 質問一覧を取得する
      await questionModule.getQuestionList(params);
      await answerMeModule.getAnswerHead(params);
    },
    "post-answer": async (_, question: Question) => {
      const bookId = router.currentRoute.params.bookId;
      const params = { bookId: bookId, questionId: question.id };
      await answerMeModule.postAnswers(params);
    }
  }
})("answer-for-step", AnswerForStep.mixin(UpdateRouteCheckMixin));
