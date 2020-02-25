<template>
  <v-container>
    <breadcrumb :items="paths" />
    <book-detail :is-minimum="true"></book-detail>
    <answer-detail></answer-detail>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";
import AnswerDetail from "@/container/AnswerDetail";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";
import router from "@/router";

@Component({
  components: {
    BookDetail,
    AnswerDetail,
    Breadcrumb
  }
})
export default class AnswerDetailPage extends Vue {
  // URL ex(/top/book/bookId/answer/answerHeadId)
  private paths: IBreadcrumbs[] = [
    {
      name: "top",
      path: "/top",
      disabled: false
    },
    {
      name: router.currentRoute.params.bookId,
      path: `/top/book/${router.currentRoute.params.bookId}`,
      disabled: false
    },
    {
      name: router.currentRoute.params.answerHeadId,
      path: `/top/book/${router.currentRoute.params.bookId}
      /${router.currentRoute.params.answerHeadId}`,
      disabled: true
    }
  ];
}
</script>
