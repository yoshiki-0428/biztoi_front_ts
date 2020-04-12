<template>
  <div class="white pa-5">
    <v-list class="grey darken-2">
      <v-list-title class="white--text pt-5 d-flex justify-center title">
        こんなことで悩んでいませんか？
      </v-list-title>
      <v-list-item class="ma-2 px-3">
        <v-list-item-content class="text-left">
          <p class="mt-3">
            <v-icon class="mr-3">fa-comment</v-icon>
            本の内容を忘れてしまう
          </p>
          <p class="mt-3">
            <v-icon class="mr-3">fa-comment</v-icon>
            覚えた知識を使うことができない
          </p>
          <p class="mt-3">
            <v-icon class="mr-3">fa-comment</v-icon>
            本の内容を理解できているか不安
          </p>
          <v-img
            contain
            class="mt-10"
            height="200px"
            :src="require('@/assets/copy.png')"
          ></v-img>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<style scoped lang="scss">
.border {
  border: solid 1px black;
  position: relative;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class WorriedList extends Vue {}
</script>
