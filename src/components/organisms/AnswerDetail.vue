<template>
  <v-expansion-panels multiple accordion v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-header class="title">
        Step 1
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ answerHead }}
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header class="title">
        Step 2
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Some content
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header class="title">
        Step 3
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Some content
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Answer, AnswerHead } from "@/axios/biztoi";

@Component
export default class AnswerDetail extends Vue {
  @Prop({ default: null }) private answerHead!: AnswerHead;
  private panel: number[] = [0, 1, 2];
  // TODO 質問取得して質問のステップに紐づくAnswerを収集する
  // get stepToAnswer(step: string): Answer[] {
  //   if (this.answerHead.answers) {
  //     return this.answerHead.answers.filter(answer => answer.)
  //
  //   }
  // }
}
</script>
