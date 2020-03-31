import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import { Book } from "@/axios/biztoi";
import { baseApi, booksApi } from "@/plugins/axios";
import { isNil, isEmpty, isUndefined } from "lodash";
import store from "@/store";
import { AxiosResponse } from "axios";
import BookUtil from "@/util/BookUtil";
import { Item, SearchInfo } from "@/axios/books";

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
  public bookLikes: Book[] = [];
  public bookFavorite: Book[] = [];
  public bookFavoriteMe: Book[] = [];
  public bookRecommend: Book[] = [];
  public bookUnfinished: Book[] = [];

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
  public async getBooksLike() {
    const res = await baseApi.bookLikesList();
    this.SET_BOOK_LIKES(res.data);
  }
  @Action
  public async getBooksFavorite() {
    const res = await baseApi.bookFavoriteList();
    this.SET_BOOK_FAVORITE(res.data);
  }

  @Action
  public async getBooksFavoriteMe() {
    const res = await baseApi.bookFavoriteListMe();
    this.SET_BOOK_FAVORITE(res.data);
  }

  @Action
  public async getBooksRecommend() {
    const res = await baseApi.bookRecommendList();
    this.SET_BOOK_RECOMMEND(res.data);
  }

  @Action
  public async getBooksUnfinished() {
    const res = await baseApi.bookUnfinishedList();
    this.SET_BOOK_UNFINISHED(res.data);
  }

  @Action({ rawError: true })
  public async getBooksForBooksApi(word: string) {
    if (isNil(word) || isEmpty(word)) {
      return;
    }

    const res: AxiosResponse<SearchInfo> = await booksApi.getBooksTotal(
      process.env.VUE_APP_RAKUTEN_APPLICATION_ID,
      "000",
      undefined,
      undefined,
      word,
      undefined,
      30,
      undefined,
      undefined
    );

    // @ts-ignore
    if (res.data.Items) {
      // @ts-ignore
      const books: Book[] = res.data.Items.filter(
        (item: any) => !isNil(item) && !isUndefined(item.Item)
      ).map((val: any): Book => BookUtil.bookConverter(val.Item as Item));
      this.SET_SEARCH_BOOKS(books);
    }
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

  @Mutation
  private SET_BOOK_LIKES(payload: Book[]) {
    this.bookLikes = payload;
  }

  @Mutation
  private SET_BOOK_FAVORITE(payload: Book[]) {
    this.bookFavorite = payload;
  }

  @Mutation
  private SET_BOOK_FAVORITE_ME(payload: Book[]) {
    this.bookFavoriteMe = payload;
  }

  @Mutation
  private SET_BOOK_RECOMMEND(payload: Book[]) {
    this.bookRecommend = payload;
  }

  @Mutation
  private SET_BOOK_UNFINISHED(payload: Book[]) {
    this.bookUnfinished = payload;
  }
}

export const bookModule = getModule(BookModule);
