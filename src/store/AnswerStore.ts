import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { baseApi } from "@/plugins/axios";
import store from "@/store";
import { Answer, AnswerHead, Question } from "@/axios/biztoi";
import { AxiosResponse } from "axios";

@Module({
  dynamic: true,
  store: store,
  name: "answerMeModule",
  namespaced: true
})
class AnswerStore extends VuexModule {
  // state
  public answers: Answer[] = [];
  public answerHead: AnswerHead = {
    id: "",
    userId: "",
    publishFlg: true,
    inserted: "",
    answers: [],
    modified: "",
    toiId: "",
    category: ""
  };

  @Action({ rawError: true })
  public async getAnswers(params: { bookId: string; questionId: string }) {
    // Store検索
    const resStore: Answer[] = this.answerHead.answers!.filter(
      (answer: Answer) => answer.questionId === params.questionId
    );
    if (resStore) {
      this.SET_ANSWERS(resStore);
      return;
    }
    // API検索
    const res: AxiosResponse<Answer[]> = await baseApi.getAnswerByQuestion(
      params.bookId,
      params.questionId
    );
    if (res.data) {
      this.SET_ANSWERS(res.data);
      return;
    }
  }

  @Action
  public async getAnswerHead(params: { bookId: string }) {
    const res: AxiosResponse<AnswerHead> = await baseApi.getAnswersMe(
      params.bookId
    );
    if (res.data) {
      this.SET_ANSWER_HEAD(res.data);
    }
  }

  @Mutation
  private SET_ANSWERS(payload: Answer[]) {
    this.answers = payload;
  }

  @Mutation
  private SET_ANSWER_HEAD(payload: AnswerHead) {
    this.answerHead = payload;
  }
}

@Module({
  dynamic: true,
  store: store,
  name: "answerShareModule",
  namespaced: true
})
class AnswerShareStore extends VuexModule {
  // state
  public answerHeads: AnswerHead[] = [];
  @Action
  public async getAnswerHeads(params: { bookId: string }) {
    const res: AxiosResponse<AnswerHead[]> = await baseApi.getAnswers(
      params.bookId
    );
    this.SET_ANSWER_HEADS(res.data);
  }
  @Mutation
  private SET_ANSWER_HEADS(payload: AnswerHead[]) {
    this.answerHeads = payload;
  }
}

export const answerShareModule = getModule(AnswerShareStore);

export const answerMeModule = getModule(AnswerStore);
