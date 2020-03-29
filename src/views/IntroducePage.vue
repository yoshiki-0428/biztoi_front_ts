<template>
  <v-container class="pa-0">
    <!-- キャッチコピー -->
    <v-card
      tile
      :img="require('@/assets/back.png')"
      height="100vh"
      class="d-flex align-center justify-center"
    >
      <div>
        <v-card-title class="white--text display-3 justify-center mb-5">
          B
          <span class="primary--text">i</span>zTo
          <span class="primary--text">i</span>
        </v-card-title>
        <v-card-text class="white--text display-1 pa-5">
          <p>「知識」ｘ「行動」</p>
          <p>忘れない読書を</p>
          <p>あなたに</p>
          <login-button />
        </v-card-text>
      </div>
    </v-card>
    <!-- BizToiとは？ -->
    <v-card color="white" tile height="100vh">
      <v-card-title class="black--text display-1 justify-center py-10">
        BizToiとは？
      </v-card-title>
      <v-card-text class="black--text title">
        <p>読書で得た「知識」を</p>
        <p>実際の「行動」に繋げることを</p>
        <p>目的としたサービスです</p>
      </v-card-text>
      <v-card class="ma-2">
        <v-card-title class="white--text mt-2 d-flex justify-center">
          こんな人におすすめ！
        </v-card-title>
        <v-list class="pa-4">
          <v-list-item v-for="item in bullet" :key="item.index">
            <v-icon>fa-check</v-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card>
    <!-- 使い方 -->
    <how-to></how-to>
    <site-footer></site-footer>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginButton from "@/components/organisms/LoginButton.vue";
import SiteFooter from "@/components/organisms/SiteFooter.vue";
import HowTo from "@/components/organisms/HowTo.vue";

@Component({
  components: {
    LoginButton,
    HowTo,
    SiteFooter
  }
})
export default class IntroducePage extends Vue {
  bullet = [
    {
      text: "本の内容を覚えていたい！"
    },
    {
      text: "読んだ後にアウトプットをしたい！"
    },
    {
      text: "今すぐ行動に起こしたい！"
    },
    {
      text: "他の人のレビューを見たい！"
    },
    {
      text: "いつでもメモを取りたい！"
    },
    {
      text: "部下に本の情報を共有したい！"
    },
    {
      text: "ビジネス書の読み方を知りたい！"
    }
  ];
}
</script>

<style lang="scss" scoped></style>
