<template>
  <v-container class="pa-0">
    <v-card class="mb-4">
      <v-card-title class="pa-3">みんなの回答一覧</v-card-title>
    </v-card>
    <div v-if="existAnswerHeads">
      <v-card
        v-for="(answerHead, index) in answerHeads"
        :key="index"
        class="mb-4"
      >
        <answer-over-view :answer-head="answerHead" @on-click-like="onClick" />
      </v-card>
    </div>
    <div v-else>
      <v-card>
        <v-card-title class="subtitle-1">まだ回答がありません</v-card-title>
        <v-card-text class="text-left">
          最初の回答者になってみませんか？
        </v-card-text>
        <v-card-actions>
          <v-btn
            :to="'/top/book/' + answerHead.bookId + '/toi/questions/first'"
            outlined
            block
            color="white"
          >
            回答してみる
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { AnswerHead, SendLikeInfo } from "@/axios/biztoi";
import AnswerOverView from "@/components/organisms/AnswerOverView.vue";

@Component({ components: { AnswerOverView } })
export default class AnswerOverViewList extends Vue {
  @Prop({ default: () => [] }) private answerHeads!: AnswerHead[] | undefined;
  @Emit("on-click-like")
  private onClick(sendLikeInfo: SendLikeInfo) {}
  private get existAnswerHeads(): boolean {
    return Boolean(this.answerHeads) && this.answerHeads!.length > 0;
  }
}
</script>
