import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { Toi } from "@/axios/biztoi";
import { baseApi } from "@/plugins/axios";
import store from "@/store";
import { AxiosResponse } from "axios";

@Module({ dynamic: true, store: store, name: "toiModule", namespaced: true })
class ToiModule extends VuexModule {
  // state
  public toi: Toi = {
    id: "",
    userId: "",
    bookId: "",
    title: "",
    detail: "",
    publishFlg: true,
    inserted: "",
    modified: ""
  };

  @Action
  public async getToi(bookId: string) {
    const res: AxiosResponse<Toi> = await baseApi.getBookToi(bookId);
    if (res.data) {
      this.SET_TOI(res.data);
      return;
    }
  }

  @Mutation
  private SET_TOI(payload: Toi) {
    // eslint-disable-next-line no-console
    console.log("SET_TOI# Toi:", payload);
    this.toi = payload;
  }
}

export const toiModule = getModule(ToiModule);
