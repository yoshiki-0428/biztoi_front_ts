import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { Book } from "@/axios";
import { baseApi } from "@/plugins/axios";
import store from "@/store";

@Module({ dynamic: true, store: store, name: "bookModule", namespaced: true })
class BookModule extends VuexModule {
  public books: Book[] = [];
  public searchBooks: Book[] = [];

  @Action
  public async getBooks() {
    const res = await baseApi.books();
    this.SET_BOOKS(res.data);
  }

  @Action
  public async getBooksForGoogleBooks(word: string) {
    const res = await baseApi.books();
    this.SET_SEARCH_BOOKS(res.data);
  }

  @Mutation
  private SET_BOOKS(payload: Book[]) {
    this.books = payload;
  }
  @Mutation
  private SET_SEARCH_BOOKS(payload: Book[]) {
    this.searchBooks = payload;
  }
}

export const bookModule = getModule(BookModule);
