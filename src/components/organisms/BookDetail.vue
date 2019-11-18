<template>
  <v-card class="mb-4">
    <div>
      <v-img
        contain
        max-height="250"
        :src="book.pictureUrl"
        class="text-center"
      ></v-img>
      <div>
        <v-card-title v-text="book.title" class="justify-center"></v-card-title>
        <v-card-subtitle
          v-text="book.detail"
          class="justify-center"
        ></v-card-subtitle>
      </div>
    </div>

    <v-card-actions>
      <v-spacer></v-spacer>
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
import { Book } from "@/axios/biztoi";

@Component
export default class BookOverView extends Vue {
  @Prop()
  private book!: Book;
}
</script>
