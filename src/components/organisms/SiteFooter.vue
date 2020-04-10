<template>
  <v-footer>
    <v-col class="text-center pa-1" cols="12">
      <v-card-text class="pa-2 px-0">
        <span class="mr-3">
          <router-link tag="span" :to="'/terms'">
            利用規約
          </router-link>
        </span>
        <span class="mr-3">
          <router-link tag="span" :to="'/privacy'">
            プライバシーポリシー
          </router-link>
        </span>
        <v-btn
          class="px-0 pb-1"
          text
          target="blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdKz0jUSlSABW7swGaM924YKqnjkzaIKs8UuNlslwsKv9RIgA/viewform"
        >
          お問い合わせ
        </v-btn>
      </v-card-text>
      {{ new Date().getFullYear() }} —
      <strong>
        <router-link tag="strong" :to="'/'">BizToi</router-link>
      </strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface IMenuBtn {
  icon: string;
  title: string;
  link: string;
}

@Component
export default class FooterMenu extends Vue {}
</script>

<style lang="scss" scoped>
.v-btn--icon {
  text-align: center;
  margin-right: 20px;
}
</style>
