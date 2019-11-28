<template>
  <v-card class="mb-4">
    <v-card-title> 問{{ questionNo }}:{{ question.title }}</v-card-title>

    <v-textarea
      v-if="answers.length === 0"
      :label="question.answerType"
      outlined
    ></v-textarea>

    <v-textarea
      v-for="(item, index) in answers"
      :key="index"
      :label="question.answerType"
      :value="item.answer"
      outlined
    ></v-textarea>

    <v-card-actions>
      <v-btn
        v-if="question.nextQuestionId != null"
        :to="
          '/top/book/' +
            question.toiId +
            '/toi/questions/' +
            question.nextQuestionId
        "
        outlined
        block
        color="primary"
      >
        次を回答する
      </v-btn>
      <v-btn v-else to="/top" outlined block color="primary">
        回答を終了する
      </v-btn>
    </v-card-actions>
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
}
</script>
