<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="90%">
      <v-card>
        <v-card-title class="headline justify-center">
          回答お疲れさまでした。
        </v-card-title>
        <v-card-text class="justify-center">
          他の人の回答も見てみましょう。
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            text
            @click.stop="dialog = false"
            :to="`/top/book/${linkId}`"
          >
            他の人の回答
          </v-btn>
          <v-btn color="primary" text @click.stop="dialog = false" to="/top">
            TOPへ戻る
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import router from "@/router";

@Component
export default class AnswerComplete extends Vue {
  private linkId: string = router.currentRoute.params.bookId;
  @Prop()
  dialog: boolean = true;
}
</script>
