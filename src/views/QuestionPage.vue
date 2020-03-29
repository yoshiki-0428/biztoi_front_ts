<template>
  <v-container>
    <breadcrumb :items="paths" />
    <answer-for-step />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AnswerForStep from "@/container/AnswerForStep";
import Breadcrumb, {
  IBreadcrumbs
} from "@/components/organisms/Breadcrumb.vue";

@Component({
  components: {
    AnswerForStep,
    Breadcrumb
  }
})
export default class QuestionPage extends Vue {
  @Prop() "bookId": string;
  @Prop() "answerHeadId": string;
  @Prop() "stepNo": string;

  private paths: IBreadcrumbs[] = [
    {
      name: "top",
      path: "/top",
      disabled: false
    },
    {
      name: "本詳細",
      path: `/top/book/${this.bookId}`,
      disabled: false
    },
    {
      name: "回答詳細",
      path: `/top/book/${this.bookId}/answer/${this.answerHeadId}`,
      disabled: false
    },
    {
      name: "Step1",
      path: `/top/book/${this.bookId}/answer/${this.answerHeadId}/step/1`,
      disabled: false
    },
    {
      name: "Step2",
      path: `/top/book/${this.bookId}/answer/${this.answerHeadId}/step/2`,
      disabled: false
    },
    {
      name: "Step3",
      path: `/top/book/${this.bookId}/answer/${this.answerHeadId}/step/3`,
      disabled: false
    }
  ];
}
</script>
