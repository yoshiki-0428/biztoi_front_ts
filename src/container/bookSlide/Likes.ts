import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookSlide from "@/components/organisms/BookSlide.vue";

export default connect({
  stateToProps: {
    books: () => bookModule.bookLikes
  },
  lifecycle: {
    created: () => bookModule.getBooksLike()
  }
})("book-slide-likes", BookSlide);
