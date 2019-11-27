import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { Question } from "@/axios/biztoi";
import { baseApi } from "@/plugins/axios";
import store from "@/store";
import { AxiosResponse } from "axios";

@Module({ dynamic: true, store: store, name: "toiModule", namespaced: true })
class QuestionModule extends VuexModule {
  // state
  public question: Question = {
    id: "",
    toiId: "",
    title: "",
    required: true,
    answerType: ""
  };

  @Action
  public async getQuestion(params: { bookId: string; questionId: string }) {
    const res: AxiosResponse<Question> = await baseApi.getBookQuestion(
      params.bookId,
      params.questionId
    );

    // eslint-disable-next-line no-console
    console.log(res);

    if (res.data) {
      this.SET_QUESTION(res.data);
    }
  }

  @Mutation
  private SET_QUESTION(payload: Question) {
    this.question = payload;
  }
}

export const questionModule = getModule(QuestionModule);
