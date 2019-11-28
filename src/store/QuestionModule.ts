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
    nextQuestionId: "",
    answerType: "",
    orderId: 1
  };
  public questionList: Question[] = [];
  public questionNo: number = 1;
  @Action
  public async getQuestionList(params: { bookId: string }) {
    const res: AxiosResponse<Question[]> = await baseApi.getBookQuestions(
      params.bookId
    );

    if (res.data) {
      this.SET_QUESTION_LIST(res.data);
      this.SET_QUESTION(res.data[0]);
    }
  }

  @Action({ rawError: true })
  public async getQuestion(params: { bookId: string; questionId: string }) {
    const resStore: Question | undefined = this.questionList.find(
      q => q.id === params.questionId
    );
    if (resStore) {
      this.SET_QUESTION(resStore);
      return;
    }

    const res: AxiosResponse<Question> = await baseApi.getBookQuestion(
      params.bookId,
      params.questionId
    );

    if (res.data) {
      this.SET_QUESTION(res.data);
      return;
    }
  }

  @Mutation
  private SET_QUESTION(payload: Question) {
    this.question = payload;
  }
  @Mutation
  private SET_QUESTION_LIST(payload: Question[]) {
    this.questionList = payload;
  }
}

export const questionModule = getModule(QuestionModule);
