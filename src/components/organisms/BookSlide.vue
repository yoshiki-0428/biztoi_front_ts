<template>
  <v-card class="mb-4" elevation="2">
    <v-card-title>{{ title }}</v-card-title>
    <v-slide-group v-model="books">
      <v-slide-item v-for="book in books" :key="book.isbn">
        <v-card elevation="0" :to="'/top/book/' + book.isbn" class="ma-2">
          <v-img height="120" width="80" :src="book.pictureUrl" />
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/axios/biztoi";

@Component
export default class BookSlide extends Vue {
  @Prop()
  private readonly title!: string;
  @Prop({ type: Array, default: [] })
  private readonly books!: Book[];
}
</script>
