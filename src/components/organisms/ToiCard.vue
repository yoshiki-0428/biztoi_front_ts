<template>
  <v-card class="mb-4">
    <div class="d-flex flex-no-wrap">
      <v-card-title>TOI</v-card-title>
      <div v-if="toi">
        <v-card-title v-text="toi.title"></v-card-title>
        <v-card-subtitle v-text="toi.detail"></v-card-subtitle>
      </div>
    </div>

    <v-card-actions>
      <v-btn
        outlined
        block
        color="primary"
        :to="'/top/book/' + bookId + '/step/1'"
      >
        回答してみる
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Toi } from "@/axios/biztoi";
import router from "@/router";

@Component
export default class ToiCard extends Vue {
  @Prop()
  private toi?: Toi;
  private bookId = router.currentRoute.params.bookId;
}
</script>
