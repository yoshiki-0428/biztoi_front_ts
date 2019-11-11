import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookDetail from "@/components/organisms/BookDetail.vue";

export default connect({
  stateToProps: {
    book: () => bookModule.book
  },
  lifecycle: {
    // TODO $route.paramの取得の仕方
    created: () => bookModule.getBook(1)
  }
})("book-detail", BookDetail);
