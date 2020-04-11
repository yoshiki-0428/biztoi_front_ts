<template>
  <v-content>
    <v-flex xs12>
      <router-view />
      <footer-menu />
      <complete-dialog />
      <need-login-dialog />
    </v-flex>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompleteDialog from "@/container/ComoleteDialog";
import FooterMenu from "@/components/organisms/FooterMenu.vue";
import NeedLoginDialog from "@/container/NeedLoginDialog";

@Component({
  components: {
    NeedLoginDialog,
    CompleteDialog,
    FooterMenu
  }
})
export default class BaseLayout extends Vue {}
</script>
