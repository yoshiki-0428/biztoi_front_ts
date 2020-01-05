<template>
  <v-row justify="center">
    <v-dialog v-model="isShow" max-width="90%">
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
            outlined
            @click.stop="isShow = false"
            :to="`/top/book/${bookId}`"
          >
            他の人の回答
          </v-btn>
          <v-btn
            exact
            color="primary"
            outlined
            @click.stop="isShow = false"
            to="/top"
          >
            TOPへ戻る
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { Component, Emit, Vue, Watch } from "vue-property-decorator";

@Component
export default class AnswerCompleteDialog extends Vue {
  private bookId: string = "";
  private isShow: boolean = false;
  private created() {
    // eslint-disable-next-line no-console
    console.log("create");
    this.$on("showDialog", this.showDialogCallback);
    setTimeout(() => (this.isShow = true), 5000);
  }
  private destroyed() {
    // this.$off("showDialog", this.clearCallback);
  }
  // @On("showDialog")
  showDialogCallback(bookId: string) {
    // eslint-disable-next-line no-console
    console.log("create showdialog callback");
    this.bookId = bookId;
    this.isShow = true;
  }
  // @Off("showDialog", "showDialogCallback")
  clearCallback(): void {
    // eslint-disable-next-line no-console
    console.log("off showdialog callback");
  }
  // @Emit("showDialog")
  // showDialogCallbackA(bookId: string) {
  //   this.bookId = bookId;
  //   this.isShow = true;
  // }
  @Emit("showDialog")
  showDialogCallbackA(bookId: string) {
    // eslint-disable-next-line no-console
    console.log("create showDialog callback");
    this.bookId = bookId;
    this.isShow = true;
  }
  @Watch("isShow")
  watchShow() {
    // eslint-disable-next-line no-console
    console.log("create", this.isShow);
  }
}
</script>
