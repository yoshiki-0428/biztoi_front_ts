import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { baseApi } from "@/plugins/axios";
import store from "@/store";

@Module({ dynamic: true, store: store, name: "answerModule", namespaced: true })
class AnswerModule extends VuexModule {
  // state TODO 一旦Any
  public answer: any = {};
  public answers: any[] = [];

  @Action({ rawError: true })
  public async getAnswers(bookId: string) {
    // TODO ここbookId だけで良い
    const res = await baseApi.getAnswers(bookId);
    // eslint-disable-next-line no-console
    console.log(res.data);
    this.SET_ANSWERS(res.data);
  }

  @Mutation
  private SET_ANSWERS(payload: any[]) {
    // eslint-disable-next-line no-console
    console.log("SET_ANSWERS#:", payload);
    this.answers = payload;
  }
}

export const answerModule = getModule(AnswerModule);
