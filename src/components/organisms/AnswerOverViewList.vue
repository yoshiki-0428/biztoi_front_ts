<template>
  <div>
    <v-card-title>みんなの回答一覧</v-card-title>
    <v-card
      v-for="(answerHead, index) in answerHeads"
      :key="index"
      class="mb-4"
    >
      <answer-over-view
        :answer-head="answerHead"
        :book-id="bookId"
        :is-active="answerHead.likeInfo.active"
        @on-click-like="onClick"
      />
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { AnswerHead } from "@/axios/biztoi";
import AnswerOverView from "@/components/organisms/AnswerOverView.vue";

@Component({ components: { AnswerOverView } })
export default class AnswerOverViewList extends Vue {
  @Prop({ default: () => [] }) private answerHeads: AnswerHead[] | undefined;
  @Prop() private bookId!: string;
  @Emit("on-click-like")
  private onClick(like: { isLike: boolean; id: string }) {}
}
</script>
