<template>
  <v-content>
    <v-flex xs12>
      <answer-complete v-if="$route.name === 'complete'" />
      <router-view />
      <footer-menu />
    </v-flex>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnswerComplete from "@/components/organisms/AnswerComplete.vue";
import FooterMenu from "@/components/organisms/FooterMenu.vue";

@Component({
  components: {
    AnswerComplete,
    FooterMenu
  }
})
export default class BaseLayout extends Vue {}
</script>
