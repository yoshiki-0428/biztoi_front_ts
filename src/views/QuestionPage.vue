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

  private cutDisplayName(displayName: string): string {
    const cutNum: number = 5;
    return displayName.length > cutNum
      ? `${displayName.substring(0, cutNum)} ... `
      : displayName;
  }

  private paths: IBreadcrumbs[] = [
    {
      name: "top",
      path: "/top",
      disabled: false
    },
    {
      name: this.cutDisplayName(this.bookId),
      path: `/top/book/${this.bookId}`,
      disabled: false
    },
    {
      name: this.cutDisplayName(this.answerHeadId),
      path: `/top/book/${this.bookId}/answer/${this.answerHeadId}`,
      disabled: false
    },
    {
      name: "1",
      path: `/top/book/${this.bookId}/answer/${this.answerHeadId}/step/1`,
      disabled: false
    },
    {
      name: "2",
      path: `/top/book/${this.bookId}/answer/${this.answerHeadId}/step/2`,
      disabled: false
    },
    {
      name: "3",
      path: `/top/book/${this.bookId}/answer/${this.answerHeadId}/step/3`,
      disabled: false
    }
  ];
}
</script>
