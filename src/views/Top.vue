<template>
  <div>
    <book-slide title="人気ランキング" />
    <book-slide title="いいねランキング" />
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
export default class Top extends Vue {}
</script>
