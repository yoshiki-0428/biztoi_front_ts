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
  // state
  public book: Book = {
    id: 0,
    isbn: "",
    detail: "",
    pictureUrl: "",
    linkUrl: "",
    title: ""
  };
  public books: Book[] = [];
  public searchBooks: Book[] = [];

  @Action
  public async getBook(id: number) {
    // 以前検索したStoreから検索、なければAPIを投げる TODO
    const book: Book | undefined = this.books.find(book => book.id === id);
    // eslint-disable-next-line no-console
    console.log(book);
    if (book) {
      this.SET_BOOK(book);
    }
  }

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
  private SET_BOOK(payload: Book) {
    this.book = payload;
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
