import { connect } from "vuex-connect";
import CompleteDialog from "@/components/organisms/CompleteDialog.vue";
import { dialogModule } from "@/store/DialogModule";

export default connect({
  stateToProps: {
    isShow: (): boolean => dialogModule.isShowAnswerDialog,
    property: (): { bookId: string } => dialogModule.dialogProperty
  },
  actionsToEvents: {
    "close-dialog": _ => dialogModule.closeDialog()
  }
})("complete-dialog", CompleteDialog);
