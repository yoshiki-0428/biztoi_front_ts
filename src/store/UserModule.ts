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
    // TODO API定義変更する code https://stoplight.io/p/studio/gh/yoshiki-0428/biztoi_openapi
    const res: AxiosResponse<BizToiUser> = await baseApi.userInfo("");
    this.SET_USER_INFO({
      id: "4bd0d7cc-df1d-4cb6-b804-793f6b506273",
      email: "biztoi@biztoi.com",
      pictureUrl: "https://picsum.photos/100/100",
      nickname: "biz",
      country: "ja"
    });

    if (res.data) {
      // this.SET_USER_INFO(res.data);
      return;
    }
  }

  @Mutation
  private SET_USER_INFO(payload: BizToiUser) {
    this.userInfo = payload;
  }
}

export const userModule = getModule(UserModule);
