<template>
  <v-container>
    <breadcrumb :items="paths" />
    <answer-input />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnswerInput from "@/container/AnswerInput";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";
import router from "@/router";

@Component({
  components: {
    AnswerInput,
    Breadcrumb
  }
})
export default class QuestionPage extends Vue {
  // ToDo URL ex(/top/book/bookId/toi/questions/questionId)
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
      name: router.currentRoute.params.questionId,
      path: `/top/book/toi/questions/${router.currentRoute.params.questionId}`,
      disabled: false
    }
  ];
}
</script>
