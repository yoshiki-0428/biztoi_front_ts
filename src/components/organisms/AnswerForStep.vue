<template>
  <div>
    <v-card>
      <v-row align="center" justify="center">
        <v-card-title class="pa-0 pb-1">Step: {{ stepNo }}</v-card-title>
      </v-row>
      <v-progress-linear :value="getProgressValue()"></v-progress-linear>
      <v-divider></v-divider>
    </v-card>
    <v-card
      class="pa-2 mb-12"
      v-for="(question, index) in questionList"
      :key="index"
    >
      <v-row align="center" justify="center">
        <v-card-title class="pa-2">
          問{{ question.orderId }}: {{ question.title }}</v-card-title
        >
      </v-row>

      <v-row align="center" justify="center" class="pa-2">
        <v-container v-if="answerHead.answers">
          <div
            v-for="(answer, index) in filterAnswerQuestion(question.id)"
            :key="index"
          >
            <v-textarea
              v-model="answer.answer"
              :rules="rules"
              :label="`例) ${question.example}`"
              @change="postAnswer(answer)"
              outlined
            >
              <template
                v-if="filterAnswerQuestion(question.id).length > 1"
                v-slot:append
              >
                <v-btn text icon color="accent" @click="deleteAnswer(answer)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </template>
            </v-textarea>
          </div>

          <v-row align="center" justify="center">
            <v-btn
              icon
              color="accent"
              @click="
                createEmptyAnswer({
                  questionId: question.id,
                  answerHeadId: answerHead.id
                })
              "
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-row>
    </v-card>
    <v-card>
      <v-card-actions>
        <!-- TODO ダイアログ表示してトップへ -->
        <v-btn
          v-if="stepNo === '3'"
          outlined
          block
          :disabled="answersValidate"
          color="primary"
          @click="finishAnswer"
        >
          回答終了する
        </v-btn>
        <v-btn
          v-else
          outlined
          block
          color="primary"
          :disabled="answersValidate"
          @click="
            postAndPush(
              `/top/book/${answerHead.bookId}/answer/${
                answerHead.id
              }/step/${parseInt(stepNo) + 1}`
            )
          "
        >
          次のステップへ進む
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { Answer, AnswerHead, Question } from "@/axios/biztoi";
import router from "@/router";
import size from "lodash/size";

@Component
export default class AnswerInput extends Vue {
  @Prop({ default: () => [] }) private questionList!: Question[];
  @Prop({ default: null }) private answerHead!: AnswerHead;
  @Prop({ default: 1 }) private stepNo!: string;

  @Emit() private async createEmptyAnswer(params: {
    questionId: string;
    answerHeadId: string;
  }) {}
  @Emit() private async deleteAnswer(answer: Answer) {}
  @Emit() private async postAnswer(answer: Answer) {}
  @Emit() private async finishAnswer() {}

  rules: Function[] = [(value: string) => !!value || "必須項目です。"];
  get answersValidate(): boolean {
    if (this.answerHead.answers) {
      const requiredQuestion = this.questionList
        .filter(q => q.required)
        .map(q => q.id);

      const noInputAnswers = this.answerHead.answers.filter(
        a => requiredQuestion.includes(a.questionId) && a.answer.length === 0
      );
      return size(noInputAnswers) > 0;
    }
    return false;
  }

  private filterAnswerQuestion(questionId: string): Answer[] {
    if (this.answerHead.answers) {
      return this.answerHead.answers.filter(a => a.questionId === questionId);
    }
    return [];
  }

  private getProgressValue = (): number => {
    return (100 / 3) * parseInt(this.stepNo);
  };

  private async postAndPush(path: string) {
    await router.push(path);
  }
}
</script>
