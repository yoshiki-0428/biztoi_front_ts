<template>
  <div>
    <book-detail></book-detail>
    <toi-card></toi-card>
    <answer-list></answer-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";
import ToiCard from "@/container/ToiCard";
import AnswerList from "@/container/AnswerList";

@Component({
  components: {
    AnswerList,
    ToiCard,
    BookDetail
  }
})
export default class BookDetailPage extends Vue {}
</script>
