import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookSearch from "@/components/organisms/BookSearch.vue";
import { SendLikeInfo } from "@/axios/biztoi";
import { baseApi } from "@/plugins/axios";

export default connect({
  stateToProps: {
    books: () => bookModule.searchBooks
  },
  actionsToEvents: {
    "search-word": (dispatch, word) => bookModule.getBooksForBooksApi(word),
    "on-click-favorite": (_, sendLikeInfo: SendLikeInfo) => {
      if (sendLikeInfo.active) {
        baseApi.favoriteBooks(sendLikeInfo);
      } else {
        baseApi.deleteFavoriteBooks(sendLikeInfo);
      }
    }
  }
})("book-search", BookSearch);
