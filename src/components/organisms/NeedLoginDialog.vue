<template>
  <v-row justify="center">
    <v-dialog v-model="isShowInner" max-width="90%" persistent light>
      <v-card>
        <v-card-title class="headline justify-center">
          ようこそビジトイへ。
        </v-card-title>
        <v-img
          max-height="250"
          contain
          :src="require('@/assets/main_logo.png')"
        />
        <v-card-text class="justify-center">
          アプリを利用するにはログインが必要です。
        </v-card-text>
        <login-button @click="closeDialog"></login-button>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";
import LoginButton from "@/components/organisms/LoginButton.vue";
@Component({
  components: { LoginButton }
})
export default class NeedLoginDialog extends Vue {
  @Prop({ default: false }) private isShow!: boolean;
  private isShowInner: boolean = false;
  @Watch("isShow")
  private watchShow() {
    this.isShowInner = this.isShow;
  }
  @Emit() private closeDialog() {}
}
</script>
