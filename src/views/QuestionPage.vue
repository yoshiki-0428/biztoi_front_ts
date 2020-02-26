<template>
  <v-container>
    <breadcrumb :items="paths" />
    <answer-input />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AnswerInput from "@/container/AnswerInput";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";

@Component({
  components: {
    AnswerInput,
    Breadcrumb
  }
})
export default class QuestionPage extends Vue {
  @Prop()
  "bookId": string;
  @Prop()
  "questionId": string;
  // ToDo URL ex(/top/book/bookId/toi/questions/questionId)
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
      name: this.questionId,
      path: `/top/book/toi/questions/${this.questionId}`,
      disabled: false
    }
  ];
}
</script>
