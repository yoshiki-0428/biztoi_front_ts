import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { Book, DefaultApi } from "@/axios";
import store from "@/store";
import axios, { AxiosInstance } from "axios";

@Module({ dynamic: true, store: store, name: "bookModule", namespaced: true })
class BookModule extends VuexModule {
  public books: Array<Book> = [];

  @Action
  public async getBooks() {
    // TODO 共通化
    const apiAxios: AxiosInstance = axios.create({
      headers: {
        Authorization: "Bearer AAABBB.bbbbaaaa"
      }
    });
    const res = await new DefaultApi(
      undefined,
      "http://localhost:8000/api",
      apiAxios
    ).books();
    this.SET_BOOKS(res.data);
  }

  @Mutation
  private SET_BOOKS(payload: Book[]) {
    this.books = payload;
  }
}

export const bookModule = getModule(BookModule);
