<template>
  <v-card class="mb-4" elevation="4">
    <v-card-title>{{ title }}</v-card-title>
    <v-slide-group v-model="books" show-arrows>
      <v-slide-item v-for="book in books" :key="book.id">
        <v-img :src="book.pictureUrl" class="ma-3" />
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Book } from "@/axios";

@Component
export default class BookSlide extends Vue {
  @Prop()
  private readonly title!: string;
  @Prop({ type: Array, default: [] })
  private readonly books!: Book[];
}
</script>
