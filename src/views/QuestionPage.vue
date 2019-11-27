<template>
  <div>
    <answer-input />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnswerInput from "@/container/AnswerInput";

@Component({
  components: {
    AnswerInput
  }
})
export default class QuestionPage extends Vue {}
</script>
