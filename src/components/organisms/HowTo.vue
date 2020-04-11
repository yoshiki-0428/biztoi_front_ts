<template>
  <v-list class="pa-0">
    <v-img
      height="850px"
      class="d-flex align-center justify-center pa-5"
      :src="require('@/assets/bg_howto.jpg')"
    >
      <v-list-item-title class="display-1 my-10">ご利用方法</v-list-item-title>
      <v-divider></v-divider>
      <v-list-item
        class="px-2 text-left"
        v-for="(item, index) in step"
        :key="index"
      >
        <v-row>
          <v-col cols="2">
            <v-list-item-avatar color="primary">
              <v-icon size="15">{{ item.icon }}</v-icon>
            </v-list-item-avatar>
          </v-col>
          <v-col cols="10">
            <v-list-item-content class="pa-3">
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="caption pt-2">
                {{ item.text }}
              </v-list-item-subtitle>
              <ul v-show="index === 2" class="mt-2 pa-0 text--secondary">
                <v-divider class="my-2"></v-divider>
                <li>
                  <h5 class="lead font-weight-light">Step1(目的設定)</h5>
                  <p class="caption py-2 mb-0">
                    読書する目的を設定しよう
                  </p>
                </li>
                <v-divider class="my-2"></v-divider>
                <li>
                  <h5 class="lead font-weight-light">Step2(知識)</h5>
                  <p class="caption pt-1 mb-0">
                    本を読んで得られた、知識を書き出してみよう
                  </p>
                </li>
                <v-divider class="my-2"></v-divider>
                <li>
                  <h5 class="lead font-weight-light">Step3(行動プラン)</h5>
                  <p class="caption pt-1 mb-0">
                    「Step2」で書き出した知識がどんなところに活かせるか考えてみよう
                  </p>
                </li>
              </ul>
            </v-list-item-content>
          </v-col>
        </v-row>
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
      title: "書籍検索",
      icon: "fa-search",
      text: "読みたい本を選びましょう！"
    },
    {
      title: "行動プランを作成",
      icon: "fa-pen",
      text: "Stepに沿って回答してみよう！"
    },
    {
      title: "回答の共有",
      icon: "fa-book-open",
      text: "他の人の回答も見てみよう！"
    }
  ];
}
</script>
