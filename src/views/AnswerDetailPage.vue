<template>
  <v-container>
    <breadcrumb :items="paths" />
    <book-detail :is-minimum="true"></book-detail>
    <answer-detail></answer-detail>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";
import AnswerDetail from "@/container/AnswerDetail";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";

@Component({
  components: {
    BookDetail,
    AnswerDetail,
    Breadcrumb
  }
})
export default class AnswerDetailPage extends Vue {
  @Prop()
  "bookId": string;
  @Prop()
  "answerHeadId": string;

  // URL ex(/top/book/bookId/answer/answerHeadId)
  private paths: IBreadcrumbs[] = [
    {
      name: "top",
      path: "/top",
      disabled: false
    },
    {
      name: this.bookId,
      path: `/top/book/${this.bookId}`,
      disabled: false
    },
    {
      name: this.answerHeadId,
      path: `/top/book/${this.bookId}/answer/${this.answerHeadId}`,
      disabled: true
    }
  ];
}
</script>
