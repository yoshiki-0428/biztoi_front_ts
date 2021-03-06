import { connect } from "vuex-connect";
import { answerShareModule } from "@/store/AnswerStore";
import router from "@/router";
import AnswerDetail from "@/components/organisms/AnswerDetail.vue";
import { AnswerHead, Question } from "@/axios/biztoi";
import { questionModule } from "@/store/QuestionModule";
import { userModule } from "@/store/UserModule";
import { BizToiUser } from "@/axios/biztoi";

export default connect({
  stateToProps: {
    answerHead: (): AnswerHead => answerShareModule.answerHead,
    questionList: (): Question[] => questionModule.questionList,
    userInfo: (): BizToiUser => userModule.userInfo
  },
  lifecycle: {
    created: async () => {
      await questionModule.getQuestionList({
        bookId: router.currentRoute.params.bookId
      });
      await answerShareModule.getAnswerHead({
        bookId: router.currentRoute.params.bookId,
        answerHeadId: router.currentRoute.params.answerHeadId
      });
      await userModule.getUserInfo();
    }
  }
})("answer-detail", AnswerDetail);
