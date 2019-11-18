<template>
  <div>
    <v-card-title>みんなの回答一覧</v-card-title>
    <v-card v-for="(answer, index) in answers" :key="index" class="mb-4">
      <!-- TODO 表示内容を精査 -->
      <v-card-title>
        <v-avatar color="accent" size="25" class="mr-1">
          <v-img src="https://placehold.jp/300x300.png"></v-img>
        </v-avatar>
        <span class="title">{{ answer.answers[0].answer }}</span>
      </v-card-title>
      <v-card-text class="text-truncate">
        {{ answer.answers[0].answer }}
        {{ answer.answers[1].answer }}
        {{ answer.answers[2].answer }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" :to="'/top/answer/' + answer.id">
          詳細を見る
        </v-btn>
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
import { Answer, AnswerHead } from "@/axios/biztoi";

@Component
export default class AnswerList extends Vue {
  @Prop(Array) private answers: AnswerHead[] | undefined;
}
</script>
