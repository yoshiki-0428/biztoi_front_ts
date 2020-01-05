<template>
  <v-content>
    <v-flex xs12>
      <answer-complete-dialog @showDialog="showDialog" />
      <router-view />
      <footer-menu />
    </v-flex>
  </v-content>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import AnswerCompleteDialog from "@/components/organisms/AnswerCompleteDialog.vue";
import FooterMenu from "@/components/organisms/FooterMenu.vue";

@Component({
  components: {
    AnswerCompleteDialog,
    FooterMenu
  }
})
export default class BaseLayout extends Vue {
  @Emit("showDialog") private showDialog() {}
}
</script>
