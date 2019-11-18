<template>
  <v-card class="mb-4 d-flex flex-no-wrap">
    <v-col cols="4">
      <v-img class="ma-2" :src="book.pictureUrl" contain></v-img>
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

@Component
export default class BookOverView extends Vue {
  @Prop({ required: true })
  private book!: Book;
}
</script>
