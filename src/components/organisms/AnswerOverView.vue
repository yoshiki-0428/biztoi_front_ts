<template>
  <div>
    <!-- TODO 表示内容を精査 -->
    <v-card-title>
      <v-avatar color="accent" size="30" class="mr-1">
        <v-img :src="answerHead.userInfo.pictureUrl"></v-img>
      </v-avatar>
      <span>{{ answerHead.userInfo.nickname }}</span>
      <span class="title">{{ answerHead.answers[0].answer }}</span>
    </v-card-title>
    <v-card-text
      v-for="(answer, i) in answerHead.answers"
      :key="i"
      class="text-truncate ma-0 pa-0"
    >
      {{ answer.answer }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        :to="'/top/book/' + answerHead.bookId + '/answer/' + answerHead.id"
        >詳細を見る</v-btn
      >
      <v-btn icon @click="toggleIsActive">
        <v-icon :color="getColor">mdi-thumb-up</v-icon>
      </v-btn>
      <span class="subheading mr-2">{{ answerHead.likeInfo.sum }}</span>
      <share-icon-button
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
