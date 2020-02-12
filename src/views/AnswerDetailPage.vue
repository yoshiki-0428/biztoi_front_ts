<template>
  <v-container>
    <book-detail isMinimum="true"></book-detail>
    <answer-detail></answer-detail>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";
import AnswerDetail from "@/container/AnswerDetail";

@Component({
  components: {
    BookDetail,
    AnswerDetail
  }
})
export default class AnswerDetailPage extends Vue {}
</script>
