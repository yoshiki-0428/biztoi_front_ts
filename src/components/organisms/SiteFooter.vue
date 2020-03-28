<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      <router-link tag="v-card-subtitle" :to="'/kiyaku'">
        <v-card-subtitle class="lead">
          利用規約
        </v-card-subtitle>
      </router-link>
      <v-card-text>
        <v-btn
          icon
          class="mx4"
          v-for="item in sns"
          :key="item.icon"
          :to="item.link"
        >
          <v-icon dark large v-text="item.icon"></v-icon>
        </v-btn>
      </v-card-text>
      {{ new Date().getFullYear() }} —
      <strong
        ><router-link tag="strong" :to="'/'">ビジトイ</router-link></strong
      >
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
export default class FooterMenu extends Vue {
  sns: Array<IMenuBtn> = [
    {
      icon: "mdi-google",
      title: "google",
      link: ""
    },
    {
      icon: "mdi-facebook-box",
      title: "facebook",
      link: ""
    },
    {
      icon: "mdi-twitter",
      title: "twitter",
      link: ""
    }
  ];
}
</script>

<style lang="scss" scoped>
.v-btn--icon {
  text-align: center;
  margin-right: 20px;
}
</style>
