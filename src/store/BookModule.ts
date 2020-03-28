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
import { AxiosResponse } from "axios";
import BookUtil, { IVolume, IVolumes } from "@/util/BookUtil";

@Module({ dynamic: true, store: store, name: "bookModule", namespaced: true })
class BookModule extends VuexModule {
  // state
  public book: Book = {
    isbn: "",
    detail: "",
    pictureUrl: "",
    linkUrl: "",
    title: "",
    authors: [],
    categories: [],
    favorite: false
  };
  public books: Book[] = [];
  public searchBooks: Book[] = [];

  @Action
  public async getBook(isbn: string) {
    // 以前検索したStoreから検索, API検索
    const book1: Book | undefined = this.books.find(book => book.isbn === isbn);
    if (book1) {
      this.SET_BOOK(book1);
      return;
    }
    const book2: Book | undefined = this.searchBooks.find(
      searchBook => searchBook.isbn === isbn
    );
    if (book2) {
      this.SET_BOOK(book2);
      return;
    }
    const res: AxiosResponse<Book> = await baseApi.getBookId(isbn);
    if (res.data) {
      this.SET_BOOK(res.data);
      return;
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
    // ToDo isbnでフィルター or 検索Apiを変更する
    // .filter(
    //   book => book.isbn.length === 13
    //   {
    //   // eslint-disable-next-line no-console
    //   console.log(book);
    //   return true;
    // }
    // );

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
