<template>
  <v-bottom-navigation shift dark app>
    <v-btn v-for="item in menu" :key="item.icon" :to="item.link" exact>
      <!-- TODO mdi icon -->
      <v-icon>{{ item.icon }}</v-icon>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-btn>
  </v-bottom-navigation>
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
  IMenuBtn: number = 0;
  menu: Array<IMenuBtn> = [
    {
      icon: "mdi-home",
      title: "Home",
      link: "/top"
    },
    {
      icon: "mdi-heart",
      title: "Favorite",
      link: "/top/favorite"
    },
    {
      icon: "mdi-magnify",
      title: "Search",
      link: "/top/search"
    },
    {
      icon: "mdi-account",
      title: "Account",
      link: "/top/account"
    }
  ];
}
</script>

<style lang="scss" scoped></style>
