<template>
  <v-container>
    <book-slide-ranking title="人気ランキング" />
    <book-slide-likes title="いいねランキング" />
    <book-slide-favorite title="お気に入り数ランキング" />
    <book-slide-recommend title="あなたへのおすすめ" />
    <book-slide-unfinished title="回答途中の本" />
    <contact-form />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookSlideRanking from "@/container/bookSlide/Ranking";
import BookSlideRecommend from "@/container/bookSlide/Recommend";
import BookSlideFavorite from "@/container/bookSlide/Favorite";
import BookSlideFavoriteMe from "@/container/bookSlide/FavoriteMe";
import BookSlideLikes from "@/container/bookSlide/Likes";
import BookSlideUnfinished from "@/container/bookSlide/Unfinished";
import ContactForm from "@/components/organisms/ContactForm.vue";

@Component({
  components: {
    BookSlideRanking,
    BookSlideRecommend,
    BookSlideFavorite,
    BookSlideFavoriteMe,
    BookSlideLikes,
    BookSlideUnfinished,
    ContactForm
  }
})
export default class TopPage extends Vue {}
</script>
