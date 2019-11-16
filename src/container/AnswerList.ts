import { connect } from "vuex-connect";
import { answerModule } from "@/store/AnswerModule";
import AnswerList from "@/components/organisms/AnswerList.vue";
import router from "@/router";

export default connect({
  stateToProps: {
    answers: () => answerModule.answers
  },
  lifecycle: {
    created: () => answerModule.getAnswers(router.currentRoute.params.bookId)
  }
})("answer-list", AnswerList);
