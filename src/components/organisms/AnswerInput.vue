<template>
  <v-card class="mb-4">
    <v-card-title> 問: {{ question.title }} </v-card-title>

    <v-textarea
      outlined
      :label="question.title"
      :value="answer.answer"
    ></v-textarea>

    <v-card-actions>
      <v-btn
        outlined
        block
        color="primary"
        v-if="question.nextQuestionId != null"
        :to="
          '/top/book/' +
            question.toiId +
            '/toi/questions/' +
            question.nextQuestionId
        "
      >
        次を回答する
      </v-btn>
      <v-btn v-else to="/top">
        回答を終了する
      </v-btn>
    </v-card-actions>
    <v-progress-linear value="20"></v-progress-linear>
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
  private answer?: Answer;
}
</script>
