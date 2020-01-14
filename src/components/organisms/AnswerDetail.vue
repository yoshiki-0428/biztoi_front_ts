<template>
  <v-expansion-panels multiple v-model="panel">
    <v-expansion-panel v-for="(s, index) in stepMap" :key="index">
      <v-expansion-panel-header class="title">
        Step {{ s.no }} {{ s.name }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list-item
          three-line
          v-for="(q, index) in filterdQuestions(s.no)"
          :key="index"
          class="text-left"
        >
          <!-- TODO UIの整理、調整  -->
          <v-list-item-content>
            <v-list-item-subtitle>
              <v-row justify="start" class="ma-0 mb-3">
                <v-list-item-title
                  class="title font-weight-bold pa-3 primary"
                  style="border-radius:25px;"
                  >Question</v-list-item-title
                >
              </v-row>
              <v-row justify="start" class="ma-0 mb-3 subtitle-1 mb-5">
                {{ q.title }}
              </v-row>
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="isExistAnswers(q.id)">
              <v-row justify="start" class="ma-0 mb-3">
                <v-list-item-title
                  class="title font-weight-bold pa-3 accent"
                  style="border-radius:25px;"
                  >Answer</v-list-item-title
                >
              </v-row>
              <div v-for="(a, index) in filterdAnswers(q.id)" :key="index">
                <v-row justify="start" class="ma-0 mb-3 subtitle-1">
                  {{ a.answer }}
                </v-row>
              </div>
            </v-list-item-subtitle>
          </v-list-item-content>
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
    return this.questionList.filter(q => q.step === Number(step));
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
