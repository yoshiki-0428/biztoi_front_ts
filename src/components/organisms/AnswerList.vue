<template>
  <div>
    <v-card>
      {{ answers }}
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Answer } from "@/axios/biztoi";

@Component
export default class AnswerList extends Vue {
  @Prop(Array) private answers: Answer[] | undefined;
}
</script>
