<template>
  <v-card class="mb-4 d-flex flex-no-wrap">
    <v-col cols="4" class="pa-1">
      <v-img
        :src="book.pictureUrl"
        max-height="200"
        contain
        class="ma-1"
      ></v-img>
    </v-col>
    <v-col cols="8" class="pb-0">
      <div class="text-left">
        <v-card-title
          v-text="book.title"
          class="subtitle-1 pt-1"
        ></v-card-title>
        <v-card-subtitle v-text="getCutText(book.detail)"></v-card-subtitle>
      </div>
      <v-row class="justify-end">
        <v-card-actions class="pr-2">
          <v-spacer></v-spacer>
          <v-btn text color="primary" :to="'/top/book/' + book.id"
            >詳細へ</v-btn
          >
          <v-btn icon v-if="!active" @click="bookmark">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon v-else color="pink" @click="bookmark">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-row>
    </v-col>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/axios/biztoi";

@Component
export default class BookOverView extends Vue {
  @Prop({ required: true })
  private book!: Book;
  private active: Boolean = false;

  getCutText(clamp: string): string {
    const cutNum = 50;
    return clamp.length > cutNum ? `${clamp.substring(0, cutNum)} ... ` : clamp;
  }
  bookmark() {
    this.active = !this.active;
  }
}
</script>
