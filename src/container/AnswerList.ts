import { connect } from "vuex-connect";
import { answerShareModule } from "@/store/AnswerStore";
import AnswerList from "@/components/organisms/AnswerList.vue";
import router from "@/router";

export default connect({
  stateToProps: {
    answerHeads: () => answerShareModule.answerHeads
  },
  lifecycle: {
    created: () =>
      answerShareModule.getAnswerHeads({
        bookId: router.currentRoute.params.bookId
      })
  }
})("answer-list", AnswerList);
