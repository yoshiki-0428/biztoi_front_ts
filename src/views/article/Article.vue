<template>
  <v-container>
    <book-detail :book="book" :is-minimum="true"></book-detail>
    <answer-detail
      :answer-head="answerHead"
      :question-list="questionList"
      :user-info="userInfo"
    ></answer-detail>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookDetail from "@/components/organisms/BookDetail.vue";
import AnswerDetail from "@/components/organisms/AnswerDetail.vue";
import { BizToiUser, Book } from "@/axios/biztoi";
import books from "@/assets/json/books.json";
import answerHeads from "@/assets/json/answerHeads.json";
import questions from "@/assets/json/questions.json";
import router from "@/router";

@Component({
  components: {
    BookDetail,
    AnswerDetail
  }
})
export default class Article extends Vue {
  private book: Book = {
    authors: undefined,
    categories: undefined,
    detail: "",
    favorite: false,
    isbn: "",
    linkUrl: "",
    pictureUrl: "",
    title: ""
  };

  private answerHead: any = {
    id: "",
    inserted: "",
    likeInfo: { active: true, sum: 0, id: "" },
    publishFlg: false,
    userId: ""
  };

  private questionList: any[] = questions;

  private userInfo: BizToiUser = { email: "", id: "", nickname: "" };

  created() {
    const no: number = Number(router.currentRoute.params.no);
    this.book = books[no];
    this.answerHead = answerHeads[no];
  }
}
</script>
