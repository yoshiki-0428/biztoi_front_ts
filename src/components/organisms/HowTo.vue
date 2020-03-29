<template>
  <v-list class="pa-5" height="80vh">
    <v-list-item-title class="display-1 my-10">ご利用方法</v-list-item-title>
    <v-list-item class="text-left" v-for="item in step" :key="item.step">
      <v-list-item-avatar class="primary darken-1">
        {{ item.stepNum }}
      </v-list-item-avatar>
      <v-list-item-content class="ma-5">
        <v-list-item-title>
          {{ item.title }}
          <v-icon size="15" class="ml-2 mb-1">{{ item.icon }}</v-icon>
        </v-list-item-title>
        <v-list-item-subtitle class="caption">
          {{ item.text }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface IStep {
  stepNum: number;
  title: string;
  icon: string;
  text: string;
}
@Component
export default class HowTo extends Vue {
  step: Array<IStep> = [
    {
      stepNum: 1,
      title: "ご登録",
      icon: "fa-sign-in-alt",
      text: "新規登録ボタンより登録ください。"
    },
    {
      stepNum: 2,
      title: "本の検索",
      icon: "fa-search",
      text: "本を選びましょう！"
    },
    {
      stepNum: 3,
      title: "回答",
      icon: "fa-pen",
      text: "STEPに沿って回答してみよう！"
    },
    {
      stepNum: 4,
      title: "共有",
      icon: "fa-book-open",
      text: "他の人の回答も見てみよう！"
    }
  ];
}
</script>
