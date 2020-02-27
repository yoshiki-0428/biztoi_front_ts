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
import UUID from "uuid";
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
  // ユーザが回答済み回答ヘッダ、既に回答済みの場合は回答も含まれる
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
  @Action
  public postAnswers(params: { bookId: string; questionId: string }) {
    const resStore: Answer[] = this.answers!.filter(
      (answer: Answer) => answer.questionId === params.questionId
    );
    baseApi.postAnswer(params.bookId, params.questionId, { answers: resStore });
  }

  /**
   * ユーザが回答したAnswerを取得する
   * 処理: Store検索 => API検索 => 新規作成
   */
  @Action({ rawError: true })
  public async getAnswers(params: { bookId: string; questionId: string }) {
    // Store検索
    const resStore: Answer[] = this.answerHead.answers!.filter(
      (answer: Answer) => answer.questionId === params.questionId
    );
    if (size(resStore) !== 0) {
      this.SET_ANSWERS(resStore);
      return;
    }
    // API検索
    const res: AxiosResponse<Answer[]> = await baseApi.getAnswerByQuestion(
      params.bookId,
      params.questionId
    );
    if (size(res.data) !== 0) {
      this.SET_ANSWERS(res.data);
      return;
    }

    // TODO orderId を数字に変更する
    // Not found Answer
    this.SET_ANSWERS([
      {
        id: UUID.v4(),
        answer: "",
        answerHeadId: this.answerHead.id,
        inserted: "",
        orderId: "0",
        questionId: params.questionId
      }
    ]);
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
      inserted: new Date().toDateString(),
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
  public async getAnswerHead(params: { bookId: string; answerId: string }) {
    const res = await baseApi.getAnswer(params.bookId, params.answerId);
    this.SET_ANSWER_HEAD(res.data);
  }

  @Action
  public async getAnswerHeads(params: { bookId: string }) {
    const res: AxiosResponse<AnswerHead[]> = await baseApi.getAnswers(
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
