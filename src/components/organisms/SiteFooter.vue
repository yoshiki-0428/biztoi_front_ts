<template>
  <v-footer>
    <v-col class="text-center pa-1" cols="12">
      <v-card-text class="pa-2">
        <v-btn
          icon
          class="mx4"
          v-for="item in sns"
          :key="item.icon"
          :to="item.link"
        >
          <v-icon dark size="35" v-text="item.icon"></v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="pa-2">
        <span>
          <router-link tag="span" :to="'/terms'">
            利用規約
          </router-link>
        </span>
        —
        <span>
          <router-link tag="span" href="">
            お問い合わせ
          </router-link>
        </span>
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
