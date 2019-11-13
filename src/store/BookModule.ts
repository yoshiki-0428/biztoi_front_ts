import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { Book } from "@/axios/biztoi";
import { baseApi, booksApi } from "@/plugins/axios";
import { isNil } from "lodash";
import store from "@/store";
import { AxiosPromise, AxiosResponse } from "axios";
import BookUtil, { IVolume, IVolumes } from "@/util/BookUtil";

@Module({ dynamic: true, store: store, name: "bookModule", namespaced: true })
class BookModule extends VuexModule {
  // state
  public book: Book = {
    id: "",
    isbn: "",
    detail: "",
    pictureUrl: "",
    linkUrl: "",
    title: ""
  };
  public books: Book[] = [];
  public searchBooks: Book[] = [];

  @Action
  public async getBook(id: string) {
    // 以前検索したStoreから検索、なければAPIを投げる TODO
    const book1: Book | undefined = this.books.find(book => book.id === id);
    if (book1) {
      this.SET_BOOK(book1);
    }
    const book2: Book | undefined = this.searchBooks.find(
      searchBook => searchBook.id === id
    );
    if (book2) {
      this.SET_BOOK(book2);
    }
  }

  @Action
  public async getBooks() {
    const res = await baseApi.books();
    this.SET_BOOKS(res.data);
  }

  @Action
  public async getBooksForGoogleBooks(word: string) {
    if (isNil(word)) {
      return;
    }

    const res: AxiosResponse<void> = await booksApi.booksVolumesList(
      undefined,
      undefined,
      undefined,
      undefined,
      "40",
      "relevance",
      undefined,
      undefined,
      "full",
      word
    );
    const results: IVolumes = Object.assign(
      { kind: "", totalItems: "", items: [] },
      res.data
    );
    const books: Book[] = results.items
      .filter(item => !isNil(item))
      .map((val): Book => BookUtil.bookConverter(val as IVolume));

    this.SET_SEARCH_BOOKS(books);
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
