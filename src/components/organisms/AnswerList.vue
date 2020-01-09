<template>
  <div>
    <v-card-title>みんなの回答一覧</v-card-title>
    <v-card
      v-for="(answerHead, index) in answerHeads"
      :key="index"
      class="mb-4"
    >
      <!-- TODO 表示内容を精査 -->
      <v-card-title>
        <v-avatar color="accent" size="30" class="mr-1">
          <v-img :src="answerHead.userInfo.pictureUrl"></v-img>
        </v-avatar>
        <span>{{ answerHead.userInfo.nickname }}</span>
        <span class="title">{{ answerHead.answers[0].answer }}</span>
      </v-card-title>
      <v-card-text
        v-for="(answer, index) in answerHead.answers"
        :key="index"
        class="text-truncate ma-0 pa-0"
      >
        {{ answer.answer }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          :to="'/top/book/' + bookId + '/answer/' + answerHead.id"
          >詳細を見る</v-btn
        >
        <v-btn icon>
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
        <span class="subheading mr-2">256</span>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AnswerHead } from "@/axios/biztoi";
import router from "@/router";
@Component
export default class AnswerList extends Vue {
  @Prop(Array) private answerHeads: AnswerHead[] | undefined;
  private bookId: string = router.currentRoute.params.bookId;
}
</script>
