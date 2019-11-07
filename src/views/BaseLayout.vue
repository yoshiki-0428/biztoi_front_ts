<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout>
          <router-view />
          <footer-menu />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FooterMenu from "@/components/organisms/FooterMenu.vue";

@Component({
  components: {
    FooterMenu
  }
})
export default class BaseLayout extends Vue {}
</script>
