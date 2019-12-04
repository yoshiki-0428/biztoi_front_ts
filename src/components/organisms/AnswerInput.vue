<template>
  <v-card class="mb-4">
    <v-container>
      <v-row align="center" justify="center">
        <v-card-title class="pa-0 pb-1">Step: {{ question.step }}</v-card-title>
      </v-row>
      <v-divider></v-divider>
      <v-row align="center" justify="end" class="ma-2">
        <v-chip small>{{ question.answerType }}</v-chip>
      </v-row>
      <v-row align="center" justify="center">
        <v-card-title class="pa-2">
          問{{ questionNo }}:{{ question.title }}</v-card-title
        >
      </v-row>

      <v-row align="center" justify="center" class="pa-2">
        <v-container>
          <v-textarea
            v-for="(item, index) in answers"
            :key="index"
            :label="question.answerType"
            :value="item.answer"
            outlined
            autofocus
          ></v-textarea>
          <v-textarea
            class="mb-0"
            v-if="answers.length === 0"
            :label="question.answerType"
            outlined
            autofocus
          ></v-textarea>
          <v-row align="center" justify="center">
            <v-btn icon color="accent">
              <v-icon @click="clickPlus">mdi-plus</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-row>

      <v-card-actions>
        <v-btn
          v-if="question.nextQuestionId != null"
          :to="
            `/top/book/${question.toiId}/toi/questions/${question.nextQuestionId}`
          "
          outlined
          block
          color="primary"
        >
          次を回答する
        </v-btn>
        <v-btn v-else :to="'/top'" outlined block color="primary">
          回答を終了する
        </v-btn>
      </v-card-actions>
    </v-container>
    <v-progress-linear :value="getProgressValue()"></v-progress-linear>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Answer, Question } from "@/axios/biztoi";

@Component
export default class AnswerInput extends Vue {
  @Prop()
  private question!: Question;
  @Prop()
  private answers?: Answer[];
  @Prop()
  private questionNo?: number;
  @Prop()
  private questionMax?: number;
  private getProgressValue = (): number => {
    if (this.questionNo && this.questionMax) {
      return this.questionNo * (100 / this.questionMax);
    }
    return 0;
  };
  private clickPlus() {
    this.answers!.push({
      answer: "",
      answerHeadId: "",
      answerType: "",
      inserted: "",
      orderId: "",
      questionId: ""
    });
  }
}
</script>
