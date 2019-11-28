import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookDetail from "@/components/organisms/BookDetail.vue";
import router from "@/router";
import { baseApi } from "@/plugins/axios";

export default connect({
  stateToProps: {
    book: () => bookModule.book
  },
  lifecycle: {
    created: async () => {
      // 既存Storeから本を検索し、APIサーバに作成依頼を行う
      await bookModule.getBook(router.currentRoute.params.bookId);
      if (bookModule.book) {
        await baseApi.booksPost(bookModule.book);
        // await baseApi.postToi(router.currentRoute.params.bookId, toiModule.toi);
        // await baseApi.postQuestion(router.currentRoute.params.bookId, questionModule.question);
      }
    }
  }
})("book-detail", BookDetail);
