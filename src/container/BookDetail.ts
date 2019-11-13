import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookDetail from "@/components/organisms/BookDetail.vue";
import router from "@/router";

export default connect({
  stateToProps: {
    book: () => bookModule.book
  },
  lifecycle: {
    created: () => bookModule.getBook(router.currentRoute.params.bookId)
  }
})("book-detail", BookDetail);
