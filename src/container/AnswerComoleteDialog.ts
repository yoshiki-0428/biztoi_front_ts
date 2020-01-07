import { connect } from "vuex-connect";
import AnswerCompleteDialog from "@/components/organisms/AnswerCompleteDialog.vue";
import { dialogModule } from "@/store/DialogModule";

export default connect({
  stateToProps: {
    isShow: (): boolean => dialogModule.isShowAnswerDialog,
    property: (): { bookId: string } => dialogModule.dialogProperty
  }
})("answer-complete-dialog", AnswerCompleteDialog);
