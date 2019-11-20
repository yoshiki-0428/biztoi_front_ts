<template>
  <v-card class="mb-4 d-flex flex-no-wrap">
    <v-col cols="4">
      <v-img :src="book.pictureUrl" width="200" contain class="mt-3"></v-img>
    </v-col>
    <v-col cols="8">
      <div>
        <v-card-title v-text="book.title" class="subtitle-1"></v-card-title>
        <v-card-subtitle v-text="getCutText(book.detail)"></v-card-subtitle>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="primary" :to="'/top/book/' + book.id"
          >詳細へ</v-btn
        >
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

@Component
export default class BookOverView extends Vue {
  @Prop({ required: true })
  private book!: Book;

  getCutText(clamp: string): string {
    const cutNum = 60;
    return clamp.length > cutNum ? clamp.substring(0, cutNum) + "..." : clamp;
  }
}
</script>
