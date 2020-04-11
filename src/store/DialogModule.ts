import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import store from "@/store";

@Module({ dynamic: true, store: store, name: "dialogModule", namespaced: true })
class DialogModule extends VuexModule {
  // state
  public isShowAnswerDialog = false;
  public isShowNeedLoginDialog = false;
  public dialogProperty: { bookId: string } = { bookId: "" };

  @Action
  public async showDialog() {
    this.SHOW_ANSWER_DIALOG();
  }
  @Action
  public async closeDialog() {
    this.CLOSE_ANSWER_DIALOG();
  }

  @Action
  public async showDialogNeedLogin() {
    this.SHOW_NEED_LOGIN_DIALOG();
  }

  @Action
  public async closeDialogNeedLogin() {
    this.CLOSE_NEED_LOGIN_DIALOG();
  }

  @Action
  public async setProperty(property: { bookId: string }) {
    this.SET_PROPERTY(property);
    this.SHOW_ANSWER_DIALOG();
  }

  @Mutation
  private SHOW_ANSWER_DIALOG() {
    this.isShowAnswerDialog = true;
  }
  @Mutation
  private CLOSE_ANSWER_DIALOG() {
    this.isShowAnswerDialog = false;
  }

  @Mutation
  private SHOW_NEED_LOGIN_DIALOG() {
    this.isShowNeedLoginDialog = true;
  }
  @Mutation
  private CLOSE_NEED_LOGIN_DIALOG() {
    this.isShowNeedLoginDialog = false;
  }

  @Mutation
  private SET_PROPERTY(property: { bookId: string }) {
    this.dialogProperty = property;
  }
}

export const dialogModule = getModule(DialogModule);
