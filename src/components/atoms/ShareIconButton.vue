<template>
  <v-btn icon>
    <v-icon v-if="isNative" @click="share">mdi-share-variant</v-icon>
    <v-icon v-else @click="copyShareLink">fa-copy</v-icon>
    <v-snackbar v-model="snackbar" top color="primary" :timeout="1000">
      {{ completeText }}
    </v-snackbar>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Clipboard } from "ts-clipboard";

@Component
export default class ShareIconButton extends Vue {
  @Prop({ default: window.location.href }) private url!: string;
  @Prop({ default: "BizToiアプリでシェア内容を見る" }) private text!: string;
  private snackbar: boolean = false;
  private completeText: string = "";
  private get isNative(): boolean {
    return Boolean(window.navigator.share);
  }
  private share() {
    window.navigator.share!({
      title: this.text,
      text: this.text,
      url: this.url
    });
  }
  private copyShareLink() {
    Clipboard.copy(this.text + " " + this.url);
    this.snackbarEnabled("クリップボードにコピーしました");
  }
  private snackbarEnabled(text: string) {
    this.completeText = text;
    this.snackbar = true;
  }
}
</script>
