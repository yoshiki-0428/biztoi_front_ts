<template>
  <div>
    <book-detail></book-detail>
    <toi-card></toi-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";
import ToiCard from "@/container/ToiCard";

@Component({
  components: {
    ToiCard,
    BookDetail
  }
})
export default class BookDetailPage extends Vue {}
</script>
