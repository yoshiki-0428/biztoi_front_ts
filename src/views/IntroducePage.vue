<template>
  <v-container class="pa-0">
    <catch-copy />
    <worried-list />

    <div class="white py-5">
      <whats-biz-toi />
      <sample-answer-list class="ma-3" />
      <bullet-list />
    </div>
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
import AnswerOverView from "@/components/organisms/AnswerOverView.vue";
import { AnswerHead, Book } from "@/axios/biztoi";
import WorriedList from "@/components/introduce/WorriedList.vue";
import CatchCopy from "@/components/introduce/CatchCopy.vue";
import WhatsBizToi from "@/components/introduce/WhatsBizToi.vue";
import BulletList from "@/components/introduce/BulletList.vue";
import SampleAnswerList from "@/components/introduce/SampleAnswerList.vue";

@Component({
  components: {
    SampleAnswerList,
    BulletList,
    WhatsBizToi,
    CatchCopy,
    WorriedList,
    AnswerOverView,
    LoginButton,
    HowTo,
    SiteFooter
  }
})
export default class IntroducePage extends Vue {
  private books: Book[] = books;

  private answerHeads: AnswerHead[] = answerHeads;
}
</script>

<style lang="scss" scoped></style>
