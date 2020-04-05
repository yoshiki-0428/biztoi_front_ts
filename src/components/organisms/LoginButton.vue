<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-btn :href="url" target="_self" dark
          >新規登録 / ログインはこちら
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginButton extends Vue {
  url: string = `${process.env.VUE_APP_API_BASE_URL}/oauth2/authorization/biztoi`;
}
</script>
