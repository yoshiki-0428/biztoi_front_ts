import { connect } from "vuex-connect";
import { bookModule } from "@/store/BookModule";
import BookSlide from "@/components/organisms/BookSlide.vue";

export default connect({
  stateToProps: {
    books: () => bookModule.bookFavoriteMe
  },
  lifecycle: {
    created: () => bookModule.getBooksFavoriteMe()
  }
})("book-slide-favorite-me", BookSlide);
