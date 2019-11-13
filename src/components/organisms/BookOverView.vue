<template>
  <v-card class="mb-4 d-flex flex-no-wrap" height="11rem" max-width="100%">
    <v-col cols="4">
      <v-img
        class="ma-2"
        height="8.5rem"
        width="6rem"
        :src="book.pictureUrl"
      ></v-img>
    </v-col>
    <v-col cols="8">
      <div>
        <v-card-title v-text="book.title"></v-card-title>
        <v-card-subtitle v-text="book.detail"></v-card-subtitle>
      </div>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="indigo" :to="'/top/book/' + book.id">
          詳細へ
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-col>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/axios/biztoi";
import { isUndefined } from "lodash";

@Component
export default class BookOverView extends Vue {
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
