import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookDetail from "@/components/organisms/BookDetail.vue";
import router from "@/router";
import { baseApi } from "@/plugins/axios";
import { SendLikeInfo } from "@/axios/biztoi";

export default connect({
  stateToProps: {
    book: () => bookModule.book
  },
  actionsToEvents: {
    "on-click-favorite": (_, sendLikeInfo: SendLikeInfo) => {
      if (sendLikeInfo.active) {
        baseApi.favoriteBooks(sendLikeInfo);
      } else {
        baseApi.deleteFavoriteBooks(sendLikeInfo);
      }
    }
  },
  lifecycle: {
    created: async () => {
      await bookModule.getBook(router.currentRoute.params.bookId);
    }
  }
})("book-detail", BookDetail);
