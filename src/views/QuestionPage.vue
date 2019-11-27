<template>
  <div>
    <answer-out-put></answer-out-put>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnswerOutPut from "@/container/AnswerOutPut";

@Component({
  components: {
    AnswerOutPut
  }
})
export default class QuestionPage extends Vue {}
</script>
