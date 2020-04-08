<template>
  <v-card tile flat class="white">
    <v-card-title class="justify-center pt-10 black--text">
      こんなことで困っていませんか？
    </v-card-title>
    <v-row justify="center">
      <v-col cols="10" class="pa-2">
        <v-card-text class="text-left black--text">
          <p>
            <v-icon color="black" class="mr-3">fa-comment</v-icon>
            本の内容を忘れてしまう
          </p>
          <p>
            <v-icon color="black" class="mr-3">fa-comment</v-icon>
            覚えた知識を使うことができない
          </p>
          <p>
            <v-icon color="black" class="mr-3">fa-comment</v-icon>
            本の内容を理解できているか不安
          </p>
        </v-card-text>
      </v-col>
      <v-img height="250px" :src="require('@/assets/bg_copy.jpg')"></v-img>
    </v-row>
  </v-card>
</template>

<style scoped></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Copy extends Vue {}
</script>
