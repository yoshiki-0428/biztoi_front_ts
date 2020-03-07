<template>
  <v-expansion-panels multiple v-model="panel">
    <v-expansion-panel v-for="(s, index) in stepMap" :key="index">
      <v-expansion-panel-header class="title">
        Step {{ s.no }} {{ s.name }}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="ma-0 pa-0">
        <v-list-item
          three-line
          v-for="(q, index) in filterdQuestions(s.no)"
          :key="index"
          class="text-left"
        >
          <div>
            <v-row justify="start" class="ma-0">
              <v-list-item-title class="title font-weight-bold mb-1">
                Question
                <v-divider class="primary"></v-divider>
              </v-list-item-title>
            </v-row>
            <v-row justify="start" class="subtitle-1 ma-0 mb-1">
              {{ q.title }}
            </v-row>
            <v-row justify="start" class="ma-0">
              <v-list-item-title class="title font-weight-bold mb-1">
                Answer
                <v-divider class="red accent-1"></v-divider>
              </v-list-item-title>
            </v-row>
            <div v-if="isExistAnswers(q.id)" class="mb-3">
              <v-row
                v-for="(a, index) in filterdAnswers(q.id)"
                :key="index"
                justify="start"
                class="subtitle-1 ma-0 mb-1"
              >
                {{ a.answer }}
              </v-row>
            </div>
            <div v-else class="mb-3">
              <v-row justify="start" class="ma-0 mb-3 subtitle-1">
                未回答
              </v-row>
            </div>
          </div>
        </v-list-item>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Answer, AnswerHead, Question } from "@/axios/biztoi";
import isUndefined from "lodash/isUndefined";

@Component
export default class AnswerDetail extends Vue {
  @Prop({ default: null }) private answerHead!: AnswerHead;
  @Prop({ default: () => [] }) private questionList!: Question[];
  private stepMap: { no: number; name: string }[] = [
    { no: 1, name: "目的" },
    { no: 2, name: "知識" },
    { no: 3, name: "行動プラン" }
  ];
  private panel: number[] = [0, 1, 2];
  private filterdQuestions(step: string): Question[] {
    return this.questionList.filter(q => q.step === step);
  }
  private filterdAnswers(questionId: string): Answer[] {
    if (isUndefined(this.answerHead.answers)) return [];
    return this.answerHead.answers!.filter(a => a.questionId === questionId);
  }
  private isExistAnswers(questionId: string): boolean {
    if (isUndefined(this.answerHead.answers)) return false;
    return (
      this.answerHead.answers!.filter(a => a.questionId === questionId)
        .length !== 0
    );
  }
}
</script>

<style lang="scss">
.v-expansion-panel-content__wrap {
  padding: 8px;
}
</style>
