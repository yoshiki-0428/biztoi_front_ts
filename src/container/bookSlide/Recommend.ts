import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookSlide from "@/components/organisms/BookSlide.vue";

export default connect({
  stateToProps: {
    books: () => bookModule.bookRecommend
  },
  lifecycle: {
    created: () => bookModule.getBooksRecommend()
  }
})("book-slide-recommend", BookSlide);
