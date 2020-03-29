import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from "vuex-module-decorators";
import { baseApi } from "@/plugins/axios";
import store from "@/store";
import { Answer, AnswerHead, Question } from "@/axios/biztoi";
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
  public async postAnswers(params: { bookId: string; answer: Answer }) {
    const res: AxiosResponse<Answer[]> = await baseApi.postAnswerMeByQuestion(
      params.bookId,
      this.answerHead.id,
      params.answer.questionId,
      { answers: [params.answer] }
    );
    if (res.data && this.answerHead.answers) {
      const registerAnswer = res.data.find(
        a =>
          a.orderId === params.answer.orderId &&
          a.questionId === params.answer.questionId
      );
      const index = this.answerHead.answers.findIndex(
        a =>
          a.orderId === params.answer.orderId &&
          a.questionId === params.answer.questionId
      );
      this.answerHead.answers.splice(index, 1, registerAnswer!);
    }
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

  @Action
  public async getAnswerHeads(params: { bookId: string }) {
    const res: AxiosResponse<AnswerHead[]> = await baseApi.getAnswerHeadMeList(
      params.bookId
    );
    this.SET_ANSWER_HEADS(res.data);
  }

  @Action
  public async getAnswerHead(params: { bookId: string; answerHeadId: string }) {
    const res: AxiosResponse<AnswerHead[]> = await baseApi.getAnswerHeadMeList(
      params.bookId,
      params.answerHeadId
    );
    const answerHead: AnswerHead | undefined = res.data.find(
      answerHead => answerHead.id === params.answerHeadId
    );
    if (res.data && answerHead) {
      this.SET_ANSWER_HEAD(answerHead);
    }
  }

  @Action({ rawError: true })
  public async setAnswerForQuestion(params: {
    questionList: Question[];
    answerHeadId: string;
  }) {
    const initAnswers: Answer[] = params.questionList.map(
      (q): Answer => {
        return {
          id: "",
          orderId: 1,
          answer: "",
          answerHeadId: params.answerHeadId,
          questionId: q.id,
          inserted: ""
        };
      }
    );

    if (this.answerHead.answers) {
      const questionIds = this.answerHead.answers.map(a => a.questionId);
      const editInAnswers = initAnswers
        .filter(a => !questionIds.includes(a.questionId))
        .concat(this.answerHead.answers);
      this.SET_ANSWER_HEAD_ANSWERS(editInAnswers);
    } else {
      this.SET_ANSWER_HEAD_ANSWERS(initAnswers);
    }
  }

  @Action({ rawError: true })
  public async createEmptyAnswer(params: {
    questionId: string;
    answerHeadId: string;
  }) {
    if (this.answerHead.answers) {
      const max: number = Math.max.apply(
        null,
        this.answerHead.answers
          .filter(a => a.questionId === params.questionId)
          .map(a => a.orderId)
      );

      this.ADD_ANSWER_HEAD_ANSWER({
        id: "",
        orderId: max + 1,
        answer: "",
        answerHeadId: params.answerHeadId,
        questionId: params.questionId,
        inserted: ""
      });
    }
  }

  @Action({ rawError: true })
  public deleteAnswer(param: { answer: Answer }) {
    if (this.answerHead.answers) {
      const index = this.answerHead.answers.findIndex(
        v =>
          v.orderId === param.answer.orderId &&
          v.questionId === param.answer.questionId
      );
      this.answerHead.answers.splice(index, 1);
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

  @Mutation
  private SET_ANSWER_HEAD_ANSWERS(payload: Answer[]) {
    this.answerHead.answers = payload;
  }

  @Mutation
  private ADD_ANSWER_HEAD_ANSWER(payload: Answer) {
    if (this.answerHead.answers) {
      this.answerHead.answers.push(payload);
    }
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
