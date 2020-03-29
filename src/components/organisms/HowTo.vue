<template>
  <v-list class="pa-5" height="80vh">
    <v-list-item-title class="display-1 my-10">ご利用方法</v-list-item-title>
    <v-list-item class="text-left">
      <v-list-item-avatar class="primary darken-1">1</v-list-item-avatar>
      <v-list-item-content class="ma-5">
        <v-list-item-title>
          ご登録
          <v-icon size="15" class="ml-2 mb-1">fa-sign-in-alt</v-icon>
        </v-list-item-title>
        <v-list-item-subtitle class="caption">
          新規登録ボタンより登録ください。
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item class="text-left">
      <v-list-item-avatar class="primary darken-1">2</v-list-item-avatar>
      <v-list-item-content class="ma-5">
        <v-list-item-title>
          本の検索
          <v-icon size="15" class="ml-2 mb-1">fa-search</v-icon>
        </v-list-item-title>
        <v-list-item-subtitle class="caption">
          本を選びましょう！
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item class="text-left">
      <v-list-item-avatar class="primary darken-1">3</v-list-item-avatar>
      <v-list-item-content class="ma-5">
        <v-list-item-title>
          回答
          <v-icon size="15" class="ml-2 mb-1">fa-pen</v-icon>
        </v-list-item-title>
        <v-list-item-subtitle class="caption">
          STEPに沿って回答してみよう！
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item class="text-left">
      <v-list-item-avatar class="primary darken-1">4</v-list-item-avatar>
      <v-list-item-content class="ma-5">
        <v-list-item-title>
          共有
          <v-icon size="15" class="ml-2 mb-1">fa-book-open</v-icon>
        </v-list-item-title>
        <v-list-item-subtitle class="caption">
          他の人の回答も見てみよう！
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HowTo extends Vue {}
</script>
