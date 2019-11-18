<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card class="white--text mb-4" :img="require('@/assets/back.png')">
          <v-card-title class="font-weight-bold">
            ビジトイ
          </v-card-title>
          <v-card-text class="white--text font-weight-bold">
            <p>それはあなたにとって極上の体験</p>
            <p>今しかできない体験を今すぐ手に入れよう</p>
            <login-button />
          </v-card-text>
        </v-card>

        <v-card class="mb-4">
          <v-card-title>
            About BizToi
          </v-card-title>
          <v-card-text>
            どんなサービス？
          </v-card-text>
        </v-card>

        <v-img class="mb-4" :src="require('@/assets/howto.png')" />

        <v-card class="mb-4">
          <v-card-title>
            BizToi
          </v-card-title>
          <v-card-text>
            <h2>
              あなたの読書をより有意義に「ビジトイ」！
            </h2>
            <br />
            <p>読書した本の内容をどれだけ覚えていますか？</p>
            <p>あなた知識の吸収を手助けします</p>
            <p>読書しただけで満足していませんか</p>
            <p>実際の生活にどれだけ活用できているでしょうか</p>
            <h3>ビジトイは「忘れない・実践で活かせる読書」を提供します</h3>
          </v-card-text>
          <login-button />
        </v-card>
      </v-flex>
    </v-layout>
    <site-footer></site-footer>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginButton from "@/components/organisms/LoginButton.vue";
import SiteFooter from "@/components/organisms/SiteFooter.vue";

@Component({
  components: {
    LoginButton,
    SiteFooter
  }
})
export default class IntroducePage extends Vue {}
</script>

<style lang="scss" scoped>
/*li*/
/*  list-style: none*/

/*ul {*/
/*  text-align: left;*/
/*}*/
</style>
