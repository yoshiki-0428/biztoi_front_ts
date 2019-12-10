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
            v-model="item.answer"
            :rules="rules"
            outlined
          >
            <template v-if="answers.length > 1" v-slot:append>
              <v-btn text icon color="accent" @click="deleteAnswer(item)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </template>
          </v-textarea>

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
          :disabled="answersValidate"
          outlined
          block
          color="primary"
        >
          次を回答する
        </v-btn>
        <v-btn
          v-else
          :to="'/top'"
          outlined
          block
          color="primary"
          :disabled="answersValidate"
        >
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
import UUID from "uuid";
import size from "lodash/size";

@Component
export default class AnswerInput extends Vue {
  @Prop()
  private question!: Question;
  @Prop()
  private answers!: Answer[];
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
    this.createEmptyAnswer();
  }
  private createEmptyAnswer() {
    this.answers!.push({
      id: UUID.v4(),
      answer: "",
      answerHeadId: "",
      answerType: "",
      inserted: "",
      orderId: "",
      questionId: ""
    });
  }
  private deleteAnswer(item: Answer) {
    if (this.answers) {
      const index = this.answers.findIndex(v => v.id === item.id);
      this.answers.splice(index, 1);
    }
  }
  private rules: Function[] = [(value: string) => !!value || "必須項目です。"];
  get answersValidate(): boolean {
    if (this.question.required) {
      const noInputAnswers = this.answers.filter(
        answer => answer.answer.length === 0
      );
      return size(noInputAnswers) > 0;
    } else {
      return false;
    }
  }
}
</script>
