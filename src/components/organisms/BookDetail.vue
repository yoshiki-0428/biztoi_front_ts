<template>
  <v-card class="mb-4">
    <div class="d-flex flex-no-wrap">
      <v-img
        class="ma-2"
        height="120"
        width="80"
        :src="book.pictureUrl"
      ></v-img>

      <div>
        <v-card-title v-text="book.title"></v-card-title>
        <v-card-subtitle v-text="book.detail"></v-card-subtitle>
      </div>
    </div>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text color="indigo" :to="'/top/' + book.id">
        詳細へ
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/axios";
import { isUndefined } from "lodash";

@Component
export default class BookDetail extends Vue {
  @Prop({ required: true })
  private book!: Book;

  public getAuthor(): string {
    // TODO openapiにauthors、categoryを追加
    // if (!isArray(this.book.authors)) {
    //   console.log("著者が不明です！")
    //   return "unknown"
    // } else if (size(this.book.authors) === 1) {
    //   return this.book.authors[0]
    // } else {
    //   return this.book.authors.join()
    // }
    return "unknown";
  }
  public getPicture(): string {
    if (isUndefined(this.book.pictureUrl)) {
      return require("@/assets/noimage.png");
    }
    return this.book.pictureUrl;
  }
}
</script>
