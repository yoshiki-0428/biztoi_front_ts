<template>
  <v-container>
    <book-detail />
    <toi-card />
    <answer-over-view-list />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";
import ToiCard from "@/container/ToiCard";
import AnswerOverViewList from "@/container/AnswerOverViewList";

@Component({
  components: {
    AnswerOverViewList,
    ToiCard,
    BookDetail
  }
})
export default class BookDetailPage extends Vue {}
</script>
