<template>
  <v-list class="pa-0">
    <v-img
      height="600px"
      class="d-flex align-center justify-center pa-5"
      :src="require('@/assets/HowTow.jpg')"
    >
      <v-list-item-title class="display-1 my-10">ご利用方法</v-list-item-title>
      <v-divider></v-divider>
      <v-list-item class="pa-2 text-left" v-for="item in step" :key="item.step">
        <v-list-item-avatar color="primary">
          <v-icon size="15">{{ item.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content class="pa-3 mt-1">
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="caption pt-2">
            {{ item.text }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <login-button />
    </v-img>
  </v-list>
</template>

<style scoped></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginButton from "@/components/organisms/LoginButton.vue";

interface IStep {
  title: string;
  icon: string;
  text: string;
}
@Component({
  components: { LoginButton }
})
export default class HowTo extends Vue {
  step: Array<IStep> = [
    {
      title: "ご登録",
      icon: "fa-sign-in-alt",
      text: "新規登録ボタンより登録ください。"
    },
    {
      title: "本の検索",
      icon: "fa-search",
      text: "本を選びましょう！"
    },
    {
      title: "回答",
      icon: "fa-pen",
      text: "STEPに沿って回答してみよう！"
    },
    {
      title: "共有",
      icon: "fa-book-open",
      text: "他の人の回答も見てみよう！"
    }
  ];
}
</script>
