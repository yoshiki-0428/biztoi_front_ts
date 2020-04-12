<template>
  <v-card flat tile height="100vh">
    <v-img
      height="100vh"
      class="d-flex align-center justify-center"
      :src="require('@/assets/bg_top.jpg')"
    >
      <div>
        <v-card-title class="black--text display-3 justify-center mb-12">
          B
          <span class="primary--text">i</span>zTo
          <span class="primary--text">i</span>
        </v-card-title>
        <v-card-text class="display-1 pa-5 pt-12">
          <p>忘れない読書を</p>
          <p>あなたに</p>
          <login-button />
        </v-card-text>
      </div>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginButton from "@/components/organisms/LoginButton.vue";

@Component({
  components: { LoginButton }
})
export default class CatchCopy extends Vue {}
</script>
