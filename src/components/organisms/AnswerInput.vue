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
          :disabled="answersValidate"
          @click="
            postAndPush(
              question,
              `/top/book/${question.toiId}/toi/questions/${question.nextQuestionId}`
            )
          "
          outlined
          block
          color="primary"
        >
          次を回答する
        </v-btn>
        <v-btn
          v-else
          :disabled="answersValidate"
          @click="postAndPush(question, `/top`)"
          outlined
          block
          color="primary"
        >
          回答を終了する
        </v-btn>
      </v-card-actions>
    </v-container>
    <v-progress-linear :value="getProgressValue()"></v-progress-linear>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Answer, Question } from "@/axios/biztoi";
import size from "lodash/size";

@Component
export default class AnswerInput extends Vue {
  @Prop({ default: null }) private question!: Question;
  @Prop({ default: [] }) private answers!: Answer[];
  @Prop({ default: 0 }) private questionNo?: number;
  @Prop({ default: 0 }) private questionMax?: number;
  @Emit() private async postAnswer(question: Question) {}
  private async postAndPush(question: Question, path: string) {
    await this.postAnswer(question);
    await this.$router.push(path);
  }

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
    // TODO orderId answersのorderIdのMax値を取得して+1する
    this.answers!.push({
      id: "",
      orderId:
        Math.max.apply(
          null,
          this.answers.map(ans => ans.orderId)
        ) + 1,
      answer: "",
      answerHeadId: this.answers[0].answerHeadId,
      questionId: this.answers[0].questionId,
      inserted: ""
    });
  }
  private deleteAnswer(item: Answer) {
    if (this.answers) {
      const index = this.answers.findIndex(v => v.id === item.id);
      this.answers.splice(index, 1);
    }
  }
  // FIXME v-textareaのrulesがすぐに反応してしまい、バグのように見える
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
