import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { BizToiUser } from "@/axios/biztoi";
import { baseApi } from "@/plugins/axios";
import store from "@/store";
import { AxiosResponse } from "axios";

@Module({ dynamic: true, store: store, name: "userModule", namespaced: true })
class UserModule extends VuexModule {
  // state
  public userInfo: BizToiUser = {
    id: "",
    email: "",
    pictureUrl: "",
    nickname: "",
    country: "ja"
  };

  @Action
  public async getUserInfo() {
    const res: AxiosResponse<BizToiUser> = await baseApi.userInfo("");

    if (res.data) {
      this.SET_USER_INFO(res.data);
      return;
    }
  }

  @Mutation
  private SET_USER_INFO(payload: BizToiUser) {
    this.userInfo = payload;
  }
}

export const userModule = getModule(UserModule);
