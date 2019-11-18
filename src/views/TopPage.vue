<template>
  <div>
    <book-slide title="人気ランキング" />
    <book-slide title="いいねランキング" />
    <book-slide title="あなたへのおすすめ" />
    <book-slide title="回答途中の本" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookSlide from "@/container/BookSlide";

@Component({
  components: {
    BookSlide
  }
})
export default class TopPage extends Vue {}
</script>
