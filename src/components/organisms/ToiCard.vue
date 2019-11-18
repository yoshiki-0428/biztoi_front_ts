<template>
  <v-card class="mb-4">
    <div class="d-flex flex-no-wrap">
      <v-card-title>TOI</v-card-title>
      <div>
        <v-card-title v-text="toi.title"></v-card-title>
        <v-card-subtitle v-text="toi.detail"></v-card-subtitle>
      </div>
    </div>

    <v-card-actions>
      <v-btn
        outlined
        block
        color="primary"
        :to="'/top/book/' + toi.bookId + '/toi/' + toi.id"
      >
        回答してみる
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Toi } from "@/axios/biztoi";

@Component
export default class ToiCard extends Vue {
  @Prop()
  private toi!: Toi;
}
</script>
