<template>
  <v-content>
    <v-container fluid>
      <v-flex xs12>
        <router-view />
        <footer-menu />
      </v-flex>
    </v-container>
  </v-content>
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
