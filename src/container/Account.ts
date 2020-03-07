import { connect } from "vuex-connect";
import Account from "@/components/organisms/Account.vue";
import { userModule } from "@/store/UserModule";
import { BizToiUser } from "@/axios/biztoi";

export default connect({
  stateToProps: {
    userInfo: (): BizToiUser => userModule.userInfo
  },
  lifecycle: {
    created: async () => await userModule.getUserInfo()
  }
})("account", Account);
