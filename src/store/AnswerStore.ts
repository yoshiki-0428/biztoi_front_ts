import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { baseApi } from "@/plugins/axios";
import store from "@/store";
import { Answer, AnswerHead } from "@/axios/biztoi";
import { AxiosResponse } from "axios";
import size from "lodash/size";

@Module({
  dynamic: true,
  store: store,
  name: "answerMeModule",
  namespaced: true
})
class AnswerStore extends VuexModule {
  // state
  // ユーザが回答中の内容、質問の内容に応じて書き換わる
  public answers: Answer[] = [];
  public answerHeads: AnswerHead[] = [];
  public answerHead: AnswerHead = {
    id: "",
    bookId: "",
    userId: "",
    publishFlg: true,
    inserted: "",
    answers: [],
    modified: "",
    likeInfo: { active: false, sum: 0, id: "" }
  };

  /**
   * ユーザが回答したAnswersをサーバに登録する
   * @param params { bookId: string; questionId: string }
   */
  @Action({ rawError: true })
  public postAnswers(params: { bookId: string; questionId: string }) {
    const resStore: Answer[] = this.answers!.filter(
      (answer: Answer) => answer.questionId === params.questionId
    );
    baseApi.postAnswerMeByQuestion(
      params.bookId,
      this.answerHead.id,
      params.questionId,
      { answers: resStore }
    );
  }

  /**
   * ユーザが回答したAnswerを取得する
   * 処理: Store検索 => API検索 => 新規作成
   */
  @Action({ rawError: true })
  public async getAnswers(params: { bookId: string; questionId: string }) {
    // API検索
    const res: AxiosResponse<Answer[]> = await baseApi.getAnswerMeByQuestion(
      params.bookId,
      this.answerHead.id,
      params.questionId
    );
    if (size(res.data) > 0) {
      this.SET_ANSWERS(res.data);
      return;
    }

    // Not found Answer
    // this.SET_ANSWERS([
    //   {
    //     id: "",
    //     answer: "",
    //     answerHeadId: this.answerHead.id,
    //     inserted: "",
    //     orderId: 0,
    //     questionId: params.questionId
    //   }
    // ]);
  }

  /**
   * 回答ヘッダを送信する
   * @param params { bookId: string }
   */
  @Action
  public async postAnswerHead(params: { bookId: string }) {
    const answerHead: AnswerHead = {
      id: "",
      bookId: "",
      userId: "",
      answers: undefined,
      inserted: "",
      publishFlg: true,
      likeInfo: { active: false, sum: 0, id: "" }
    };
    const res: AxiosResponse<AnswerHead> = await baseApi.postAnswerHead(
      params.bookId,
      answerHead
    );
    this.SET_ANSWER_HEAD(res.data);
  }

  /**
   * 回答ヘッダを取得する
   * @param params { bookId: string }
   */
  @Action
  public async getAnswerHeads(params: { bookId: string }) {
    const res: AxiosResponse<AnswerHead[]> = await baseApi.getAnswerHeadMeList(
      params.bookId
    );
    this.SET_ANSWER_HEADS(res.data);
  }

  @Mutation
  private SET_ANSWERS(payload: Answer[]) {
    this.answers = payload;
  }

  @Mutation
  private SET_ANSWER_HEAD(payload: AnswerHead) {
    this.answerHead = payload;
  }

  @Mutation
  private SET_ANSWER_HEADS(payload: AnswerHead[]) {
    this.answerHeads = payload;
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
  public answerHead: AnswerHead = {
    id: "",
    bookId: "",
    userId: "",
    publishFlg: true,
    inserted: "",
    answers: [],
    modified: "",
    likeInfo: { active: false, sum: 0, id: "" }
  };

  @Action
  public async getAnswerHead(params: { bookId: string; answerHeadId: string }) {
    const res = await baseApi.getAnswerHead(params.bookId, params.answerHeadId);
    this.SET_ANSWER_HEAD(res.data);
  }

  @Action
  public async getAnswerHeads(params: { bookId: string }) {
    const res: AxiosResponse<AnswerHead[]> = await baseApi.getAnswerHeadList(
      params.bookId
    );
    this.SET_ANSWER_HEADS(res.data);
  }

  @Mutation
  private SET_ANSWER_HEAD(payload: AnswerHead) {
    this.answerHead = payload;
  }

  @Mutation
  private SET_ANSWER_HEADS(payload: AnswerHead[]) {
    this.answerHeads = payload;
  }
}

export const answerShareModule = getModule(AnswerShareStore);

export const answerMeModule = getModule(AnswerStore);
