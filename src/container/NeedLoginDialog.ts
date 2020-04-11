import { connect } from "vuex-connect";
import NeedLoginDialog from "@/components/organisms/NeedLoginDialog.vue";
import { dialogModule } from "@/store/DialogModule";

export default connect({
  stateToProps: {
    isShow: (): boolean => dialogModule.isShowNeedLoginDialog
  },
  actionsToEvents: {
    "close-dialog": _ => dialogModule.closeDialogNeedLogin()
  }
})("need-login-dialog", NeedLoginDialog);
