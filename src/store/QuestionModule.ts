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

@Module({
  dynamic: true,
  store: store,
  name: "questionModule",
  namespaced: true
})
class QuestionModule extends VuexModule {
  // state
  public question: Question = {
    id: "",
    patternId: 0,
    orderId: 1,
    title: "",
    detail: "",
    example: "",
    required: true,
    step: "",
    answerType: ""
  };
  public questionList: Question[] = [];
  public stepNo: string = "1";
  @Action
  public async getQuestionList(params: { bookId: string }) {
    const res: AxiosResponse<Question[]> = await baseApi.getBookQuestions(
      params.bookId
    );

    if (res.data) {
      this.SET_QUESTION_LIST(res.data);
    }
  }
  @Action
  public async getQuestionListForStep(params: {
    bookId: string;
    stepNo: string;
  }) {
    const res: AxiosResponse<Question[]> = await baseApi.getBookQuestions(
      params.bookId
    );

    if (res.data) {
      this.SET_STEP_NO(params.stepNo);
      this.SET_QUESTION_LIST(res.data.filter(q => q.step === params.stepNo));
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

  @Mutation
  private SET_STEP_NO(payload: string) {
    this.stepNo = payload;
  }
}

export const questionModule = getModule(QuestionModule);
