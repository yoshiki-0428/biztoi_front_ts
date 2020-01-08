<template>
  <v-row justify="center">
    <v-dialog v-model="isShowInner" max-width="90%">
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
            @click.stop="closeDialog"
            :to="`/top/book/${property.bookId}`"
          >
            他の人の回答
          </v-btn>
          <v-btn
            exact
            color="primary"
            outlined
            @click.stop="closeDialog"
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
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class CompleteDialog extends Vue {
  @Prop({ default: { bookId: "" } }) private property!: { bookId: string };
  @Prop({ default: false }) private isShow!: boolean;
  private isShowInner: boolean = false;
  @Watch("isShow")
  private watchShow() {
    this.isShowInner = this.isShow;
  }
  @Emit() private closeDialog() {}
}
</script>
