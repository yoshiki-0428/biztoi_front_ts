import { connect } from "vuex-connect";
// @ts-ignore
import AnswerForStep from "@/components/organisms/AnswerForStep.vue";
import { answerMeModule } from "@/store/AnswerStore";
import { questionModule } from "@/store/QuestionModule";
import UpdateRouteCheckMixin from "@/container/UpdateRouteCheckMixin";
import router from "@/router";
import { Answer, AnswerHead, Question } from "@/axios/biztoi";
import { dialogModule } from "@/store/DialogModule";

export default connect({
  stateToProps: {
    questionList: (): Question[] => questionModule.questionList,
    answerHead: (): AnswerHead => answerMeModule.answerHead,
    stepNo: (): string => questionModule.stepNo
  },
  actionsToEvents: {
    "update-before-route": async () => {
      const bookId = router.currentRoute.params.bookId;
      const answerHeadId = router.currentRoute.params.answerHeadId;
      const stepNo = router.currentRoute.params.stepNo;
      const params = {
        bookId: bookId,
        answerHeadId: answerHeadId,
        stepNo: stepNo
      };

      // 質問一覧を取得
      await questionModule.getQuestionListForStep(params);
      // 自分回答データを取得
      await answerMeModule.getAnswerHead(params);
      // 質問リストに紐づく回答情報をセット
      await answerMeModule.setAnswerForQuestion({
        questionList: questionModule.questionList,
        answerHeadId: answerHeadId
      });
    },
    "create-empty-answer": async (
      _,
      params: {
        questionId: string;
        answerHeadId: string;
      }
    ) => {
      answerMeModule.createEmptyAnswer(params);
    },
    "delete-answer": async (_, answer: Answer) => {
      const bookId = router.currentRoute.params.bookId;
      const params = {
        bookId: bookId,
        answer: answer
      };
      await answerMeModule.deleteAnswer(params);
    },
    "post-answer": async (_, answer: Answer) => {
      const bookId = router.currentRoute.params.bookId;
      const params = { bookId: bookId, answer: answer };
      await answerMeModule.postAnswers(params);
    },
    "finish-answer": async _ => {
      const bookId = router.currentRoute.params.bookId;
      await dialogModule.setProperty({ bookId: bookId });
      await router.push("/top");
    }
  }
})("answer-for-step", AnswerForStep.mixin(UpdateRouteCheckMixin));
