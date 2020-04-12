<template>
  <v-card class="ma-5 grey darken-2">
    <v-card-title class="white--text pa-3 d-flex justify-center title"
      >こんな人におすすめ！</v-card-title
    >
    <v-list-item v-for="item in bullet" :key="item.index" class="ma-1 px-4">
      <v-icon size="20">fa-check</v-icon>
      <v-list-item-content class="text-left ml-5">
        {{ item.text }}
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BulletList extends Vue {
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
      text: "本の情報を共有したい"
    }
  ];
}
</script>
