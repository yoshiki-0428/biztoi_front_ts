<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card :img="require('@/assets/back.png')">
          <v-card-title>
            ビジトイ
          </v-card-title>
          <v-card-text>
            <p>それはあなたにとって極上の体験</p>
            <p>今しかできない体験を今すぐ手に入れよう</p>
            <v-flex>
              <login-button />
            </v-flex>
          </v-card-text>
        </v-card>
        <v-card>
          <v-img :src="require('@/assets/back.png')">
            <v-card-title>
              about BizToi
            </v-card-title>
            <v-card-text>
              どんなサービス？
            </v-card-text>
          </v-img>
        </v-card>
        <v-card>
          <v-img contain :src="require('@/assets/howto.png')" />
          <v-card>
            <v-card-title>
              BizToi
            </v-card-title>
            <v-card-text>
              <h2>
                あなたの読書をより有意義に ビジトイ！
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
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginButton from "@/components/organisms/LoginButton.vue";

@Component({
  components: {
    LoginButton
  }
})
export default class IntroduceApp extends Vue {}
</script>

<style lang="scss" scoped>
/*li*/
/*  list-style: none*/

/*ul {*/
/*  text-align: left;*/
/*}*/
</style>
