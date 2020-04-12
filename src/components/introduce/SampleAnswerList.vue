<template>
  <div>
    <v-card-title class="black--text display-1 justify-center">
      回答一覧
    </v-card-title>
    <v-card dark class="ma-3" v-for="(book, index) in books" :key="index">
      <answer-over-view
        :no="index"
        :is-sample="true"
        :is-detail="false"
        :book-id="book.isbn"
        :answer-head="answerHeads[index]"
      ></answer-over-view>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnswerOverView from "@/components/organisms/AnswerOverView.vue";
import { AnswerHead, Book } from "@/axios/biztoi";
import answerHeads from "@/assets/json/answerHeads.json";
import books from "@/assets/json/books.json";

@Component({
  components: { AnswerOverView }
})
export default class SampleAnswerList extends Vue {
  private books: Book[] = books;
  private answerHeads: AnswerHead[] = answerHeads;
}
</script>
