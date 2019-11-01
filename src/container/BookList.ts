import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookList from "@/components/organisms/BookList.vue";

export default connect({
  stateToProps: {
    books: () => bookModule.books
  },
  lifecycle: {
    created: () => bookModule.getBooks()
  }
})("book-list", BookList);
