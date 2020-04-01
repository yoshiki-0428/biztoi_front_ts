<template>
  <v-container>
    <breadcrumb :items="paths" />
    <book-detail />
    <toi-card />
    <answer-over-view-list-me title="あなたの回答" :is-newer="false" />
    <answer-over-view-list title="みんなの回答一覧" :is-newer="true" />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";
import ToiCard from "@/container/ToiCard";
import AnswerOverViewList from "@/container/AnswerOverViewList";
import AnswerOverViewListMe from "@/container/AnswerOverViewListMe";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";

@Component({
  components: {
    AnswerOverViewList,
    AnswerOverViewListMe,
    ToiCard,
    BookDetail,
    Breadcrumb
  }
})
export default class BookDetailPage extends Vue {
  @Prop() private "bookId": string;

  private paths: IBreadcrumbs[] = [
    {
      name: "top",
      path: "/top",
      disabled: false
    },
    {
      name: "本詳細",
      path: `/top/book/${this.bookId}`,
      disabled: true
    }
  ];
}
</script>
