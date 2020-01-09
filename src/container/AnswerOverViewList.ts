import { connect } from "vuex-connect";
import { answerShareModule } from "@/store/AnswerStore";
import AnswerOverViewList from "@/components/organisms/AnswerOverViewList.vue";
import router from "@/router";

export default connect({
  stateToProps: {
    answerHeads: () => answerShareModule.answerHeads,
    bookId: router.currentRoute.params.bookId
  },
  actionsToEvents: {
    "on-click-like": (_, like: { isLike: boolean; id: string }) => {}
  },
  lifecycle: {
    created: () =>
      answerShareModule.getAnswerHeads({
        bookId: router.currentRoute.params.bookId
      })
  }
})("answer-over-view-list", AnswerOverViewList);
