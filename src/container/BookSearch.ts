import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookSearch from "@/components/organisms/BookSearch.vue";

export default connect({
  stateToProps: {
    books: () => bookModule.searchBooks
  },
  actionsToEvents: {
    "search-word": (dispatch, word) => bookModule.getBooksForGoogleBooks(word)
  }
})("book-search", BookSearch);
