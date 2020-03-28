<template>
  <div>
    <v-card>
      <v-row align="center" justify="center">
        <v-card-title class="pa-0 pb-1">Step: {{ stepNo }}</v-card-title>
      </v-row>
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
        <v-container>
          <v-textarea outlined>
            <template v-if="true" v-slot:append>
              <v-btn text icon color="accent" @click="deleteAnswer(item)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </template>
          </v-textarea>

          <v-row align="center" justify="center">
            <v-btn icon color="accent">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-row>
    </v-card>
    <v-card>
      <v-card-actions>
        <v-btn
          outlined
          block
          color="primary"
          @click="
            push(
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
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import { AnswerHead, Question } from "@/axios/biztoi";
import router from "@/router";

@Component
export default class AnswerInput extends Vue {
  @Prop({ default: () => [] }) private questionList!: Question[];
  @Prop({ default: null }) private answerHead!: AnswerHead;
  @Prop({ default: 1 }) private stepNo!: string;

  @Prop({ default: 0 }) private questionNo?: number;
  @Prop({ default: 0 }) private questionMax?: number;
  @Emit() private async postAnswer(question: Question) {}

  @Watch("stepNo")
  private watch() {
    // eslint-disable-next-line no-console
    console.log(this.stepNo);
  }

  private getProgressValue = (): number => {
    if (this.questionNo && this.questionMax) {
      return this.questionNo * (100 / this.questionMax);
    }
    return 0;
  };

  private async push(path: string) {
    await this.$router.push(path);
  }

  // private clickPlus() {
  //   this.createEmptyAnswer();
  // }

  // private createEmptyAnswer() {
  //   this.answers!.push({
  //     id: "",
  //     orderId:
  //       Math.max.apply(
  //         null,
  //         this.answers.map(ans => ans.orderId)
  //       ) + 1,
  //     answer: "",
  //     answerHeadId: this.answers[0].answerHeadId,
  //     questionId: this.answers[0].questionId,
  //     inserted: ""
  //   });
  // }
  // private deleteAnswer(item: Answer) {
  //   if (this.answers) {
  //     const index = this.answers.findIndex(v => v.id === item.id);
  //     this.answers.splice(index, 1);
  //   }
  // }
  // // FIXME v-textareaのrulesがすぐに反応してしまい、バグのように見える
  // private rules: Function[] = [(value: string) => !!value || "必須項目です。"];
  // get answersValidate(): boolean {
  //   if (this.question.required) {
  //     const noInputAnswers = this.answers.filter(
  //       answer => answer.answer.length === 0
  //     );
  //     return size(noInputAnswers) > 0;
  //   } else {
  //     return false;
  //   }
  // }
}
</script>
