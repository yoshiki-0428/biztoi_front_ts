<template>
  <v-container>
    <breadcrumb :items="paths" />
    <book-detail />
    <toi-card />
    <answer-over-view-list />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BookDetail from "@/container/BookDetail";
import ToiCard from "@/container/ToiCard";
import AnswerOverViewList from "@/container/AnswerOverViewList";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";
import router from "@/router";

@Component({
  components: {
    AnswerOverViewList,
    ToiCard,
    BookDetail,
    Breadcrumb
  }
})
export default class BookDetailPage extends Vue {
  // ToDo URL ex(/top/book/bookId)
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
    }
  ];
}
</script>
