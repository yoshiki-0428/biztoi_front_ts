<template>
  <v-card>
    <v-card-title class="py-2">
      <v-avatar color="accent" size="30" class="mr-1">
        <v-img :src="userPicture"></v-img>
      </v-avatar>
      <span class="ml-1">{{
        answerHead.userInfo ? answerHead.userInfo.nickname : ""
      }}</span>
    </v-card-title>
    <v-card-title class="subtitle-1 text-left py-1">
      {{ displayAnswerTitle(answerHead.answers[0].answer) }}
    </v-card-title>
    <v-card-actions class="py-1">
      <v-card-text class="caption text-left pl-2">
        {{ displayInsertedDate(answerHead.inserted) }}
      </v-card-text>
      <v-btn
        v-if="!isDetail"
        small
        outlined
        class="caption"
        :to="
          isSample
            ? `/article/${no}`
            : '/top/book/' + answerHead.bookId + '/answer/' + answerHead.id
        "
        >詳細へ
      </v-btn>
      <v-btn icon @click="toggleIsActive">
        <v-icon :color="color">mdi-thumb-up</v-icon>
      </v-btn>
      <span class="subheading mr-2">{{ answerHead.likeInfo.sum }}</span>
      <share-icon-button
        v-if="!isDetail"
        :url="shareUrl"
        :text="`BizToiアプリで回答内容を見る`"
      />
    </v-card-actions>
  </v-card>
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
  @Prop({ default: false }) private isSample!: boolean;
  @Prop({ default: "0" }) private no!: string;

  displayInsertedDate(str: string) {
    const cutNum: number = 10;
    return str.length > cutNum
      ? `最終更新日: ${str.substring(0, cutNum)}`
      : str;
  }

  displayAnswerTitle(str: string) {
    const cutNum: number = 50;
    return str.length > cutNum ? `${str.substring(0, cutNum)}...` : str;
  }

  get color(): string {
    return this.answerHead.likeInfo.active ? "primary" : "";
  }

  get shareUrl(): string {
    return `${window.location.href}/answer/${this.answerHead.id}`;
  }

  get userPicture(): string {
    return this.answerHead.userInfo
      ? this.answerHead.userInfo!.pictureUrl
      : require("@/assets/noimage.png");
  }

  toggleIsActive() {
    this.answerHead.likeInfo.active = !this.answerHead.likeInfo.active;
    this.onClick({
      id: this.answerHead.id,
      active: this.answerHead.likeInfo.active
    });
  }
  @Emit("on-click-like")
  private onClick(sendLikeInfo: SendLikeInfo) {}
}
</script>
