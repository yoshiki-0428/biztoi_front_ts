import { connect } from "vuex-connect";
import { answerShareModule } from "@/store/AnswerStore";
import router from "@/router";
import AnswerDetail from "@/components/organisms/AnswerDetail.vue";
import { AnswerHead, Question } from "@/axios/biztoi";
import { questionModule } from "@/store/QuestionModule";

export default connect({
  stateToProps: {
    answerHead: (): AnswerHead => answerShareModule.answerHead,
    questionList: (): Question[] => questionModule.questionList
  },
  lifecycle: {
    created: async () => {
      await questionModule.getQuestionList({
        bookId: router.currentRoute.params.bookId
      });
      await answerShareModule.getAnswerHead({
        bookId: router.currentRoute.params.bookId,
        answerId: router.currentRoute.params.answerHeadId
      });
    }
  }
})("answer-detail", AnswerDetail);
