<template>
  <div>
    <book-detail></book-detail>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";

@Component({
  components: {
    BookDetail
  }
})
export default class BookDetailPage extends Vue {}
</script>
