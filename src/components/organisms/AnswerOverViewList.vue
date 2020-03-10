<template>
  <v-card>
    <v-card-title>みんなの回答一覧</v-card-title>
    <div v-if="existAnswerHeads()">
      <v-card
        v-for="(answerHead, index) in answerHeads"
        :key="index"
        class="mb-4"
      >
        <answer-over-view
          :answer-head="answerHead"
          :book-id="bookId"
          @on-click-like="onClick"
        />
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
            :to="'/top/book/' + bookId + '/toi/questions/first'"
            outlined
            block
            color="white"
          >
            回答してみる
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { AnswerHead, SendLikeInfo } from "@/axios/biztoi";
import AnswerOverView from "@/components/organisms/AnswerOverView.vue";

@Component({ components: { AnswerOverView } })
export default class AnswerOverViewList extends Vue {
  @Prop({ default: () => [] }) private answerHeads!: AnswerHead[] | undefined;
  @Prop() private bookId!: string;
  @Emit("on-click-like")
  private onClick(sendLikeInfo: SendLikeInfo) {}
  private existAnswerHeads(): boolean {
    if (this.answerHeads) {
      if (this.answerHeads.length > 0) {
        return true;
      } else return false;
    }
    return false;
  }
}
</script>
