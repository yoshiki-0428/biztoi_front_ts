import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookSlide from "@/components/organisms/BookSlide.vue";

export default connect({
  stateToProps: {
    books: () => bookModule.bookFavorite
  },
  lifecycle: {
    created: () => bookModule.getBooksFavorite()
  }
})("book-slide-favorite", BookSlide);
