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
          @click="postAnswer(question.id)"
          outlined
          block
          color="primary"
        >
          次を回答する
        </v-btn>
        <v-btn
          v-else
          :to="`/top/`"
          :disabled="answersValidate"
          @click="
            () => {
              postAnswer(question.id);
              showCompleteDialog(question.id);
            }
          "
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
import UUID from "uuid";
import size from "lodash/size";
import router from "@/router";

@Component
export default class AnswerInput extends Vue {
  @Prop({ default: null }) private question!: Question;
  @Prop({ default: [] }) private answers!: Answer[];
  @Prop({ default: 0 }) private questionNo?: number;
  @Prop({ default: 0 }) private questionMax?: number;
  @Emit() private postAnswer(questionId: string) {}
  @Emit() private showCompleteDialog(bookId: string) {}
  private bookId: string = router.currentRoute.params.bookId;

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
      id: UUID.v4(),
      answer: "",
      answerHeadId: this.answers[0].answerHeadId,
      answerType: "",
      inserted: "",
      orderId: "",
      questionId: this.answers[0].questionId
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
