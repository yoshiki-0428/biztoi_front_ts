<template>
  <v-content>
    <v-flex xs12>
      <answer-complete-dialog />
      <router-view />
      <footer-menu />
    </v-flex>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnswerCompleteDialog from "@/container/AnswerComoleteDialog";
import FooterMenu from "@/components/organisms/FooterMenu.vue";

@Component({
  components: {
    AnswerCompleteDialog,
    FooterMenu
  }
})
export default class BaseLayout extends Vue {}
</script>
