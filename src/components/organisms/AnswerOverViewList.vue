<template>
  <v-container class="pa-0">
    <div v-if="existAnswerHeads">
      <v-card class="mb-4">
        <v-card-title class="pa-2">{{ title }}</v-card-title>
        <v-divider></v-divider>
        <div
          v-for="(answerHead, index) in answerHeads"
          :key="index"
          class="mb-4"
        >
          <answer-over-view
            :answer-head="answerHead"
            @on-click-like="onClick"
          />
        </div>
      </v-card>
    </div>
    <div v-if="isNewer && !existAnswerHeads">
      <v-card>
        <v-card-title class="subtitle-1">まだ回答がありません</v-card-title>
        <v-card-text class="text-left">
          最初の回答者になってみませんか？
        </v-card-text>
        <v-card-actions>
          <v-btn outlined block color="white" @click="createAnswerHead">
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
  @Prop({ default: false }) private isNewer!: boolean;
  @Prop({ default: undefined }) private bookId?: string | undefined;
  @Prop({ default: "" }) private title!: string;
  @Emit("on-click-like")
  private onClick(sendLikeInfo: SendLikeInfo) {}
  get existAnswerHeads(): boolean {
    return Boolean(this.answerHeads) && this.answerHeads!.length > 0;
  }
  @Emit()
  private createAnswerHead() {}
}
</script>
