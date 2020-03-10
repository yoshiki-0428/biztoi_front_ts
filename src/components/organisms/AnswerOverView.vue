<template>
  <div>
    <!-- TODO 表示内容を精査 -->
    <v-card-title>
      <v-avatar color="accent" size="30" class="mr-1">
        <v-img :src="answerHead.userInfo.pictureUrl"></v-img>
      </v-avatar>
      <span class="ml-1">{{ answerHead.userInfo.nickname }}</span>
    </v-card-title>
    <v-card-text class="caption text-left">
      {{ displayInsertedDate(answerHead.inserted) }}
    </v-card-text>
    <div v-if="!isDetail">
      <v-card-title class="subtitle-2 text-left">
        {{ displayAnswerTitle(answerHead.answers[0].answer) }}
      </v-card-title>
    </div>
    <!-- タイトルだけあればよさそう？ -->
    <!-- <v-card-text
      v-for="(answer, i) in answerHead.answers"
      :key="i"
      class="text-truncate ma-0 pa-0 text-left"
    >
      {{ answer.answer }}
    </v-card-text> -->
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        v-if="!isDetail"
        text
        color="primary"
        :to="'/top/book/' + bookId + '/answer/' + answerHead.id"
        >詳細を見る</v-btn
      >
      <v-btn icon @click="toggleIsActive">
        <v-icon :color="getColor">mdi-thumb-up</v-icon>
      </v-btn>
      <span class="subheading mr-2">{{ answerHead.likeInfo.sum }}</span>
      <share-icon-button
        v-if="!isDetail"
        :url="shareUrl"
        :text="
          `BizToiアプリで${answerHead.userInfo.nickname}さんの回答内容を見る`
        "
      />
    </v-card-actions>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { AnswerHead, SendLikeInfo } from "@/axios/biztoi";
import ShareIconButton from "@/components/atoms/ShareIconButton.vue";
@Component({
  components: { ShareIconButton }
})
export default class AnswerOverView extends Vue {
  @Prop({ required: true }) private answerHead!: AnswerHead;
  @Prop() private bookId!: string;
  @Prop({ default: false }) private isDetail!: boolean;
  private displayInsertedDate(str: string) {
    const cutNum: number = 10;
    return str.length > cutNum ? `回答日：${str.substring(0, cutNum)}` : str;
  }
  private displayAnswerTitle(str: string) {
    const cutNum: number = 50;
    return str.length > cutNum ? `${str.substring(0, cutNum)}...` : str;
  }
  private get getColor(): string {
    return this.answerHead.likeInfo.active ? "primary" : "";
  }
  private toggleIsActive() {
    this.answerHead.likeInfo.active = !this.answerHead.likeInfo.active;
    this.onClick({
      id: this.answerHead.id,
      active: this.answerHead.likeInfo.active
    });
  }
  private get shareUrl(): string {
    return `${window.location.href}/answer/${this.answerHead.id}`;
  }
  @Emit("on-click-like")
  private onClick(sendLikeInfo: SendLikeInfo) {}
}
</script>
