<template>
  <v-container class="pa-0">
    <!-- キャッチコピー -->
    <v-card flat tile height="100vh">
      <v-img
        height="100vh"
        class="d-flex align-center justify-center"
        :src="require('@/assets/bg_top.jpg')"
      >
        <div>
          <v-card-title class="black--text display-3 justify-center mb-12">
            B
            <span class="primary--text">i</span>zTo
            <span class="primary--text">i</span>
          </v-card-title>
          <v-card-text class="display-1 pa-5 pt-12">
            <p>忘れない読書を</p>
            <p>あなたに</p>
            <login-button />
          </v-card-text>
        </div>
      </v-img>
    </v-card>
    <!-- BizToiとは？ -->
    <v-card flat tile color="white" height="800px">
      <v-card-title class="black--text display-1 justify-center py-10">
        BizToiとは？
      </v-card-title>
      <v-card-text class="black--text title pa-1">
        <p>読書で得た<span class="font-weight-bold">「知識」</span>を</p>
        <p>
          実際の<span class="font-weight-bold">「行動」</span>に繋げることを
        </p>
        <p>目的としたサービスです</p>
      </v-card-text>
      <v-card flat tile class="ma-5">
        <v-card-title class="white--text pt-5 d-flex justify-center">
          こんな人におすすめ！
        </v-card-title>
        <v-list tile class="pb-5">
          <v-list-item
            v-for="item in bullet"
            :key="item.index"
            class="ma-1 px-3"
          >
            <v-icon size="20">fa-check</v-icon>
            <v-list-item-title class="text-left ml-5">
              {{ item.text }}
            </v-list-item-title>
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
      text: "本の内容を忘れたくない"
    },
    {
      text: "いつでもメモを取りたい"
    },
    {
      text: "読んだ後にアウトプットをしたい"
    },
    {
      text: "今すぐ行動に起こしたい"
    },
    {
      text: "他の人の考えを知りたい"
    },
    {
      text: "知人に本の情報を共有したい"
    }
  ];
}
</script>

<style lang="scss" scoped></style>
