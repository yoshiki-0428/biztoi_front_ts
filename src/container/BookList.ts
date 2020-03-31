import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookList from "@/components/organisms/BookList.vue";

export default connect({
  stateToProps: {
    books: () => bookModule.bookFavoriteMe
  },
  lifecycle: {
    created: () => bookModule.getBooksFavoriteMe()
  }
})("book-list", BookList);
